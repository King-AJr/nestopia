attributes = {
    'sleep_schedule': ['Night owls', 'Early risers', 'Flexible schedule', 4, 8],
    'cleanliness_organization': ['Neat and Tidy', 'Moderately Clean', 'Relaxed Approach', 5, 8],
    'study_habits': ['Silent Studier', 'Background Noise', 'Varied Study Locations', 4, 7],
    'interests_hobbies': ['Sports Enthusiast', 'Arts and Culture', 'Academic Focus', 'Social Butterfly', 7],
    'study_majors_courses': ['Science and Engineering', 'Humanities and Arts', 'Business and Economics', 'Social Sciences', 8],
    'guest_policy': ['No Guests Allowed', 'Occasional Guests', 'Open to Guests', 4, 6],
    'noise_tolerance': ['Prefer Quiet Environment', 'Moderate Noise Levels', 'Tolerant of Noise', 4, 6],
    'shared_chores': ['Equal Distribution of Chores', 'Rotating Chore Schedule', 'Individual Responsibility', 4, 6],
    'study_space': ['Need Dedicated Study Space in Room', 'home is not for study', 'Flexible Study Locations', 4, 6],
    'overnight_visitors': ['No Overnight Visitors', 'Occasional Overnight Visitors', 'Open to Overnight Visitors', 6, 9],
    'smoke': ['regularly', 'once in a while', 'never', 6, 7],
    'party': ['regularly', 'once in a while', 'never', 4, 7],
    'drink': ['regularly', 'once in a while', 'never', 4, 7],
    'pets': ['all', 'dogs', 'cats', 'none', 5, 7]
}

ageRange = ['17-20', '21-23', '24-27']

def calculate_score(user, other_user):
    score = 0
    age = False
    if ((user['ageRange'] == other_user['ageRange']) or (user['ageRange'] == ageRange[0] and other_user['ageRange'] == ageRange[1])
                    or (user['ageRange'] == ageRange[1] and other_user['ageRange'] == ageRange[0])
                    or (user['ageRange'] == ageRange[2] and other_user['ageRange'] == ageRange[1])
                    or (user['ageRange'] == ageRange[1] and other_user['ageRange'] == ageRange[2])):
        age = True 

    if ((user['gender'] == other_user['gender']) and (user['religion'] == other_user['religion']) and age == True):
        for k, v in attributes.items():
            if k == 'shared_chores':
                score += v[-1]
            elif k == 'pets':
                if user['pets'] == other_user['pets']:
                    score += v[-1]
                elif user['pets'] == 'all' or other_user['pets'] != 'none':
                    score += -2
            elif k in ('interests_hobbies', 'study_majors_courses', 'guest_policy', 'overnight_visitors'):
                if user[k] == other_user[k]:
                    score += v[-1]
            else:
                if user[k] == other_user[k]:
                    score += v[-1]
                elif ((user[k] == v[0] and other_user[k] == v[2])
                    or (user[k] == v[2] and other_user[k] == v[0])
                    or (user[k] == v[1] and other_user[k] == v[2])
                    or (user[k] == v[2] and other_user[k] == v[1])):
                    score += v[-2]
        return score


def update_score(user, other_user):
    score = 0
    age = False
    if ((user.ageRange == other_user['ageRange']) or (user.ageRange == ageRange[0] and other_user['ageRange'] == ageRange[1])
                    or (user.ageRange == ageRange[1] and other_user['ageRange'] == ageRange[0])
                    or (user.ageRange == ageRange[2] and other_user['ageRange'] == ageRange[1])
                    or (user.ageRange == ageRange[1] and other_user['ageRange'] == ageRange[2])):
        age = True 

    if ((user.gender == other_user['gender']) and (user.religion == other_user['religion']) and age == True):
        for k, v in attributes.items():
            if k == 'shared_chores':
                score += v[-1]
            elif k == 'pets':
                if user.pets == other_user['pets']:
                    score += v[-1]
                elif user.pets == 'all' or other_user['pets'] != 'none':
                    score += -2
            elif k in ('interests_hobbies', 'study_majors_courses', 'guest_policy', 'overnight_visitors'):
                if getattr(user, k) == other_user[k]:
                    score += v[-1]
            else:
                if getattr(user,k) == other_user[k]:
                    score += v[-1]
                elif ((getattr(user,k) == v[0] and other_user[k] == v[2])
                    or (getattr(user,k) == v[2] and other_user[k] == v[0])
                    or (getattr(user,k) == v[1] and other_user[k] == v[2])
                    or (getattr(user,k) == v[2] and other_user[k] == v[1])):
                    score += v[-2]
        return score

