from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/run_script', methods=['POST'])
def run_script():
    # Get data from the request if needed (e.g., user input)
    data = request.get_json() 

    # ... (Call your Python script here) ...
    # Example:
    result = run_my_script(data)  

    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True) 
