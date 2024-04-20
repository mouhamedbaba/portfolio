from app.models import Project
from app import ma
class ProjectSchema(ma.SQLAlchemySchema):
    class Meta:
        model = Project
        fields = ("id", "titre", "description", "start_date", "end_date", "uid", "project_url", "cover_url", "status", "is_published", "deadline", "type")