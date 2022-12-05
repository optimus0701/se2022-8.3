from flask import Blueprint
from .services import add_type_service, get_type_service, get_all_type_service, update_type_service, delete_product_type_service

type = Blueprint("type", __name__)
@type.route("/product-type-management/all", methods = ['GET'])
def get_all_product_type():
    return get_all_type_service()

@type.route("/product-type-management/type/get/<int:type_id>", methods = ['GET'])
def get_product_type(type_id):
    return get_type_service(type_id)

@type.route("/product-type-management/type/add", methods = ['POST'])
def add_product_type():
    return add_type_service()

@type.route("/product-type-management/type/update/<int:type_id>", methods = ['PUT'])
def update_product(type_id):
    return update_type_service(type_id)

@type.route("/product-type-management/type/delete/<int:type_id>", methods = ['DELETE'])
def delete_product(type_id):
    return delete_product_type_service(type_id)
