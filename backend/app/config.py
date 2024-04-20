import os
from .constants import DB

class AppConfig:
    SECRET_KEY = os.environ.get('SECRET_KEY') or 'secret'
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL') or DB
    SQLALCHEMY_TRACK_MODIFICATIONS = False
