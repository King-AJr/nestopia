#!/usr/bin/python3

from Models.BaseModel import BaseModel, Base
from sqlalchemy import Column, String, Integer, Enum, Date, ForeignKey

class Profile(BaseModel, Base):
    __tablename__ = 'profile'

    id = Column(Integer, primary_key=True, autoincrement=True)
    sleep_schedule = Column(Enum('Night owls', 'Early risers', 'Flexible schedule'))
    cleanliness_organization = Column(Enum('Neat and Tidy', 'Moderately Clean', 'Relaxed Approach'))
    study_habits = Column(Enum('Silent Studier', 'Background Noise', 'Varied Study Locations'))
    interests_hobbies = Column(Enum('Sports Enthusiast', 'Arts and Culture', 'Academic Focus', 'Social Butterfly'))
    study_majors_courses = Column(Enum('Science and Engineering', 'Humanities and Arts', 'Business and Economics', 'Social Sciences'))
    guest_policy = Column(Enum('No Guests Allowed', 'Occasional Guests', 'Open to Guests'))
    noise_tolerance = Column(Enum('Prefer Quiet Environment', 'Moderate Noise Levels', 'Tolerant of Noise'))
    shared_chores = Column(Enum('Equal Distribution of Chores', 'Rotating Chore Schedule', 'Individual Responsibility'))
    study_space = Column(Enum('Need Dedicated Study Space in Room', 'home is not for study', 'Flexible Study Locations'))
    overnight_visitors = Column(Enum('No Overnight Visitors', 'Occasional Overnight Visitors', 'Open to Overnight Visitors'))
    gender = Column(Enum('male', 'female'))
    smoke = Column(Enum('regularly', 'once in a while', 'never'))
    drink = Column(Enum('regularly', 'once in a while', 'never'))
    party = Column(Enum('regularly', 'once in a while', 'never'))
    religion = Column(Enum('christian', 'muslim', 'atheist'))
    ageRange = Column(Enum('17-20', '21-23', '24-27'))
    pets = Column(Enum('all', 'dogs', 'cats', 'none'))
    pairs = Column(String(500), default='')
    cycle = Column(Integer, default=0)
    last_index = Column(Integer, default=0)
    userID = Column(Integer, ForeignKey('users.id'), unique=True)

    def __init__(self, gender, smoke, drink, party, 
                 religion, ageRange,
                 sleep_schedule, cleanliness_organization, study_habits, interests_hobbies, 
                 study_majors_courses, guest_policy, noise_tolerance, 
                 shared_chores, study_space, 
                 overnight_visitors,
                 pets, pairs, cycle, last_index, userID):
        self.gender = gender
        self.smoke = smoke
        self.drink = drink
        self.party = party
        self.religion = religion
        self.ageRange = ageRange
        self.pets = pets
        self.sleep_schedule = sleep_schedule
        self.cleanliness_organization = cleanliness_organization
        self.study_habits = study_habits
        self.interests_hobbies = interests_hobbies
        self.study_majors_courses = study_majors_courses
        self.guest_policy = guest_policy
        self.noise_tolerance = noise_tolerance
        self.shared_chores = shared_chores
        self.study_space = study_space
        self.overnight_visitors = overnight_visitors
        self.last_index = last_index
        self.cycle = cycle
        self.pairs = pairs
        self. userID = userID

