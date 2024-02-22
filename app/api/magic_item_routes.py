from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

magic_item_routes = Blueprint('magic_item', __name__)

def find_dict(json_object, name):
    return [obj for obj in json_object]

@magic_item_routes.route('/')
def all_magic_items():
    """
    Returns all magic_items as a list of dictionaries
    """
    magic_items = get(f"https://api.open5e.com/v1/magicitems/")

    return magic_items.json()

@magic_item_routes.route('/<string:magic_item_name>')
def one_amagic_item(magic_item_name):
    """
    Returns a magic_item as a dictionary
    """
    magic_items = get(f"https://api.open5e.com/magicitems").json()
    for item in magic_items['results']:
        if item['name'] == magic_item_name or item['slug'] == magic_item_name:
            return item
    return {"error": "Magic Item not found"}