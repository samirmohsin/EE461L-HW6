"""
Basic backend which implements functionality as specified by HW6 doc
"""

from flask import Flask,render_template,request,jsonify
from flask.helpers import send_from_directory
#from flask_cors import CORS

app = Flask(__name__, static_folder="frontend/build", static_url_path="")

#CORS(app)

#keep track of names to answer server requests
db = {
    "Samir": "Mohsin"
}

#API route, fetched by frontend w/ fname parameter passed in as well
@app.route('/name/<fname>', methods=["GET"])
def name(fname: str):
    # check if name is in db or not and return appropriate msg in json format
    if fname in db:
        data = {'lname': db[fname]}
        return jsonify(data)
    else:
        data = {'lname': 'User Not Found'}
        return jsonify(data)

    return "OK"

#default route
@app.route("/")
def index():
    return send_from_directory(app.static_folder, "index.html")

if __name__ == '__main__':
    app.run(host="0.0.0.0")