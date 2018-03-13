from app import app
from flask import render_template, send_from_directory

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
  return render_template('index.html')

@app.route('/js/<path:path>')
def send_js(path): return send_from_directory('js', path)