from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

import os

# Get the absolute path of the directory containing app.py
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# Construct absolute paths to the model and vectorizer files
model_path = os.path.join(BASE_DIR, "model.pkl")
vectorizer_path = os.path.join(BASE_DIR, "vectorizer.pkl")

# Load the trained model and vectorizer
model = pickle.load(open(model_path, "rb"))
vectorizer = pickle.load(open(vectorizer_path, "rb"))

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Allow Cross-Origin requests from your React app

# Default route
@app.route("/", methods=["GET"])
def home():
    return "Welcome to the Sentiment Analysis API! Use /predict to analyze sentiment."

# Prediction route
@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()  # Receive JSON data
    if not data or "text" not in data:
        return jsonify({"error": "No text provided"}), 400

    # Preprocess and predict
    tweet = data["text"]
    vectorized_tweet = vectorizer.transform([tweet]).toarray()
    sentiment = model.predict(vectorized_tweet)[0]
    return jsonify({"sentiment": sentiment})

# Run the app
if __name__ == "__main__":
    app.run(debug=True, port=5002)  # Change port to 5002
