from stories import story
from flask import Flask, request, render_template
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)

app.config['SECRET_KEY'] = "123"
debug = DebugToolbarExtension(app)

@app.route('/')
def home():
    variables = story.prompts
    return render_template('home.html', variables=variables)

@app.route('/story')
def show_story():
    variables = request.args
    msg = story.generate(variables)
    return render_template('story.html', text=msg)

@app.route('/my-story')
def my_story():
    return render_template('my_story.html')