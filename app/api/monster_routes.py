from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

monster_routes = Blueprint('monster', __name__)


@monster_routes.route('/')
def all_monsters():
    """
    Returns all monsters as a list of dictionaries
    """
    monsters = get(f"https://api.open5e.com/monsters")

    return monsters.json()

@monster_routes.route('/<string:monster_name>')
def one_spell(monster_name):
    """
    Returns a monster as a dictionary
    """
    monsters = get(f"https://api.open5e.com/monsters").json()
    for monster in monsters['results']:
        if monster['name'] == monster_name or monster['slug'] == monster_name:
            return monster
    return {"error": "Monster not found"}