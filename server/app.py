from flask import Flask, render_template, send_from_directory
import os

serve_dir = os.path.abspath('../public')
app = Flask(__name__, template_folder=serve_dir, static_folder=serve_dir)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')

@app.route('/js/<path:path>')
def send_js(path): return send_from_directory('js', path)