from flask import Flask, jsonify
from flask_cors import CORS
from pymongo import MongoClient

app = Flask(__name__)
CORS(app)  # Apply CORS to the entire app

# MongoDB connection
client = MongoClient("mongodb+srv://srk6697:x1mAXdw0vLQZCC0v@cluster01.hrg4afk.mongodb.net/")
db = client.Dashboard_db
collection = db.test01

# API endpoint to fetch intensity data from MongoDB
@app.route('/api/intensity', methods=['GET'])
def get_intensity_data():
    try:
        # Fetch intensity data sorted by some criteria, assuming 'timestamp' field
        intensity_data = list(collection.find({"intensity": {"$exists": True}}).sort("timestamp", 1))
        # Extracting intensity values
        intensity_values = [{"intensity": data["intensity"], "start_year": data.get("start_year", "")} for data in intensity_data]
        return jsonify(intensity_values)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# API endpoint to fetch region data from MongoDB
@app.route('/api/regions', methods=['GET'])
def get_region_data():
    try:
        # Fetch region data from MongoDB
        region_data = list(collection.find({"region": {"$exists": True}}))
        # Extracting region counts
        region_counts = {}
        for data in region_data:
            region = data["region"]
            if region in region_counts:
                region_counts[region] += 1
            else:
                region_counts[region] = 1
        return jsonify(region_counts)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/sector', methods=['GET'])
def get_sector_data():
    try:
        # Fetch sector data from MongoDB
        sector_data = list(collection.find({"sector": {"$exists": True}}))

        # Convert ObjectId to string for serialization
        for data in sector_data:
            data['_id'] = str(data['_id'])

        return jsonify(sector_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500
    

@app.route('/api/relevance', methods=['GET'])
def get_relevance_data():
    try:
        # Fetch relevance data from MongoDB
        relevance_data = list(collection.find({"relevance": {"$exists": True}}))

        # Convert ObjectId to string for serialization
        for data in relevance_data:
            data['_id'] = str(data['_id'])

        return jsonify(relevance_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
