#!/usr/bin/python3

from Models.BaseModel import BaseModel, Base
from sqlalchemy import Column, String, Integer, Enum, Date, ForeignKey

class Profile(BaseModel, Base):
    __tablename__ = 'profile'

    id = Column(Integer, primary_key=True, autoincrement=True)
    department = Column(String(60))
    faculty = Column(String(80))
    gender = Column(Enum('male', 'female'))
    smoke = Column(Enum('regularly', 'once in a while', 'never'))
    drink = Column(Enum('regularly', 'once in a while', 'never'))
    party = Column(Enum('regularly', 'once in a while', 'never'))
    religion = Column(Enum('christian', 'muslim', 'atheist'))
    spirituality = Column(Enum('strict', 'not so strict', 'not strict'))
    noiseTol = Column(Enum('high', 'mid', 'low'))
    ageRange = Column(Enum('16-20', '21-23', '24-27'))
    birthDay = Column(Date)
    userID = Column(Integer, ForeignKey('users.id'), default=1)

    def __init__(self, department, faculty, gender, smoke, drink, party, religion, spirituality, noiseTol, ageRange, birthDay):
        self.department = department
        self.faculty = faculty
        self.gender = gender
        self.smoke = smoke
        self.drink = drink
        self.party = party
        self.religion = religion
        self.spirituality = spirituality
        self.noiseTol = noiseTol
        self.ageRange = ageRange
        self.birthDay = birthDay

