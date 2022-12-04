from sqlalchemy.orm import relationship
from __init__ import db, app

class BaseModel(db.Model):
    __abstract__ = True
    id = db.Column(db.Integer, primary_key = True, autoincrement = True)

class Category(BaseModel):
    type_name = db.Column(db.String(100))
    products = relationship('Products',backref='category', lazy=True)
    
    def __str__(self):
        return self.type_name

class User(BaseModel):
    username = db.Column(db.String(100), unique=True)
    password = db.Column(db.String(100))
    email = db.Column(db.String(100))
    user_role = db.Column(db.String(100))
    products = relationship('Products',backref='Seller', lazy=True)
    
    def __str__(self):
        return self.username

class Products(BaseModel):
    pro_name = db.Column(db.String(100), nullable = False)
    description = db.Column(db.String(5000))
    price = db.Column(db.Integer, nullable = False)
    image = db.Column(db.String(100), nullable = False)
    seller = db.Column(db.String(100), db.ForeignKey(User.username), nullable = False)
    number = db.Column(db.Integer, nullable = False)
    type_id = db.Column(db.Integer(), db.ForeignKey(Category.id), nullable = False)

    def __str__(self):
        return self.pro_name

if __name__ == "__main__":
    with app.app_context():
        db.create_all()
