#!/usr/bin/python3

from flask import request
from Models.Profile import Profile
from sqlalchemy import exc
from flask import jsonify

def add_profile():
    from Models import storage
    if request.method == 'POST':
        try:
            if request.is_json:
                data = request.get_json()
                required_fields = ['department', 'faculty', 'gender', 'smoke', 'drink', 'party', 'religion', 'spirituality', 
                                   'noiseTol', 'ageRange', 'birthDay']
                missing_fields = []
                for field in required_fields:
                    if field not in data or not data[field]:
                        missing_fields.append(field.capitalize())
                
                if missing_fields:
                    error_message = f"The following fields are required: {', '.join(missing_fields)}"
                    return jsonify({'error': error_message})
                    
                department = data.get('department')
                faculty = data.get('faculty')
                gender = data.get('gender')
                smoke = data.get('smoke')
                drink = data.get('drink')
                party = data.get('party')
                religion = data.get('religion')
                spirituality = data.get('spirituality')
                noiseTol = data.get('noiseTol')
                ageRange = data.get('ageRange')
                birthDay = data.get('birthDay')

                new_profile = Profile(department, faculty, gender, smoke, drink, party, religion, spirituality, noiseTol, ageRange, birthDay)
                storage.new(new_profile)
                storage.save()
                return jsonify({'message': 'profile has been created'})
            else:
                return 'Request does not contain valid JSON data', 400

        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message})
        except exc.DataError as e:
            error_message = f"please fill in the appropriate data: {e}"
        

def view_profile():
    from Models import storage
    """Function that fetches a particular profile"""
    try:
        id = request.args.get('id')
        params = 'id'
        profile = storage.data_dict(Profile, params, id)
        if profile == None:
            return "profile does not exist", 404
        return jsonify({'profile':profile})
    except AttributeError as e:
        return "profile does not exist", 404


def all_profile():
    from Models import storage
    """fetch all profile in DB"""
    profile = storage.query_all(Profile)
    return profile


def update_profile():
    from Models import storage
    """takes ID from params and updates isting"""
    id = request.args.get('id')
    params = 'id'
    profile = storage.query(Profile, params, id)
    if profile:
        try:
            data = request.get_json()
            required_fields = ['department', 'faculty', 'gender', 'smoke', 'drink', 'party', 'religion', 'spirituality', 
                                    'noiseTol', 'ageRange', 'birthDay']
            missing_fields = []
            for field in required_fields:
                if field not in data or not data[field]:
                    missing_fields.append(field.capitalize())
                    
                if missing_fields:
                    error_message = f"The following fields are required: {', '.join(missing_fields)}"
                    return jsonify({'error': error_message})
                        
            profile.name = data.get('name')
            profile.faculty = data.get('faculty')
            profile.gender = data.get('gender') if data.get('gender') is not None else '0'
            profile.smoke = data.get('smoke') if data.get('smoke') is not None else '0'
            profile.drink = data.get('drink')
            profile.party = data.get('party')
            profile.religion = data.get('religion')
            profile.spirituality = data.get('spirituality') if data.get('spirituality') is not None else '0'
            profile.noiseTol = data.get('noiseTol') if data.get('noiseTol') is not None else ''
            profile.ageRange = data.get('ageRange')

            storage.save()
            return jsonify({'message': 'profile has been updated'})
        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message}), 404
        except exc.DataError as e:
            error_message = f"please fill in the appropriate data"
            return jsonify({'error': error_message}), 404
    else:
        return 'profile does not exist', 400





def delete_profile():
    from Models import storage
    """Function that fetches a particular profile"""
    try:
        id = request.args.get('id')

        message = storage.delete(Profile, int(id))
        return jsonify({'message': message})
    except AttributeError as e:
        return 'profile does not exist', 404
    
