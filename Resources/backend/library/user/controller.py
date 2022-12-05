from flask import Blueprint
from .services import add_user_service, get_user_by_username_service, get_all_user_service, update_user_by_username_service, delete_user_by_username_service
users = Blueprint("users", __name__)

@users.route("/user-management/user/add", methods = ['POST'])
def add_user():
    return add_user_service()

@users.route("/user-management/user/get/<string:username>", methods = ['GET'])
def get_user_by_username(username):
    return get_user_by_username_service(username)

@users.route("/user-management/users", methods = ['GET'])
def get_all_user():
    return get_all_user_service()

@users.route("/user-management/user/update/<string:username>", methods = ['PUT'])
def update_user_by_username(username):
    return update_user_by_username_service(username)

@users.route("/user-management/user/delete/<string:username>", methods = ['DELETE'])
def delete_user_by_username(username):
    return delete_user_by_username_service(username)

