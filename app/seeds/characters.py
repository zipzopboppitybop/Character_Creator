from app.models import db, Character, environment, SCHEMA
from sqlalchemy.sql import text


def seed_characters():
    character1 = Character(
        name='Bruh', user_id=1, gender='male', age=25, description='A cool dude')

    db.session.add(character1)
    db.session.commit()

def undo_characters():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.characters RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM characters"))
        
    db.session.commit()