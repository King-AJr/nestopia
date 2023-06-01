#!/usr/bin/python3

import re
from flask import request
import bcrypt
from Models.Users import Users
from Models import storage
from sqlalchemy import exc
from flask import jsonify


def login():
    """function to handle log in users"""
    if request.method == "POST":
        try:
            if request.is_json:
                data = request.get_json()
                email = data.get('email')
                password = data.get('password')
                param = "email"

                user = storage.query(Users, param, email)
                if bcrypt.checkpw(password.encode("utf-8"), user.password.encode("utf-8")):
                    return ("It Matches!", user)
                else:
                    return ("Incorrect authentication detail")
        except AttributeError as e:
            return "Incorrect authentication details"