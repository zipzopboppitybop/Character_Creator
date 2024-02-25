from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get
import json

class_routes = Blueprint('class', __name__)
class_list = json.load(open('app/api/jsons/classes.json'))


@class_routes.route('/')
def all_classes():
    """
    Returns all classes as a list of dictionaries
    """
    return class_list

