from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Character, db, User
from .auth_routes import validation_errors_to_error_messages
from app.forms import CharacterForm
from datetime import datetime

character_routes = Blueprint('characters', __name__)


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
            age=form.data['age'],
            description=form.data['description']
        )
        db.session.add(character)
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