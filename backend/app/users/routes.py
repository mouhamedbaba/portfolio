from flask import Blueprint, jsonify, request
from app.models import User
from app.utils.utils import k_debug
from app.security.api_required import api_required
from .shema import UserSchema
from app import db
from app.configs.firebase import auth


users_bp = Blueprint('users', __name__)

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@users_bp.route('/users', methods=["GET", "POST"])
# @api_required
def get_users():
    try :
        if request.method == "POST":
            data = request.get_json()
            if not data.get('username') or not data.get('email') or not data.get('password'):
                return jsonify({"error": "Tous les champs sont obligatoires"}), 400
            
            if User.query.filter_by(username=data['username']).first():
                return jsonify({"error": "Le nom d'utilisateur est déjà utilisé"}), 400
            
            if User.query.filter_by(email=data['email']).first():
                return jsonify({"error": "L'email est déjà utilisé"}), 400
            
            first_name = data.get('first_name', None)
            last_name = data.get('last_name', None)
            
            nouvel_utilisateur = auth.create_user(
                email=data['email'],
                password=data['password'],
            )
            new_user = User(id= nouvel_utilisateur.uid, username=data["username"], email=data["email"], password=data["password"], first_name=first_name, last_name=last_name)
            new_user.set_password(data['password'])
            k_debug(nouvel_utilisateur)
            db.session.add(new_user)
            db.session.commit()
            return jsonify(user_schema.dump(new_user)), 201
    except Exception as e:
        k_debug(f"une erreur s'est produite {e}")
        return jsonify({"error": "une erreur est survenue, veuillez reessayer"}), 500
        
        
    users = User.query.all()
    return jsonify(users_schema.dump(users))
