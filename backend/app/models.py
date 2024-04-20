from app import db, bcrypt
import uuid
class Device(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    device_name = db.Column(db.String(80))
    api_key = db.Column(db.String(80))
    created_by_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable = True)
    
    def __init__(self, device_name, created_by_id, api_key=None) -> None:
            self.device_name = device_name
            self.api_key = api_key or uuid.uuid4().hex
            self.created_by_id = created_by_id
            
    def json(self):
        return {
            "id": self.id,
            "device_name": self.device_name,
            "api_key": self.api_key
        }
        
    @classmethod
    def find_by_device_name(cls, device_name):
        return cls.query.filter_by(device_name = device_name).first()
    
    
    @classmethod
    def find_by_api_key(cls, api_key):
        return cls.query.filter_by(api_key = api_key).first()
    
    def save_to_db(self):
        db.session.add(self)
        db.session.commit()
        
    def delete_from_db(self):
        db.session.delete(self)
        db.session.commit()



class User(db.Model):
    __tablename__ = 'users'
    
    id = db.Column(db.String(100), primary_key=True)
    username = db.Column(db.String(100), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)
    first_name = db.Column(db.String(50), nullable=True)
    last_name = db.Column(db.String(50), nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.current_timestamp())
    updated_at = db.Column(db.DateTime, default=db.func.current_timestamp(), onupdate=db.func.current_timestamp())
    
    def set_password(self, password):
        self.password = bcrypt.generate_password_hash(password).decode('utf-8')
    
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password_hash, password)

    def __repr__(self):
        return f"<User {self.email}>"





class Project(db.Model):
    __tablename__ = 'projects'
    
    
    id = db.Column(db.String(100), primary_key=True)
    titre = db.Column(db.String(80))
    description = db.Column(db.Text)
    start_date = db.Column(db.DateTime, nullable=True)
    end_date = db.Column(db.DateTime, nullable=True)
    uid = db.Column(db.String(100), db.ForeignKey('users.id'))
    project_url = db.Column(db.String(200), nullable=True)
    cover_url = db.Column(db.String(200), nullable=True)
    status =  db.Column(db.String(100), nullable=True)
    is_published = db.Column(db.Boolean, default=False)
    deadline = db.Column(db.DateTime, nullable=True)
    type = db.Column(db.String(100), nullable=True)
    
    def __repr__(self):
        return f"<Project {self.titre}>"
    

class Experience(db.Model):
    __tablename__ = "experiences"
    
    
    id = db.Column(db.String(100), primary_key = True)
    name = db.Column(db.String(120))
    description = db.Column(db.Text, nullable=True, default="Pas de Description")
    start_date=db.Column(db.DateTime,  default=db.func.current_timestamp())
    end_date=db.Column(db.DateTime, nullable=True)
    uid = db.Column(db.String(100), db.ForeignKey('users.id'))
    entreprise = db.Column(db.String(120))
    localisation = db.Column(db.String(120))

    def __repr__(self) -> str:
        return f"Experience ${self.name}"