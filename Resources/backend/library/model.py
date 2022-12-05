
from .extension import db

class Product_type(db.Model):
    type_id = db.Column(db.Integer, primary_key = True)
    type_name = db.Column(db.String(100))

    def __init__(self, type_id, type_name):
        self.type_id = type_id
        self.type_name = type_name

class Products(db.Model):
    type_id = db.Column(db.Integer(), db.ForeignKey("product_type.type_id"), nullable = False)
    pro_name = db.Column(db.String(100), nullable = False,  primary_key = True)
    description = db.Column(db.String(5000))
    price = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(100), nullable = False)
    seller = db.Column(db.String(100), db.ForeignKey("user.username"), nullable = False, primary_key = True)
    number = db.Column(db.Integer, nullable = False)
    def __init__(self,type_id, pro_name, description, price, image, seller, number):
        self.type_id = type_id
        self.pro_name = pro_name
        self.description = description
        self.price = price
        self.image = image
        self.seller = seller
        self.number = number

class User(db.Model):
    username = db.Column(db.String(100), primary_key = True)
    password = db.Column(db.String(100))
    email = db.Column(db.String(100))
    user_role = db.Column(db.String(100))

    def __init__(self, username, password, email, user_role):
        self.username = username
        self.password = password
        self.email = email
        self.user_role = user_role



