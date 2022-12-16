from __init__ import app, db
from flask_admin import Admin, BaseView, AdminIndexView, expose
from flask_admin.contrib.sqla import ModelView
from model import Category, Products, User, UserRole
from flask_login import current_user, logout_user
from flask import redirect, url_for, render_template, abort
from wtforms import PasswordField
import hashlib


class MyAdminIndexView(AdminIndexView):
    @expose('/')
    def index(self):
        if not current_user.is_authenticated:
            return render_template('admin/login_admin.html')

        if current_user.user_role == UserRole.ADMIN:
            return super(MyAdminIndexView,self).index()
        else:
            return abort(403)
                    #redirect(url_for('home'))


class AuthenticatedModelView(ModelView):

    def is_accessible(self):
        return current_user.is_authenticated and current_user.user_role == UserRole.ADMIN
    
class AdminPasswordField(PasswordField):

    def process_formdata(self, valuelist):
        if valuelist and valuelist[0] != '':
            self.data = str(hashlib.md5(valuelist[0].strip().encode('utf-8')).hexdigest())
        elif self.data is None:
            self.data = ''    
class CategoryView(AuthenticatedModelView):
    form_excluded_columns=['products']
class ProductView(AuthenticatedModelView):
    can_view_details=True
    can_export=True
    edit_modal=True
    details_modal=True
    form_excluded_columns=['receipy_details']
class UserView(AuthenticatedModelView):
    edit_modal=True
    details_modal=True
    form_excluded_columns=['products','receipts']
    form_overrides = {
        'password': AdminPasswordField,
    }
class LogoutView(BaseView):
    @expose('/')
    def index(self):
        logout_user()
        return redirect("/admin")

    def is_accessible(self):
        return current_user.is_authenticated

admin = Admin(app=app, name="Administration", index_view=MyAdminIndexView(), template_mode='bootstrap4')

admin.add_view(CategoryView(Category, db.session, name='Danh mục'))
admin.add_view(ProductView(Products, db.session, name='Sản phẩm'))
admin.add_view(UserView(User, db.session, name='Người dùng'))
admin.add_view(LogoutView(name='Đăng xuất'))

