# Example Flask App to serve a JS visualization

import json 
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

#################################################
# Load Data
#################################################

# Connect to YOUR database here...
# To keep this example simple, I'm just loading a data.json file 
# But for your project, this is where the database connection should go
data_path = "data/data.json"
with open(data_path) as f:
    data = json.load(f)

app = Flask(__name__)
CORS(app, support_credentials=True)   # to prevent CORS errors


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available api routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/piechart_data<br/>"
    )

@app.route("/api/v1.0/piechart_data")
@cross_origin(supports_credentials=True)  # to prevent CORS errors
def piechart_data():

    return jsonify(data)


if __name__ == '__main__':
    app.run(debug=True)
