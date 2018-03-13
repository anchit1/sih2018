from flask import Flask
import os

serve_dir = os.path.abspath('../public')
app = Flask(__name__, template_folder=serve_dir, static_folder=serve_dir)

from app import routes