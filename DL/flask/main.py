from flask import Flask, render_template, url_for, request

app = Flask(__name__, static_folder="assets")  # default static ko assets kar diya

@app.route("/")
def hello():
    return render_template("index.html")

@app.route("/prime")
def hello_prime():
    print(url_for("static", filename="style2.css"))
    return "<p>Hello, prime!</p>"

@app.route("/login", methods=["GET", "POST"])
def login():
    query_params = request.args.to_dict()
    print(query_params)
    return render_template("login.html" , query_params=query_params)

@app.route("/signup", methods=["GET", "POST"])
def signup():
    if request.method == "POST":
        print(dict(request.form))


        
        data=dict(request.form)
        username=data.get("username")

        return f"<p>Signup successful for user: {username}</p>"
    return render_template("signup.html")

if __name__ == "__main__":
    app.run(debug=True)