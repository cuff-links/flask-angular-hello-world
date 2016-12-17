from flask import Flask, redirect, render_template
from flask_bower import Bower

app = Flask('hello_flask')


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


if __name__ == '__main__':
    Bower(app)
    app.run()
