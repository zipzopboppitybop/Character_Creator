from flask import Blueprint, jsonify, session, request
from flask_login import current_user, login_user, logout_user, login_required
from app.models import User, db
from requests import get

feat_routes = Blueprint('feat', __name__)


@feat_routes.route('/')
def all_feats():
    """
    Returns all feats as a list of dictionaries
    """
    feats = get(f"https://api.open5e.com/feats")

    return feats.json()

@feat_routes.route('/<string:feat_name>')
def one_feat(feat_name):
    """
    Returns a feat as a dictionary
    """
    feat = get(f"https://api.open5e.com/feats/{feat_name}")

    return feat.json()