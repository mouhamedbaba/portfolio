from flask import Blueprint

users_bp = Blueprint('users', __name__)

@users_bp.route('/users')
def get_users():
    return 'Liste des utilisateurs'