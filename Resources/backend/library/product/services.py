from library.extension import db
from library.lb_ma import ProductSchema
from library.model import Products, Product_type, User
from flask import request, jsonify
import json

product_schema = ProductSchema()
products_schema = ProductSchema(many=True)

def add_product_service():
    data = request.json
    if (data and ('type_id' in data) and ('pro_name' in data) and ('description' in data) and ('price' in data) and ('image' in data) and ('seller' in data) and ('number' in data)): 
        type_id = data['type_id']
        pro_name = data['pro_name']
        description = data['description']
        price = data['price']
        image = data['image']
        seller = data['seller']
        number = data['number']

        try:
            new_product = Products(type_id, pro_name, description, price, image, seller, number)
            db.session.add(new_product)
            db.session.commit()
            return "Add Success"
        except IndentationError:
            db.session.rollback()
            return "Cannot add product"
    else:
        return "Request error"

def get_product_by_pro_name_service(pro_name):
    product = Products.query.get(pro_name)
    if product:
        return product_schema.jsonify(product)
    else:
        return "Not found product"

def get_all_product_service():
    products = Products.query.all()
    if products:
        return products_schema.jsonify(products)
    else:
        return "Not found product"

def update_product_by_name_and_seller_service(pro_name,seller):
    product = Products.query.get(pro_name,seller)
    data = request.json
    if product:
        if data and ('price' in data):
            try:
                product.price = data["price"]
                db.session.commit()
                return "price update"
            except IndentationError:
                db.session.rollback()
                return "Cannot update price"
        elif data and ('number' in data):
            try:
                product.number = data["number"]
                db.session.commit()
                return "number update"
            except IndentationError:
                db.session.rollback()
                return "Cannot update number"
    else:
        return "Not found product"

def delete_product_by_name_and_seller_service(pro_name, seller):
    product = Products.query.get(pro_name, seller)
    if product:
        try:
            db.session.delete(product)
            db.session.commit()
            return "product deleted"
        except IndentationError:
            db.session.rollback()
            return "Cannot delete product"
    else:
        return "Not found product"

def get_product_by_type_id_service(id):
    product = Products.query.join(Product_type).filter((Product_type.type_id) == id).all()
    if product:
        return products_schema.jsonify(product)
    else:
        return jsonify({"message": f"Not found product by {id}"}), 404

def get_product_by_seller_service(seller):
    product = Products.query.get(seller)
    if product:
        return products_schema.jsonify(product)
    else:
        return jsonify({"message": f"Not found product by {seller}"}), 404
