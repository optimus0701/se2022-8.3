import json, os
from __init__ import app
from model import Category, Products

def read_json(path):
    with open(path, "r") as f:
        return json.load(f)

def load_categories():
    return Category.query.all()

def load_products(cate_id=None, kw=None, from_price=None, to_price=None):
    products = Products.query.filter(Products.number > 0)
    
    if cate_id:
        products = products.filter(Products.type_id.__eq__(cate_id))
    if kw:
        products = products.filter(Products.name.contains(kw))
    if from_price:
        products = products.filter(Products.price.__ge__(from_price))
    if to_price:
        products = products.filter(Products.price.__le__(to_price))
    
    return products.all()
def get_product_by_id(product_id):
    return Products.query.get(product_id)