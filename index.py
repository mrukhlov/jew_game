#!/usr/bin/env python

import os
import random
import json
from flask import (
    Flask,
    request,
    make_response,
    jsonify,
    render_template
)

app = Flask(__name__)
log = app.logger

@app.route('/')
def hello_world():
    return render_template('index.html')

if __name__ == '__main__':
    port = int(os.getenv('PORT', 5000))

    app.run(
        debug=True,
        port=port,
        host='0.0.0.0'
    )