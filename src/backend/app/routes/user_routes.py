from flask import Blueprint, jsonify
from app.services.s3_service import listar_arquivos

user_bp = Blueprint("user", __name__)

@user_bp.route("/arquivos")

def arquivos():
    return jsonify(listar_arquivos())
