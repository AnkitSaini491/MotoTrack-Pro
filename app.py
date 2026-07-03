from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/bikes")
def bikes():
    return render_template("bikes.html")


@app.route("/bike")
def bike():
    return render_template("bike_details.html")


@app.route("/compare")
def compare():
    return render_template("compare.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


@app.errorhandler(404)
def page_not_found(e):
    return "<h1>404 - Page Not Found</h1>", 404


if __name__ == "__main__":
    app.run(debug=True)
