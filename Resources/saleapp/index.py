from flask import render_template, request
from __init__ import app
import utils

@app.route("/")
def home():
    cates = utils.load_categories()
    cate_id = request.args.get('type_id')

    products = utils.load_products(cate_id=cate_id)

    return render_template('index.html', categories = cates, products=products)

@app.route("/products")
def product_list():
    products = utils.load_products()
    return render_template('products.html', products = products)


if __name__ == "__main__":
    from admin import *

    app.run(debug=True)