from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import AppConfig

app = Flask(__name__)
app.config.from_object(AppConfig)
db = SQLAlchemy(app)

from app.users.routes import users_bp

app.register_blueprint(users_bp)






