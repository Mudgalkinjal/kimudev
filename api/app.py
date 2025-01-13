from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle

# Load the trained model and vectorizer
model = pickle.load(open("model.pkl", "rb"))
vectorizer = pickle.load(open("vectorizer.pkl", "rb"))

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
