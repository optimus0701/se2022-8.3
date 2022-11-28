
from .extension import db

#class Category(db.Model):
#    id = db.Column(db.Integer, primary_key=True)
#    cate = db.Column(db.String(100))
#
#    def __init__(self, id, cate):
#        self.id = id
#        self.cate = cate

class Product_type(db.Model):
    type_id = db.Column(db.Integer, primary_key = True)
    type_name = db.Column(db.String(100))

    def __init__(self, type_id, type_name):
        self.type_id = type_id
        self.type_name = type_name

class Products(db.Model):
    type_id = db.Column(db.Integer(), db.ForeignKey("product_type.type_id"))
    pro_name = db.Column(db.String(100), nullable = False,  primary_key = True)
    description = db.Column(db.String(500))
    price = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(100), nullable = False)

    def __init__(self, pro_name, description, price, image, seller):
        self.pro_name = pro_name
        self.description = description
        self.price = price
        self.image = image
        self.seller = seller

class Cart(db.Model):
    username = db.Column(db.String(100),db.ForeignKey("user.username"), primary_key = True)
    pro_name = db.Column(db.String(100),db.ForeignKey("products.pro_name"), nullable = False, primary_key = True, )
    count = db.Column(db.Integer)
    total = db.Column(db.Integer)

#class Notification(db.Model):
#    content = db.Column(db.String(100))
#    image = db.Column(db.String(100))
#
#    def __init__(self, ID, content, image):
#        self.ID = ID
#        self.content = content
#        self.image = image

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



