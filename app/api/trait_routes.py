from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get
import json

trait_routes = Blueprint('trait', __name__)
trait_list = json.load(open('app/api/jsons/traits.json'))


@trait_routes.route('/<string:race_name>')
def race_traits(race_name):
    """
    Returns all traits for a race in a list of dictionaries
    """ 
    traits = []

    for trait in trait_list:
        for race in trait["races"]:
            if race["name"] == race_name:
                traits.append(trait)

    return traits