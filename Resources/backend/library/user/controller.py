from flask import Blueprint
from .services import add_user_service, get_user_by_username_service, get_all_user_service
users = Blueprint("users", __name__)

@users.route("/user-management/user", methods = ['POST'])
def add_user():
    return add_user_service()

@users.route("/user-management/user/<String:username>", methods = ['GET'])
def get_user_by_username(username):
    return get_user_by_username_service(username)

@users.route("/user-management/users", methods = ['GET'])
def get_all_user():
    return get_all_user_service()

