def compute_score(user, other_user):
    score = 0

    # Same department
    if user['department'] == other_user['department']:
        score += 3

    # Same faculty
    if user['faculty'] == other_user['faculty']:
        score += 3

    # Temperament
    if 'temperament' in user and 'temperament' in other_user:
        if user['temperament'] != other_user['temperament']:
            score += 5
        else:
            score += 3

    # Same gender
    if user['gender'] == other_user['gender']:
        score += 35

    # Same smoke
    if user['smoke'] == other_user['smoke']:
        score += 5

    # Same drink
    if user['drink'] == other_user['drink']:
        score += 5

    # Same religion
    if user['religion'] == other_user['religion']:
        score += 21

    # Spirituality
    if 'spirituality' in user and 'spirituality' in other_user:
        if user['spirituality'] == other_user['spirituality']:
            score += 10
        elif (
            (user['spirituality'] == 'strict' or user['spirituality'] == 'not so strict') and
            other_user['spirituality'] == 'not so strict'
        ):
            score += 5

    # Noise tolerance
    if 'noiseTol' in user and 'noiseTol' in other_user:
        if user['noiseTol'] == other_user['noiseTol']:
            score += 5
        elif (
            (user['spirituality'] == 'strict' or user['spirituality'] == 'not so strict') and
            other_user['spirituality'] == 'not so strict'
        ):
            score += 5

    # Same age range
    if user['ageRange'] == other_user['ageRange']:
        score += 9

    return score

def match_users(particular_user, other_users):
    matched_users = []
    for other_user in other_users:
        score = compute_score(particular_user, other_user)
        if score > 84:
            matched_users.append((other_user, score))
    return matched_users

# Example usage
particular_user = {
    'department': 'Computer Science',
    'faculty': 'Engineering',
    'gender': 'male',
    'smoke': 'never',
    'drink': 'once in a while',
    'party': 'regularly',
    'religion': 'christian',
    'spirituality': 'not so strict',
    'noiseTol': 'high',
    'ageRange': '24-27'
}

other_users = [
    {
        'department': 'Computer Science',
        'faculty': 'Engineering',
        'gender': 'female',
        'smoke': 'never',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'christian',
        'spirituality': 'not so strict',
        'noiseTol': 'high',
        'ageRange': '24-27'
    },
    {
        'department': 'Electrical Engineering',
        'faculty': 'Engineering',
        'gender': 'male',
        'smoke': 'never',
        'drink': 'never',
        'party': 'once in a while',
        'religion': 'muslim',
        'spirituality': 'strict',
        'noiseTol': 'mid',
        'ageRange': '21-23'
    },
    {
        'department': 'Computer Science',
        'faculty': 'Science',
        'gender': 'male',
        'smoke': 'never',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'christian',
        'spirituality': 'strict',
        'noiseTol': 'low',
        'ageRange': '24-27'
    },
    {
        'department': 'Mechanical Engineering',
        'faculty': 'Engineering',
        'gender': 'male',
        'smoke': 'regularly',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'christian',
        'spirituality': 'not so strict',
        'noiseTol': 'mid',
        'ageRange': '21-23'
    },
    {
        'department': 'Computer Science',
        'faculty': 'Engineering',
        'gender': 'female',
        'smoke': 'never',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'buddhist',
        'spirituality': 'low',
        'noiseTol': 'high',
        'ageRange': '24-27'
    },
    {
        'department': 'Computer Science',
        'faculty': 'Engineering',
        'gender': 'female',
        'smoke': 'regularly',
        'drink': 'never',
        'party': 'never',
        'religion': 'christian',
        'spirituality': 'not so strict',
        'noiseTol': 'low',
        'ageRange': '16-20'
    },
    {
        'department': 'Civil Engineering',
        'faculty': 'Engineering',
        'gender': 'male',
        'smoke': 'never',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'hindu',
        'spirituality': 'high',
        'noiseTol': 'high',
        'ageRange': '24-27'
    },
    {
        'department': 'Computer Science',
        'faculty': 'Science',
        'gender': 'male',
        'smoke': 'regularly',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'christian',
        'spirituality': 'not so strict',
        'noiseTol': 'mid',
        'ageRange': '24-27'
    },
    {
        'department': 'Computer Science',
        'faculty': 'Engineering',
        'gender': 'female',
        'smoke': 'never',
        'drink': 'never',
        'party': 'regularly',
        'religion': 'muslim',
        'spirituality': 'not strict',
        'noiseTol': 'low',
        'ageRange': '24-27'
    },
    {
        'department': 'Computer Science',
        'faculty': 'Engineering',
        'gender': 'male',
        'smoke': 'never',
        'drink': 'once in a while',
        'party': 'regularly',
        'religion': 'christian',
        'spirituality': 'low',
        'noiseTol': 'high',
        'ageRange': '24-27'
    }
]

matched_users = match_users(particular_user, other_users)

print("Matched users:")
for user, score in matched_users:
    print(user, "Score:", score)
