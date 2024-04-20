from app.models import Experience
from app import ma

class ExperienceSchema(ma.SQLAlchemySchema):
    class Meta :
        model = Experience
        feilds = ("id", "name", "description", "start_date", "end_date", "uid", "entreprise", "localisation")