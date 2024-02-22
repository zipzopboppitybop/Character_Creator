from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

race_routes = Blueprint('race', __name__)


@race_routes.route('/')
def all_races():
    """
    Returns all races as a list of dictionaries
    """
    races = get(f"https://api.open5e.com/races")

    return races.json()

@race_routes.route('/<string:race_name>')
def one_race(race_name):
    """
    Returns a race as a dictionary
    """
    race = get(f"https://api.open5e.com/races/{race_name}")

    return race.json()