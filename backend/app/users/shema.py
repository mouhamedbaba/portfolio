from app.models import User
from app import ma
class UserSchema(ma.SQLAlchemySchema):
    class Meta:
        model = User
        fields = ("id", "email", "first_name", "last_name", "created_at", "updated_at")