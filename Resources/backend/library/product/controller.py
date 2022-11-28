from flask import Blueprint

products = Blueprint("products", __name__)
@products.route("/get-a-product")
def get_all_products():
    return "All pr"