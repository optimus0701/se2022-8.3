from flask import render_template, request
from __init__ import app
import utils
import math

@app.route("/")
def home():
    cates = utils.load_categories()
    cate_id = request.args.get('type_id')
    kw = request.args.get('keyword')
    page = request.args.get('page', 1)
    products = utils.load_products(cate_id=cate_id, kw=kw, page=int(page))
    counter = utils.count_products()
    return render_template('index.html', categories = cates, products=products, pages=math.ceil(counter/app.config['PAGE_SIZE']))

@app.route("/register", methods=['get','post'])
def user_register():
    return render_template('register.html')


@app.route("/products")
def product_list():
    products = utils.load_products()
    return render_template('products.html', products = products)


if __name__ == "__main__":
    from admin import *

    app.run(debug=True)