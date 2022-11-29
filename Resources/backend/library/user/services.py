from library.extension import db
from library.lb_ma import UserSchema
from library.model import User
from flask import request, jsonify
import json

user_schema = UserSchema()
users_schema = UserSchema(many=True)

def add_user_service():
    data = request.json
    if (data and ('username' in data) and ('password' in data) and ('email' in data) and ('user_role' in data)): 
        username = data['username']
        password = data['password']
        email = data['email']
        user_role = data['user_role']

        try:
            new_user = User(username, password, email, user_role)
            db.session.add(new_user)
            db.session.commit()
            return "Add Success"
        except IndentationError:
            db.session.rollback()
            return "Cannot add user"
    else:
        return "Request error"

def get_user_by_username_service(username):
    user = User.query.get(username)
    if user:
        return user_schema.jsonify(user)
    else:
        return "Not found user"

def get_all_user_service():
    users = User.query.all()
    if users:
        return users_schema.jsonify(users)
    else:
        return "Not found user"