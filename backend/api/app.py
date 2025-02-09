from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

model_path = os.path.join(BASE_DIR, "model.pkl")
vectorizer_path = os.path.join(BASE_DIR, "vectorizer.pkl")

model = pickle.load(open(model_path, "rb"))
vectorizer = pickle.load(open(vectorizer_path, "rb"))

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://kimudev.vercel.app"}})

CORS(app)

@app.route("/", methods=["GET"])
def home():
    return "Welcome to the Sentiment Analysis API! Use /predict to analyze sentiment."

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()  
    if not data or "text" not in data:
        return jsonify({"error": "No text provided"}), 400

    tweet = data["text"]
    vectorized_tweet = vectorizer.transform([tweet]).toarray()
    sentiment = model.predict(vectorized_tweet)[0]
    return jsonify({"sentiment": sentiment})

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5002))
    app.run(debug=True, host="0.0.0.0", port=port)
