from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get
import json

race_routes = Blueprint('race', __name__)
race_list = json.load(open('app/api/jsons/races.json'))

@race_routes.route('/')
def all_races():
    """
    Returns all races as a list of dictionaries
    """
    return race_list

# @race_routes.route('/<string:race_name>')
# def one_race(race_name):
#     """
#     Returns a race as a dictionary
#     """
#     race = get(f"https://api.open5e.com/races/{race_name}")

#     return race.json()

# def capitalize_words(s):
#     return ' '.join(word.capitalize() for word in s.split())

# @race_routes.route('/search')
# def search_for_races():
#     """
#     Returns a list of races based of the search query with optional pagination

#     /api/races/search?page={page number}

#     query = {
#         "name": "string",
#         "level": "string",
#         "school": "string",
#         "classes": "string",
#         "components": "string",
#         "concentration": "bool",
#         "ritual": "bool",
#     }
#     """
#     page = request.args.get('page')
#     query = request.get_json()

#     spells = []

#     for spell in spell_list:
#         match = True
#         for key, value in query.items():
#             if value is not None:
#                 if key == "level":
#                     if key in spell and spell[key] != int(value):
#                         match = False
#                         break
#                 elif key == "school":
#                     if key in spell and capitalize_words(value) not in spell[key]["name"]:
#                         match = False
#                         break
#                 elif key == "classes":
#                     if spell[key] is not None:
#                         for dnd_class in spell[key]:
#                             if dnd_class["name"] != capitalize_words(value):
#                                 match = False
#                                 break
#                 elif type(value) == bool:
#                     if spell[key] != value:
#                         match = False
#                         break
#                 elif key in spell and capitalize_words(value) not in spell[key]:
#                     match = False
#                     break
#         if match:
#             spells.append(spell)

#     return {"spells": spells, "page": page}