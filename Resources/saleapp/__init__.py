from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
import cloudinary


app = Flask(__name__)
app.secret_key = 'abcdxyzjnsakd'
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:03112002@localhost/library'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['PAGE_SIZE'] = 8

db = SQLAlchemy(app=app)

cloudinary.config(
    cloud_name='dokn73scr',
    api_key='838386491925125',
    api_secret='oXe8k0tX-R3cgjcFDH_xO4piLGk'
)

login = LoginManager(app=app)