import datetime
from flask import Blueprint, request, jsonify
import jwt
from app import db, bcrypt
from app.models import User
from app.utils.utils import k_debug
from app.users.shema import UserSchema
import os




auth_bp = Blueprint('auth', __name__)
user_schema = UserSchema()

@auth_bp.route("/auth/users/token", methods=["POST"])
def user_login():
    data = request.get_json()
    if not data.get("email") or not data.get("password") :
        return jsonify({"error" : "tous les champs sont obligatoires"})
    
    user = User.query.filter(User.email==data["email"]).first()
    try :
        if user and bcrypt.check_password_hash(user.password, data["password"]):
            user = user_schema.dump(user)
            atexp=datetime.datetime.now()+datetime.timedelta(seconds=60)
            rtexp=datetime.datetime.now()+datetime.timedelta(weeks=3)
            payload = {
                "user_id" : user["id"],
                "exp" : atexp
            }
            user["access_token"] = jwt.encode(payload,os.getenv("SECRET_KEY"),algorithm="HS256")
            user["refresh_token"] = jwt.encode({"user_id" : user["id"], "exp" : rtexp}, os.getenv("SECRET_KEY"),algorithm="HS256")
            
            return jsonify(user), 200
        else :
            return jsonify({"error" : "invalid credentials"})
    except Exception as e :
        k_debug(f"une erreur est survenu , {e}")
        return jsonify({"error" : "une erreur est survenu, veuillez reesayer plus tard "}), 500
    

@auth_bp.route("/auth/users/token/refresh", methods=["POST"])
def refresh_user_token():
    refresh_token = request.headers.get("refresh-token")
    k_debug(refresh_token)
    try :
        sub = jwt.decode(refresh_token, os.getenv("SECRET_KEY"),  algorithms="HS256")
        print(sub)
    except jwt.ExpiredSignatureError :
        return ({"error" : "le token est expire"})
    return "ok"
    
    
    