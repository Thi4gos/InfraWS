from flask import Flask
from .routes.user_routes import user_bp

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile("config.py")

    # REGISTRA AS ROTAS
    app.register_blueprint(user_bp)

    return app
