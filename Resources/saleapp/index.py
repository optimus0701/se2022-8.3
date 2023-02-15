from flask import render_template, request, redirect, url_for, session, jsonify, abort, send_from_directory, current_app
from __init__ import app, login
from flask_login import login_user, logout_user, login_required, current_user
from model import UserRole
import utils
import math
import os
import model
import cloudinary.uploader


app.config['IMAGE'] = 'C:\se2022-8.3\Resources\saleapp\static'

@app.route("/")
def home():
    
    cate_id = request.args.get('type_id')
    kw = request.args.get('keyword')
    page = request.args.get('page', 1)
    products = utils.load_products(cate_id=cate_id, kw=kw, page=int(page))
    counter = utils.count_products()
    return render_template('index.html', products=products, pages=math.ceil(counter/app.config['PAGE_SIZE']))

@app.route("/register", methods=['POST','GET'])
def user_register():
    err_msg=""
    if request.method.__eq__('POST'):
        name = request.form.get('name')
        username = request.form.get('username')
        password = request.form.get('password')
        confirm = request.form.get('confirm')
        email = request.form.get('email')
        avatar_path=None

        try:
            if password.strip().__eq__(confirm.strip()):
                avatar = request.files.get('avatar')
                if avatar:
                    res = cloudinary.uploader.upload(avatar)
                    avatar_path = res['secure_url']
                utils.add_user(name=name, username=username, password=password, email=email, avatar=avatar_path)
                return jsonify('{"status": "success"}')
            else:
                return jsonify('{"status": "error"}')
        except Exception as ex:
            return jsonify('{"status": "error"}')
            
    
    return render_template('register.html', err_msg=err_msg)

@app.route("/user-login", methods=['POST','GET'])
def user_signin():
    err_msg=''
    if request.method.__eq__('POST'):
        username = request.form.get('username')
        password = request.form.get('password')
        print("login...")
        user = utils.check_login(username=username, password=password)
        if user:
            login_user(user=user)
            return jsonify('{"status": "success"}')
        else:
            return jsonify('{"status": "error"}')
    return render_template('login.html', err_msg=err_msg)


@app.route("/admin-login", methods=['POST','GET'])
def signin_admin():
    username = request.form.get('username')
    password = request.form.get('password')

    user = utils.check_login(username=username, password=password, role=UserRole.ADMIN)
    if user:
        login_user(user=user)
        
    return redirect('/admin')


@app.route("/user-logout")
def user_signout():
    logout_user()
    return redirect(url_for('user_signin'))

@app.route('/cart')
def cart():
    return render_template('cart.html', stats=utils.count_cart(session.get('cart')))

@app.route("/api/add-cart", methods=['POST'])
def add_to_cart():
    data=request.json
    id= str(data.get('id'))
    pro_name= data.get('pro_name')
    price= data.get('price')

    cart = session.get('cart')
    if not cart:
        cart={}
    if id in cart:
        cart[id]['quantity']=cart[id]['quantity'] + 1
    else:
        cart[id]= {
            'id': id,
            'pro_name': pro_name,
            'price': price,
            'quantity': 1
        }
    session['cart'] = cart

    return jsonify(utils.count_cart(cart))

@app.route('/api/update-cart', methods=['PUT'])
def update_cart():
    data = request.json
    id = str(data.get('id'))
    quantity = data.get('quantity')

    cart = session.get('cart')
    if cart and id in cart:
        cart[id]['quantity'] = quantity
        session['cart']=cart
    
    return jsonify(utils.count_cart(cart))

@app.route('/api/delete-cart/<product_id>', methods=['DELETE'])
def delete_cart(product_id):
    cart = session.get('cart')

    if cart and product_id in cart:
        del cart[product_id]
        session['cart'] = cart
    return jsonify(utils.count_cart(cart))
@login.user_loader
def user_load(user_id):
    return utils.get_user_by_id(user_id)

@app.route("/api/pay", methods=['POST'])
@login_required
def pay():
    try:
        utils.add_receipt(session.get('cart'))
        del session['cart']
    except:
        return jsonify({'code': 400})
    return jsonify({'code': 200})
@app.context_processor
def common_response():
    return {
        'categories': utils.load_categories(),
        'cart_stats': utils.count_cart(session.get('cart'))
    }

@app.route("/products")
def product_list():
    products = utils.load_products_to_json()
    return products

@app.route("/get_orders/<username>")
def get_orders(username):
    orders = utils.get_order_by_username(username)
    print(orders)
    return jsonify(orders.all())


@app.route("/get_image/<path:filename>")
def get_image(filename):
    directory = os.path.join(current_app.root_path, 'static')
    return send_from_directory(directory=directory, path=filename, as_attachment=True)


@app.route("/upload_order")
def upload_order():
    username = request.args.get('username')
    product = request.args.get('product')
    address = request.args.get('address')
    phone = request.args.get('phone')
    status = request.args.get('status')
    model.add_order(username, product, address, phone, status)
    return jsonify('{"status": "success"}')

if __name__ == "__main__":
    from admin import *

    app.run(debug=True)