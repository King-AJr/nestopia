#!/usr/bin/python3
from datetime import date
import datetime
import json
import jwt
import re
from flask import request
import bcrypt
from Models.Users import Users
from Models import storage
from sqlalchemy import exc
from flask import jsonify
from Models.Profile import Profile


secret_key = 'its_my_secret_cant_tell_you'

class CustomJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, date):
            # Serialize the date object as a string in a desired format
            return obj.strftime('%Y-%m-%d')
        return super().default(obj)

def login():
    """function to handle log in users"""
    if request.method == "POST":
        try:
            if request.is_json:
                data = request.get_json()
                email = data.get('email')
                password = data.get('password')
                param = "email"
                p_param = "userID"

                user = storage.data_dict(Users, param, email)
                if user:
                    if bcrypt.checkpw(password.encode("utf-8"), user.get('password').encode("utf-8")):
                        temp_profile = storage.data_dict(Profile, p_param, user.get('id'))
                        user.pop('password')
                        token = {'user': user, 'profile': temp_profile}
                        return jsonify({'token': token})
                    else:
                        return ("Incorrect authentication detail"), 400
                else:
                    return ("Incorrect authentications detail"), 400
        except AttributeError as e:
            print(e)
            return "password or email is missing"
        