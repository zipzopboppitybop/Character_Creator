from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Character, db, User
from .auth_routes import validation_errors_to_error_messages
from app.forms import CharacterForm
from datetime import datetime

character_routes = Blueprint('characters', __name__)

@character_routes.route('/current_user')
@login_required
def current_user_characters():
    """
    Gets all characters for the current user
    """
    user = current_user.to_dict()
    
    if user is None:
        return {'errors': 'User not found'}, 404
    
    return user['characters']

@character_routes.route('/<int:id>')
@login_required
def get_a_character(id):
    """
    Gets single character by id
    """
    character = Character.query.get(id)

    if character is None:
        return {'errors': 'Character not found'}, 404

    return character.to_dict()

@character_routes.route('/create', methods=['POST'])
@login_required
def create_character():
    """
    Creates a new character
    """
    user = current_user.to_dict()
    form = CharacterForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        character = Character(
            name=form.data['name'],
            user_id=user['id'],
            gender=form.data['gender'],
            race=form.data['race'],
            class_one_name=form.data['class_one_name'],
            class_two_name=form.data['class_two_name'],
            class_three_name=form.data['class_three_name'],
            class_four_name=form.data['class_four_name'],
            class_five_name=form.data['class_five_name'],
            class_six_name=form.data['class_six_name'],
            class_seven_name=form.data['class_seven_name'],
            class_eight_name=form.data['class_eight_name'],
            class_nine_name=form.data['class_nine_name'],
            class_ten_name=form.data['class_ten_name'],
            class_eleven_name=form.data['class_eleven_name'],
            class_twelve_name=form.data['class_twelve_name'],
            strength=form.data['strength'],
            dexterity=form.data['dexterity'],
            constitution=form.data['constitution'],
            intelligence=form.data['intelligence'],
            wisdom=form.data['wisdom'],
            charisma=form.data['charisma'],
            age=form.data['age'],
            description=form.data['description']
        )
        db.session.add(character)
        db.session.commit()
        return character.to_dict()

    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400
    

@character_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def update_character(id):
    """
    Updates a character
    """
    character = Character.query.get(id)
    user = current_user.to_dict()
    form = CharacterForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if character is None:
            return {'errors': 'Character not found'}, 404
        
        character_dict = character.to_dict()

        if user['id'] != character_dict['user_id']:
            return {'errors': 'You do not have permission to edit this character'}, 403

        if character.name != form.data['name'] and form.data['name'] != None:
            character.name = form.data['name']
        if character.age != form.data['age'] and form.data['age'] != None:
            character.age = form.data['age']
        if character.description != form.data['description'] and form.data['description'] != None:  
            character.description = form.data['description']
        if character.gender != form.data['gender'] and form.data['gender'] != None:
            character.gender = form.data['gender']
        if character.race != form.data['race'] and form.data['race'] != None:
            character.race = form.data['race']
        if character.class_one_name != form.data['class_one_name'] and form.data['class_one_name'] != None:
            character.class_one_name = form.data['class_one_name']
        if character.class_two_name != form.data['class_two_name'] and form.data['class_two_name'] != None:
            character.class_two_name = form.data['class_two_name']
        if character.class_three_name != form.data['class_three_name'] and form.data['class_three_name'] != None:
            character.class_three_name = form.data['class_three_name']
        if character.class_four_name != form.data['class_four_name'] and form.data['class_four_name'] != None:
            character.class_four_name = form.data['class_four_name']
        if character.class_five_name != form.data['class_five_name'] and form.data['class_five_name'] != None:
            character.class_five_name = form.data['class_five_name']
        if character.class_six_name != form.data['class_six_name'] and form.data['class_six_name'] != None:
            character.class_six_name = form.data['class_six_name']
        if character.class_seven_name != form.data['class_seven_name'] and form.data['class_seven_name'] != None:
            character.class_seven_name = form.data['class_seven_name']
        if character.class_eight_name != form.data['class_eight_name'] and form.data['class_eight_name'] != None:
            character.class_eight_name = form.data['class_eight_name']
        if character.class_nine_name != form.data['class_nine_name'] and form.data['class_nine_name'] != None:
            character.class_nine_name = form.data['class_nine_name']
        if character.class_ten_name != form.data['class_ten_name'] and form.data['class_ten_name'] != None:
            character.class_ten_name = form.data['class_ten_name']
        if character.class_eleven_name != form.data['class_eleven_name'] and form.data['class_eleven_name'] != None:
            character.class_eleven_name = form.data['class_eleven_name']
        if character.class_twelve_name != form.data['class_twelve_name'] and form.data['class_twelve_name'] != None:
            character.class_twelve_name = form.data['class_twelve_name']
        if character.strength != form.data['strength'] and form.data['strength'] != None:
            character.strength = form.data['strength']
        if character.dexterity != form.data['dexterity'] and form.data['dexterity'] != None:
            character.dexterity = form.data['dexterity']
        if character.constitution != form.data['constitution'] and form.data['constitution'] != None:
            character.constitution = form.data['constitution']
        if character.intelligence != form.data['intelligence'] and form.data['intelligence'] != None:
            character.intelligence = form.data['intelligence']
        if character.wisdom != form.data['wisdom'] and form.data['wisdom'] != None:
            character.wisdom = form.data['wisdom']
        if character.charisma != form.data['charisma'] and form.data['charisma'] != None:
            character.charisma = form.data['charisma']
        character.updated_at = datetime.now()
        db.session.commit()
        return character.to_dict()

    if form.errors:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@character_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_character(id):
    """
    Deletes a character
    """
    character = Character.query.get(id)
    user = current_user.to_dict()

    if character is None:
        return {'errors': 'Character not found'}, 404
    
    character_dict = character.to_dict()

    if user['id'] != character_dict['user_id']:
        return {'errors': 'You do not have permission to delete this character'}, 403
    
    db.session.delete(character)
    db.session.commit()
    return {'message': 'Character deleted'}