import functools
import os

from flask import jsonify, make_response, request

import jwt

from app.models import User
from app.utils.utils import k_debug


def is_user_token_valid(token):
    try :
        decoded_token = jwt.decode(token, os.getenv("SECRET_KEY"),  algorithms="HS256")
    except jwt.ExpiredSignatureError :
        return jsonify({"error" : "Le token est expiree"})
    k_debug(f"decoded_token : {decoded_token}")
    user_id = decoded_token.get("user_id", None)
    if not user_id :
        return False
    user = User.query.get(user_id)
    if not user :
        return False
    return True

def login_required(func):
    @functools.wraps(func)
    def decorator(*args, **kwargs):
        access_tokken = request.headers.get("access-tokken")
        k_debug(f"access_tokken : {access_tokken}")
        if not access_tokken:
            return jsonify({"error" : "you need to login fisrt"})
        elif not is_user_token_valid(access_tokken):
            return jsonify({"error" : "Invalid access token"})
        else :
            return func(*args, **kwargs)
    return decorator