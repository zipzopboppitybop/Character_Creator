from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

class_routes = Blueprint('class', __name__)


@class_routes.route('/')
def all_classes():
    """
    Returns all classes as a list of dictionaries
    """
    classes = get(f"https://api.open5e.com/classes")

    return classes.json()

@class_routes.route('/<string:class_name>')
def one_class(class_name):
    """
    Returns a class as a dictionary
    """
    character_class = get(f"https://api.open5e.com/classes/{class_name}")

    return character_class.json()