from flask import Blueprint, jsonify, request

from app.utils.utils import k_debug
from app.security.login_required import login_required


from .shema import ProjectSchema
from app.models import Project
from app import db
import uuid


projects_bp = Blueprint('projects', __name__)

project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)

@projects_bp.route('/projects', methods=['GET'])
def get_projects():
    all_projects = Project.query.all()
    result = projects_schema.dump(all_projects)
    return jsonify(result)


@projects_bp.route('/projects', methods=['POST'])
@login_required
def add_project():
    data = request.get_json()
    required_params = ["titre", "description", "uid"]
    for params in required_params :
        if not data.get(params):
            return jsonify({"error" : f"Tous les champs sont obligatoires {required_params}"}), 400
    try :
        new_project = Project(id=str(uuid.uuid4()), **data)
        k_debug("le projet a ete cree avec succe ! ")
        db.session.add(new_project)
        db.session.commit()
        return jsonify(project_schema.dump(new_project)), 201
    except Exception as e :
        k_debug(f"une erreur s'est produite ! {e}")
        return jsonify({"error" : "une erreur s'est produite, veuillez reesayer"})
        