from Models import storage
from sqlalchemy.exc import SQLAlchemyError
from roomi import calculate_score, update_score
from Models.Profile import Profile


def pair(user_data):
    results = []  # List to store user IDs with score > 78
    cycl = 0  # Variable to track the number of cycles
    #"SELECT * FROM users WHERE age = ? AND religion = ? AND gender = ?;",
              # (age_var, religion_var, gender_var)

    try:
        exist_query = "SELECT * FROM information_schema.tables WHERE table_schema = \
              'nestopia' AND table_name = 'profile';"
        exist = storage.take_query(exist_query)
        if len(exist) > 0:
            print('profile exist')
            query = f"SELECT * FROM Profile WHERE ageRange = '{user_data['ageRange']}' AND \
                religion = '{user_data['religion']}' AND gender = '{user_data['gender']}' LIMIT 20"  # Fetch the first 20 users
            if 'last_index' in user_data and user_data['last_index'] is not None and user_data['last_index'] != 0:
                query += f" OFFSET {user_data['last_index']}"

            users = storage.take_query(query)
            print(users)

            if 'cycle' in user_data and user_data['cycle'] is not None:
                cycl = user_data['cycle']

            

            # Pair the user with the fetched users
            for db_user in users:
                score = calculate_score(user_data, db_user)
                print('score: ',score)  # Calculate the pairing score
                if score is not None:
                    if score > 78:
                        print(db_user['userID'])
                        results.append(db_user['userID'])

            query = "SELECT COUNT(*) FROM Profile"

            total_result = storage.take_query(query)
            print('after query', total_result)
            total = total_result[0]['COUNT(*)'] if total_result else 0
            print(total)

            while len(results) < 20 and cycl * 20 < total:
                print('in the loop')
                cycl += 1
                offset_value = cycl * 20
                query = f"SELECT * FROM Profile LIMIT 20 OFFSET {offset_value}"
                users = storage.take_query(query)

                for db_user in users:
                    score = calculate_score(user_data, db_user)
                    if score > 70 and db_user.id != user_data.id:
                        results.append(db_user.id)
                if cycl * 20 >= total:
                    break  # Break if all users have been considered


            lastIndex = 0
            print('gotten to new profile')
            if len(results) > 0:
                print('in results')
                lastIndex = results[-1]
            else:
                results = ''


            def list_to_string(lst):
                return ', '.join(str(element) for element in lst)
            
            resultants = list_to_string(results)
        if len(exist) == 0:
            resultants = ''
            lastIndex = 0
            cycl = 0
        
        gender = user_data.get('gender')
        smoke = user_data.get('smoke')
        drink = user_data.get('drink')
        party = user_data.get('party')
        religion = user_data.get('religion')
        ageRange = user_data.get('ageRange')
        sleep_schedule = user_data.get('sleep_schedule')
        cleanliness_organization = user_data.get('cleanliness_organization')
        study_habits = user_data.get('study_habits')
        interests_hobbies = user_data.get('interests_hobbies')
        study_majors_courses = user_data.get('study_majors_courses')
        guest_policy = user_data.get('guest_policy')
        noise_tolerance = user_data.get('noise_tolerance')
        shared_chores = user_data.get('shared_chores')
        study_space = user_data.get('study_space')
        overnight_visitors = user_data.get('overnight_visitors')
        pets = user_data.get('pets')
        userID = user_data.get('userID')
        pairs = resultants
        cycle = cycl
        last_index = lastIndex

        # Save the results and user details in the database

        new_profile = Profile(gender, smoke, drink, party, 
                 religion, ageRange,
                 sleep_schedule, cleanliness_organization, study_habits, interests_hobbies, 
                 study_majors_courses, guest_policy, noise_tolerance, 
                 shared_chores, study_space, 
                 overnight_visitors,
                 pets, pairs, cycle, last_index, userID)
        
        print('gotten to new storage')
        storage.new(new_profile)
        storage.save()
        return 'done'

    except SQLAlchemyError as e:
        # Handle any database errors
        print("Database error:", str(e))
        storage.roll()
        return 1


def update_pair(id):
    results = []  # List to store user IDs with score > 78
    cycl = 0  # Variable to track the number of cycles
    params = 'id'
    user_data = storage.query(Profile, params, id)


    try:
        query = f"SELECT * FROM Profile WHERE ageRange = '{user_data.ageRange}' AND \
            religion = '{user_data.religion}' AND gender = '{user_data.gender}' LIMIT 20"  # Fetch the first 20 users
        if user_data.last_index is not None and user_data.last_index != 0:
            query += f" OFFSET {user_data.last_index}"

        users = storage.take_query(query)
        if user_data.cycle is not None:
            cycl = user_data.cycle

        

        # Pair the user with the fetched users
        for db_user in users:
            print(db_user)
            score = update_score(user_data, db_user) # Calculate the pairing score
            if score is not None:
                if score > 78:
                    results.append(db_user['id'])
                    print('results: ', db_user['id'])

        query = "SELECT COUNT(*) FROM Profile"

        total_result = storage.take_query(query)
        total = total_result[0]['COUNT(*)'] if total_result else 0

        count = 0
        while len(results) < 20:
            offset_value = cycl * 20
            query = f"SELECT * FROM Profile LIMIT 20 OFFSET {offset_value}"
            users = storage.take_query(query)
            for db_user in users:
                score = calculate_score(user_data, db_user)
                if score > 70:
                    results.append(db_user.id)
            if cycl * 20 >= total:
                break  # Break if all users have been considered

        lastIndex = 0
        if len(results) > 0:
            lastIndex = results[-1]
        else:
            results = ''


        def list_to_string(lst):
            return ', '.join(str(element) for element in lst)
        
        resultants = list_to_string(results)

        
        
        print('gotten to new storage')
        return [resultants, lastIndex, cycl]

    except SQLAlchemyError as e:
        # Handle any database errors
        print("Database error:", str(e))
        storage.roll()
        return 1

