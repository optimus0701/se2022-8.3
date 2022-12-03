from flask import Blueprint
from .services import add_product_service, get_product_by_pro_name_service, get_all_product_service, update_product_by_name_and_seller_service, delete_product_by_name_and_seller_service, get_product_by_type_name_service, get_product_by_seller_service
products = Blueprint("products", __name__)
@products.route("/product-management/products", methods = ['GET'])
def get_all_products():
    return get_all_product_service()

@products.route("/product-management/product/get/<string:proname>", methods = ['GET'])
def get_product_by_pro_name(proname):
    return get_product_by_pro_name_service(proname)

@products.route("/product-management/product/add", methods = ['POST'])
def add_product():
    return add_product_service()

@products.route("/product-management/product/update/<string:seller>/<string:proname>", methods = ['PUT'])
def update_product(proname, seller):
    return update_product_by_name_and_seller_service(proname, seller)

@products.route("/product-management/product/delete", methods =['PUT','DELETE'])
def delete_product():
    return delete_product_by_name_and_seller_service()

@products.route("/product-management/product/get/type/<string:id>", methods = ['GET'])
def get_product_by_type(id):
    return get_product_by_type_name_service(id)

@products.route("/product-management/product/get/seller/<string:seller>", methods = ['GET'])
def get_product_by_seller(seller):
    return get_product_by_seller_service(seller)