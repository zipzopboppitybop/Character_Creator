from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, Length
from app.models import Character

class CharacterForm(FlaskForm):
    name = StringField(
        'name', validators=[Length(min=0, max=40, message="Name must be between 1 and 40 characters")])
    user_id = IntegerField('owner')
    gender = StringField('gender', validators=[ Length(min=0, max=40, message="Gender must be between 1 and 40 characters")])
    race = StringField('race', validators=[ Length(min=0, max=40, message="Race must be between 1 and 40 characters")])
    class_one_name = StringField('class_one_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_two_name = StringField('class_two_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_three_name = StringField('class_three_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_four_name = StringField('class_four_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_five_name = StringField('class_five_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_six_name = StringField('class_six_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_seven_name = StringField('class_seven_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_eight_name = StringField('class_eight_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_nine_name = StringField('class_nine_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_ten_name = StringField('class_ten_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_eleven_name = StringField('class_eleven_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    class_twelve_name = StringField('class_twelve_name', validators=[ Length(min=0, max=40, message="Class must be between 1 and 40 characters")])
    age = IntegerField('age')
    strength = IntegerField('strength')
    dexterity = IntegerField('dexterity')
    constitution = IntegerField('constitution')
    intelligence = IntegerField('intelligence')
    wisdom = IntegerField('wisdom')
    charisma = IntegerField('charisma')
    level = IntegerField('level')
    subrace = StringField('subrace', validators=[ Length(min=0, max=40, message="Subrace must be between 1 and 40 characters")])
    description = StringField('description', validators=[Length(min=0, max=255, message="Description must be between 1 and 255 characters")])