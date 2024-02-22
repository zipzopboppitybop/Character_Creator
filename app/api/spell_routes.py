from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

spell_routes = Blueprint('spell', __name__)


@spell_routes.route('/')
def all_spells():
    """
    Returns all spells as a list of dictionaries
    """
    spells = get(f"https://api.open5e.com/spells")

    return spells.json()

@spell_routes.route('/<string:spell_name>')
def one_spell(spell_name):
    """
    Returns a spell as a dictionary
    """
    spells = get(f"https://api.open5e.com/spells").json()
    for spell in spells['results']:
        if spell['name'] == spell_name or spell['slug'] == spell_name:
            return spell
    return {"error": "Spell not found"}

@spell_routes.route('/school/<string:school>/<int:page>')
def spells_by_school(school, page):
    """
    Returns all spells in a school
    """
    spells = get(f"https://api.open5e.com/spells/?page={page}&school_isexact={school}")

    return spells.json()
