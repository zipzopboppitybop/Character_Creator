from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

weapon_routes = Blueprint('weapon', __name__)


@weapon_routes.route('/')
def all_weapons():
    """
    Returns all weapon as a list of dictionaries
    """
    weapons = get(f"https://api.open5e.com/weapons")

    return weapons.json()

@weapon_routes.route('/<string:weapon_name>')
def one_weapon(weapon_name):
    """
    Returns a weapon as a dictionary
    """
    weapon = get(f"https://api.open5e.com/weapons/?&name__iexact={weapon_name}").json()
    return weapon