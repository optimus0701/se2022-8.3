from flask import Flask, request, Blueprint
from .product.controller import products
from .extension import db, ma
from .model import User, Products, Product_type, Cart
import os


def create_app(config_file="config.py"):
    app=Flask(__name__)
    app.config.from_pyfile(config_file)
    db.init_app(app)
    ma.init_app(app)
    with app.app_context():
        db.create_all()
    app.register_blueprint(products)
    return app