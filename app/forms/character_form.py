from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from app.models import Character

class CharacterForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired(), Length(min=1, max=40, message="Name must be between 1 and 40 characters")])
    user_id = IntegerField('owner', validators=[DataRequired()])
    gender = StringField('gender', validators=[DataRequired(), Length(min=1, max=40, message="Gender must be between 1 and 40 characters")])
    age = IntegerField('age', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired(), Length(min=1, max=255, message="Description must be between 1 and 255 characters")])