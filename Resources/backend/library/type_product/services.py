from library.extension import db
from library.lb_ma import ProducttypeSchema
from library.model import Product_type
from flask import request, jsonify
import json

type_schema = ProducttypeSchema()
types_schema = ProducttypeSchema(many=True)

def add_type_service():
    data = request.json
    if (data and ('type_id' in data) and ('type_name' in data)): 
        type_id = data['type_id']
        type_name = data['type_name']

        try:
            new_type = Product_type(type_id, type_name)
            db.session.add(new_type)
            db.session.commit()
            return "Add Success"
        except IndentationError:
            db.session.rollback()
            return "Cannot add product type"
    else:
        return "Request error"

def get_type_service(type_id):
    product_type = Product_type.query.get(type_id)
    if product_type:
        return type_schema.jsonify(product_type)
    else:
        return "Not found product type"

def get_all_type_service():
    product_type = Product_type.query.all()
    if product_type:
        return types_schema.jsonify(product_type)
    else:
        return "Not found product"

def update_type_service(type_id):
    type = Product_type.query.get(type_id)
    data = request.json
    if type:
        if data and ('type_name' in data):
            try:
                type.type_name = data["type_name"]
                db.session.commit()
                return "type_name update"
            except IndentationError:
                db.session.rollback()
                return "Cannot update type_name"
    else:
        return "Not found product type"

def delete_product_type_service(type_id):
    type = Product_type.query.get(type_id)
    if type:
        try:
            db.session.delete(type)
            db.session.commit()
            return "product type deleted"
        except IndentationError:
            db.session.rollback()
            return "Cannot delete product type"
    else:
        return "Not found product type"

