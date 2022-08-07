from flask import render_template
from taskmanager import app, db


# Landing Page
@app.route("/")
def home():
    return render_template("base.html")