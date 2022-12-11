from __init__ import app, db
from flask_admin import Admin, BaseView, expose
from flask_admin.contrib.sqla import ModelView
from model import Category, Products, User, UserRole
from flask_login import current_user, logout_user
from flask import redirect

admin = Admin(app=app, name="Administration", template_mode='bootstrap4')

class AuthenticatedModelView(ModelView):
    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role.__eq__(UserRole.ADMIN)

class ProductView(AuthenticatedModelView):
    can_view_details=True
class UserView(AuthenticatedModelView):
    can_view_details=True

class LogoutView(BaseView):
    @expose('/')
    def index(self):
        logout_user()
        return redirect("/admin")

    def is_accessible(self):
        return current_user.is_authenticated
admin.add_view(AuthenticatedModelView(Category, db.session))
admin.add_view(ProductView(Products, db.session))
admin.add_view(UserView(User, db.session))
admin.add_view(LogoutView(name='Logout'))