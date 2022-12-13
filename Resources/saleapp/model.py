from sqlalchemy.orm import relationship
from __init__ import db, app
from enum import Enum as UserEnum
from flask_login import UserMixin
import hashlib

class BaseModel(db.Model):
    __abstract__ = True
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

class Category(BaseModel):
    type_name = db.Column(db.String(100))
    products = relationship('Products',backref='category', lazy='dynamic')
    
    def __str__(self):
        return self.type_name
class UserRole(UserEnum):
    ADMIN = 1
    USER = 2
    SELLER = 3
class User(BaseModel, UserMixin):
    name = db.Column(db.String(100), nullable = False)
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100), nullable = False)
    avatar = db.Column(db.String(100))
    email = db.Column(db.String(100))
    active = db.Column(db.Boolean, default = True)
    user_role = db.Column(db.Enum(UserRole), default=UserRole.USER)
    products = relationship('Products',backref='Seller', lazy='dynamic')
    receipts = relationship('Receipt', backref='user', lazy='dynamic')
    
    def __str__(self):
        return self.name

class Products(BaseModel):
    pro_name = db.Column(db.String(100), nullable = False)
    description = db.Column(db.String(5000))
    price = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(100), nullable = False)
    seller = db.Column(db.String(100), db.ForeignKey(User.username), nullable = False)
    number = db.Column(db.Integer, nullable = False)
    type_id = db.Column(db.Integer(), db.ForeignKey(Category.id), nullable = False)
    receipy_details = relationship('ReceiptDetail', backref='product', lazy='dynamic')


    def __str__(self):
        return self.pro_name

class Receipt(BaseModel):
    created_date = db.Column(db.DateTime, default=db.func.now)
    user_id = db.Column(db.Integer, db.ForeignKey(User.id), nullable=False)
    details = relationship('ReceiptDetail', backref='receipt', lazy=True)

class ReceiptDetail(db.Model):
    receipt_id = db.Column(db.Integer, db.ForeignKey(Receipt.id), nullable=False, primary_key=True)
    product_id = db.Column(db.Integer, db.ForeignKey(Products.id), nullable=False, primary_key=True)
    quantity = db.Column(db.Integer, default=0)
    unit_price = db.Column(db.Float, default=0)
if __name__ == "__main__":
    with app.app_context():
        db.create_all()
