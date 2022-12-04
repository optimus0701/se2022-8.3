from __init__ import app, db
from flask_admin import Admin
from flask_admin.contrib.sqla import ModelView
from model import Category, Products, User

admin = Admin(app=app, name="Administration", template_mode='bootstrap4')

class ProductView(ModelView):
    can_view_details=True
class UserView(ModelView):
    can_view_details=True

admin.add_view(ModelView(Category, db.session))
admin.add_view(ProductView(Products, db.session))
admin.add_view(UserView(User, db.session))