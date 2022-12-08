import json, os
from __init__ import app, db
from model import Category, Products, User
import hashlib

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
def get_product_by_id(product_id):
    return Products.query.get(product_id)

def count_products():
    return Products.query.filter(Products.number > 0).count()

def add_user(name, username, password, **kwargs):
    password = str(hashlib.md5(password.strip().encode('utf-8')).hexdigest())
    user = User(name=name.strip(), username=username.strip(), password=password, avatar=kwargs.get('avatar'), email=kwargs.get('email'))

    db.session.add(user)
    db.session.commit()

def check_login(username, password):
    if username and password:
        password = str(hashlib.md5(password.strip().encode('utf-8')).hexdigest())

        return User.query.filter(User.username.__eq__(username.strip()), User.password.__eq__(password)).first()

def get_user_by_id(user_id):
    return User.query.get(user_id)
