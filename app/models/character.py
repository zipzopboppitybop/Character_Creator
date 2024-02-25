from .db import db, environment, SCHEMA, add_prefix_for_prod


class Character(db.Model):
    __tablename__ = 'characters'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    name = db.Column(db.String(40))
    gender = db.Column(db.String(40))
    race = db.Column(db.String(40))
    class_one_name = db.Column(db.String(40))
    class_two_name = db.Column(db.String(40))
    class_three_name = db.Column(db.String(40))
    class_four_name = db.Column(db.String(40))
    class_five_name = db.Column(db.String(40))
    class_six_name = db.Column(db.String(40))
    class_seven_name = db.Column(db.String(40))
    class_eight_name = db.Column(db.String(40))
    class_nine_name = db.Column(db.String(40))
    class_ten_name = db.Column(db.String(40))
    class_eleven_name = db.Column(db.String(40))
    class_twelve_name = db.Column(db.String(40))
    level = db.Column(db.Integer)
    subrace = db.Column(db.String(40))
    age = db.Column(db.Integer)
    strength = db.Column(db.Integer)
    dexterity = db.Column(db.Integer)
    constitution = db.Column(db.Integer)
    intelligence = db.Column(db.Integer)
    wisdom = db.Column(db.Integer)
    charisma = db.Column(db.Integer)
    description = db.Column(db.String(255))
    created_at = db.Column(db.DateTime, default=db.func.now())
    updated_at = db.Column(db.DateTime, default=db.func.now())

    owner = db.relationship('User', back_populates='characters')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'gender': self.gender,
            'age': self.age,
            'description': self.description,
            'strength': self.strength,
            'dexterity': self.dexterity,
            'constitution': self.constitution,
            'intelligence': self.intelligence,
            'wisdom': self.wisdom,
            'charisma': self.charisma,
            'class_one_name': self.class_one_name,
            'class_two_name': self.class_two_name,
            'class_three_name': self.class_three_name,
            'class_four_name': self.class_four_name,
            'class_five_name': self.class_five_name,
            'class_six_name': self.class_six_name,
            'class_seven_name': self.class_seven_name,
            'class_eight_name': self.class_eight_name,
            'class_nine_name': self.class_nine_name,
            'class_ten_name': self.class_ten_name,
            'class_eleven_name': self.class_eleven_name,
            'class_twelve_name': self.class_twelve_name,
            'level': self.level,
            'subrace': self.subrace,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
