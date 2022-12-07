from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.secret_key = 'abcdxyzjnsakd'
app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:12345123@localhost/library'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['PAGE_SIZE'] = 8
db = SQLAlchemy(app=app)