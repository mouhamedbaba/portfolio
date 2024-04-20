from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from .config import AppConfig
from flask_bcrypt import Bcrypt
from flask_marshmallow import Marshmallow
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object(AppConfig)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
ma = Marshmallow(app)

migrate = Migrate(app, db)

from app.users.routes import users_bp
from app.projects.routes import projects_bp
from app.auth.login_user import auth_bp
from app.experiences.routes import experiences_bp

app.register_blueprint(users_bp)
app.register_blueprint(projects_bp)
app.register_blueprint(auth_bp)
app.register_blueprint(experiences_bp)