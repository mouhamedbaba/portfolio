import uuid
from flask import Blueprint, jsonify, request
from app import db
from app.utils.utils import k_debug
from .shema import ExperienceSchema
from app.models import Experience


experiences_bp = Blueprint('experience', __name__)

experience_schema = ExperienceSchema()
experiences_schema = ExperienceSchema(many=True)


@experiences_bp.route('/experiences', methods=['GET'])
def get_exps():
    exps = Experience.query.all()
    return jsonify(experiences_schema.dump(exps))

@experiences_bp.route('/experiences', methods=['POST'])
def add_exps():
    try :
        data = request.get_json()
        required_params = ["name", "uid"]
        
        for param in required_params :
            if param not in required_params :
                return jsonify({"error" : "Veillez renseigner les champs requis"})
        
        
        new_exp = Experience(id=str(uuid.uuid4()), **data)
        db.session.add(new_exp)
        db.session.commit()
        return jsonify(experience_schema.dump(new_exp)), 201
    except Exception as e :
        k_debug(f"une erreur s'est produite {e}")
        return jsonify({"error" : "une erreur s'est produite"}), 400
    
    