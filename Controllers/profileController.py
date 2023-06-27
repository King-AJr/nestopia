#!/usr/bin/python3

from flask import request
from Models.Profile import Profile
from sqlalchemy import exc
from flask import jsonify
from Controllers.PairingController import pair
from Controllers.PairingController import update_pair
from Models.Users import Users

def add_profile():
    from Models import storage
    if request.method == 'POST':
        try:
            if request.is_json:
                data = request.get_json()
                required_fields = ['gender', 'smoke', 'drink', 'party', 
                 'religion', 'ageRange',
                 'sleep_schedule', 'cleanliness_organization', 'study_habits', 'interests_hobbies', 
                 'study_majors_courses', 'guest_policy', 'noise_tolerance', 
                 'shared_chores', 'study_space', 
                 'overnight_visitors',
                 'pets']
                missing_fields = []
                for field in required_fields:
                    if field not in data or not data[field]:
                        missing_fields.append(field.capitalize())
                
                if missing_fields:
                    error_message = f"The following fields are required: {', '.join(missing_fields)}"
                    return jsonify({'error': error_message})
                    
                
                gender = data.get('gender')
                smoke = data.get('smoke')
                drink = data.get('drink')
                party = data.get('party')
                religion = data.get('religion')
                ageRange = data.get('ageRange')
                sleep_schedule = data.get('sleep_schedule')
                cleanliness_organization = data.get('cleanliness_organization')
                study_habits = data.get('study_habits')
                interests_hobbies = data.get('interests_hobbies')
                study_majors_courses = data.get('study_majors_courses')
                guest_policy = data.get('guest_policy')
                noise_tolerance = data.get('noise_tolerance')
                shared_chores = data.get('shared_chores')
                study_space = data.get('study_space')
                overnight_visitors = data.get('overnight_visitors')
                pets = data.get('pets')
                userID = data.get('userID')

                user = {
                    'gender': gender, 
                    'smoke' : smoke, 
                    'drink': drink, 
                    'party': party, 
                    'religion' : religion, 
                    'ageRange': ageRange,
                    'sleep_schedule': sleep_schedule, 
                    'cleanliness_organization': cleanliness_organization, 
                    'study_habits': study_habits, 
                    'interests_hobbies':interests_hobbies, 
                    'study_majors_courses':study_majors_courses, 
                    'guest_policy': guest_policy, 
                    'noise_tolerance': noise_tolerance, 
                    'shared_chores':shared_chores, 
                    'study_space':study_space, 
                    'overnight_visitors':overnight_visitors,
                    'pets': pets,
                    'userID': userID
                }
                
                done = pair(user)
                if done == 'done':
                    return jsonify({'message': 'profile has been created'})
                else:
                    return jsonify({'message': 'profile has not been created pls retry'})
            else:
                return 'Request does not contain valid JSON data', 400

        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message})
        except exc.DataError as e:
            error_message = f"please fill in the appropriate data: {e}"
        except exc.IntegrityError as e:
            error_message = "User profile already exist"
            return jsonify({'error': error_message})
        

def view_profile():
    from Models import storage
    """Function that fetches a particular profile"""
    try:
        id = request.args.get('id')
        params = 'id'
        profile = storage.data_dict(Profile, params, id)

        if profile == None:
            return "profile does not exist", 404
        user = storage.data_dict(Users, params, profile['userID'])
        user.pop('password')
        return jsonify({'profile':profile, 'user': user})
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
            if request.is_json:
                data = request.get_json()
                required_fields = ['gender', 'smoke', 'drink', 'party', 
                 'religion', 'ageRange',
                 'sleep_schedule', 'cleanliness_organization', 'study_habits', 'interests_hobbies', 
                 'study_majors_courses', 'guest_policy', 'noise_tolerance', 
                 'shared_chores', 'study_space', 
                 'overnight_visitors',
                 'pets']
                missing_fields = []
                for field in required_fields:
                    if field not in data or not data[field]:
                        missing_fields.append(field.capitalize())
                
                if missing_fields:
                    error_message = f"The following fields are required: {', '.join(missing_fields)}"
                    return jsonify({'error': error_message})
                    
                
                profile.gender = data.get('gender')
                profile.smoke = data.get('smoke')
                profile.drink = data.get('drink')
                profile.party = data.get('party')
                profile.religion = data.get('religion')
                profile.ageRange = data.get('ageRange')
                profile.sleep_schedule = data.get('sleep_schedule')
                profile.cleanliness_organization = data.get('cleanliness_organization')
                profile.study_habits = data.get('study_habits')
                profile.interests_hobbies = data.get('interests_hobbies')
                profile.study_majors_courses = data.get('study_majors_courses')
                profile.guest_policy = data.get('guest_policy')
                profile.noise_tolerance = data.get('noise_tolerance')
                profile.shared_chores = data.get('shared_chores')
                profile.study_space = data.get('study_space')
                profile.overnight_visitors = data.get('overnight_visitors')
                profile.pets = data.get('pets')
                profile.userID = data.get('userID')

                #[resultants, lastIndex, cycl]
                result = update_pair(id)
                if len(result) > 0:
                    profile.pairs = result[0]
                    profile.last_index = result[1]
                    profile.cycle = result[2]
                    storage.save()
                    return jsonify({'message': 'profile has been created'})
                else:
                    return jsonify({'message': 'profile has not been created pls retry'})
            else:
                return 'Request does not contain valid JSON data', 400

        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message})
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
    



def paired_users():
    from Models import storage
    """Function that fetches a particular profile"""
    try:
        id = request.args.get('id')
        params = 'id'
        profile = storage.data_dict(Profile, params, id)
        user_ids = profile['pairs']
        print(user_ids)
        if not user_ids:
            return []  # Return an empty list if user IDs string is empty
    
        user_id_list = user_ids.split(',')
        profiles = []

        for user_id in user_id_list:
            user = storage.query(Users, 'id', int(user_id))
            if user is not None:
                print('in user conditional')
                profile = storage.data_dict(Profile, 'userID', user.id)
                if profile is not None:
                    profile['name'] = user.name
                    profile['email'] = user.email
                    profiles.append(profile)
    except Exception as e:
        print(f"An error occurred while fetching profiles: {str(e)}")

    return profiles