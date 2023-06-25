#!/usr/bin/python3

import re
from flask import request
import bcrypt
from Models.Users import Users
from Models import storage
from sqlalchemy import exc
from flask import jsonify

def signup():
    """function to handle user signup"""
    if request.method == 'POST':
        try:
            if request.is_json:
                data = request.get_json()
                name = data.get('name')
                email = data.get('email')
                phone = str(data.get('phone'))  #
                password = data.get('password')
                print("Name:", name)
                errors = []
                email_pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
                #valid_email = re.match(email_pattern, email)
                valid_email = True
                valid_name = name.replace(' ', '').isalpha()
                valid_phone = phone.isnumeric()
                print('name: ', valid_name)
                if valid_email != True:
                    print(valid_email)
                    errors.append("Invalid Email")

                if not valid_name:
                    errors.append("Name must be only alphabets")

                if valid_phone != True and len(str(abs(phone))) != 11:
                    errors.append("Phone must contain only numbers")

                if len(password) < 8:
                    errors.append("Password must be more than 8 characters")

                if errors:
                    storage.roll()
                    return errors, 400
                
                hashed_password = bcrypt.hashpw((data.get('password')).encode('utf-8'), bcrypt.gensalt())
                new_user = Users(name, email, hashed_password, phone)
                storage.new(new_user)
                print('successfully added')
                storage.save()
                return "user has been created"
            
            else:
                return 'Request does not contain valid JSON data', 400
        except KeyError as e:
            print("one of the field is missing")
        except exc.IntegrityError as e:
            error_message = str(e.orig.args)
            if 'Duplicate entry' in error_message and "'users.email'" in error_message:
            # Handle the duplicate entry error for 'users.email' key
                response = {
            'error': 'Duplicate email found. Please choose a different email.'
        }
                return jsonify(response), 400
        except exc.PendingRollbackError as e:
            response = {'error': 'resend entry'}
            storage.roll()
            return jsonify(response), 400
            

        except AttributeError as e:
            print(e)
            response = {'errror': 'one of the fields is missing'}
            return jsonify(response), 400
        


        


