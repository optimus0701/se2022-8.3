import json, os
from __init__ import app, db
from model import Category, Products, User, UserRole, Orders
from flask_login import current_user
import hashlib
from flask import jsonify

def read_json(path):
    with open(path, "r") as f:
        return json.load(f)

def load_categories():
    return Category.query.all()

def load_products(cate_id=None, kw=None, from_price=None, to_price=None, page=1):
    products = Products.query.filter(Products.number > 0)
    
    if cate_id:
        products = products.filter(Products.type_id.__eq__(cate_id))
    if kw:
        products = products.filter(Products.pro_name.contains(kw))
    if from_price:
        products = products.filter(Products.price.__ge__(from_price))
    if to_price:
        products = products.filter(Products.price.__le__(to_price))
    page_size = app.config['PAGE_SIZE']
    start = (page - 1)*page_size
    end =  start + page_size
    return products.slice(start, end).all()


def load_products_to_json():
    products = Products.query.all()
    return jsonify(products)

def get_product_by_id(product_id):
    return Products.query.get(product_id)

def get_order_by_username(username):
    return Orders.query.filter(Orders.username == username)

def count_products():
    return Products.query.filter(Products.number > 0).count()

def add_user(name, username, password, **kwargs):
    password = str(hashlib.md5(password.strip().encode('utf-8')).hexdigest())
    user = User(name=name.strip(), username=username.strip(), password=password, avatar=kwargs.get('avatar'), email=kwargs.get('email'))

    db.session.add(user)
    db.session.commit()

def check_login(username, password, role=UserRole.USER):
    if username and password:
        password = str(hashlib.md5(password.strip().encode('utf-8')).hexdigest())

        return User.query.filter(User.username.__eq__(username.strip()), User.password.__eq__(password), User.user_role.__eq__(role)).first()


def get_user_by_id(user_id):
    return User.query.get(user_id)

def add_receipt(cart):
    if cart:
        receipt = Receipt(user=current_user)
        db.session.add(receipt)

        for c in cart.values():
            d = ReceiptDetail(receipt=receipt, product_id=c['id'], quantity=c['quantity'], unit_price=c['price'])
            db.session.add(d)
        db.session.commit()
def count_cart(cart):
    total_quantity = 0
    total_amount = 0

    if cart:
        for c in cart.values():
            total_quantity += int(c['quantity'])
            total_amount += int(c['quantity'])*int(c['price'])

    return {
        'total_quantity': (total_quantity),
        'total_amount': (total_amount)
    }

