from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

armor_routes = Blueprint('armor', __name__)


@armor_routes.route('/')
def all_armor():
    """
    Returns all armor as a list of dictionaries
    """
    armor = get(f"https://api.open5e.com/armor")

    return armor.json()

@armor_routes.route('/<string:armor_name>')
def one_armor(armor_name):
    """
    Returns an armor as a dictionary
    """
    armor = get(f"https://api.open5e.com/armor/?&name__iexact={armor_name}").json()
    return armor