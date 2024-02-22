from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

background_routes = Blueprint('background', __name__)


@background_routes.route('/')
def all_background():
    """
    Returns all background as a list of dictionaries
    """
    backgrounds = get(f"https://api.open5e.com/backgrounds")

    return backgrounds.json()

@background_routes.route('/<string:background_name>')
def one_background(background_name):
    """
    Returns a background as a dictionary
    """
    background = get(f"https://api.open5e.com/backgrounds/{background_name}")

    return background.json()