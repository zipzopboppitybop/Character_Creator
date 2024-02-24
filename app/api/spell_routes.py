from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get
import json

spell_routes = Blueprint('spell', __name__)
spell_list = json.load(open('app/api/jsons/spells.json'))


@spell_routes.route('/')
def all_spells():
    """
    Returns all spells as a list of dictionaries
    """
    spells = get(f"https://api.open5e.com/spells")

    return spells.json()

# @spell_routes.route('/<string:spell_name>')
# def one_spell(spell_name):
#     """
#     Returns a spell as a dictionary
#     """
#     spells = get(f"https://api.open5e.com/spells").json()
#     for spell in spells['results']:
#         if spell['name'] == spell_name or spell['slug'] == spell_name:
#             return spell
#     return {"error": "Spell not found"}

@spell_routes.route('/school/<string:school>/<string:char_class>/<int:page>')
def spells_by_school(school, char_class, page):
    """
    Returns all spells in a school and class
    """
    
    # spells = get(f"https://api.open5e.com/spells/?page={page}&school_isexact={school}{f'&dnd_class__iexact={char_class}' if char_class != 'all' else ''}")
    spells = get(f"https://api.open5e.com/spells/?page={page}&school_isexact={school}&dnd_class__iexact={char_class}")

    return spells.json()

@spell_routes.route('/search')
def search_for_spells():
    """
    Returns a list of spells based of the search query with optional pagination

    /api/spells/search?page={page number}

    query = {
        "name": "string",
        "level": "string",
        "school": "string",
        "dnd_class": "string",
        "components": "string",
        "duration": "string",
        "concentration": "bool",
        "ritual": "bool",
        "desc": "string",
        "somatic": "bool",
        "arcane_focus": "bool",
        "divine_focus": "bool",
    }
    """
    page = request.args.get('page')
    query = request.get_json()

    return {"bruh": page, "query": query}
