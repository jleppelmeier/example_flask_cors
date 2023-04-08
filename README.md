# Example Flask - CORS

An example showing how to use the `flask-cors` library to avoid CORS errors when using a local Flask server to run JS Plotly visualizations. 

## Installation

This example requires the `flask-cors` library. To install, activate the appropriate conda environment, then run: 

```bash
pip install flask-cors
```

## Usage

To run the example:

1. First start the Flask server by running: 

```bash
python app.py
```

- To verify that the Flask server is running, you can navigate to `http://127.0.0.1:5000/api/v1.0/piechart_data` in a web browser and confirm that the JSON for the visualization is returned. 

2. Then load the JS visualizations by copying the full path to `index.html` to the URL box of your chrome browser. 

*Note: This type of example uses a local server, so it cannot be run from GitHub Pages.*
