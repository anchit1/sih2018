import os
from flask import Flask
from config import Config
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

serve_dir = os.path.abspath('../public')
app = Flask(__name__, template_folder=serve_dir, static_folder=serve_dir)
app.config.from_object(Config)
db = SQLAlchemy(app)
migrate = Migrate(app, db)

from app import routes, models