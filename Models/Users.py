#!/usr/bin/python3

from Models.BaseModel import BaseModel, Base
from sqlalchemy import Column, String, Integer, BigInteger
from sqlalchemy.orm import relationship

class Users(BaseModel, Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(60))
    email = Column(String(80), unique=True)
    password = Column(String(100))
    phone = Column(BigInteger)
    listings = relationship('Listings', backref='Users')
    profile = relationship('Profile', uselist=False, backref='Users')

    def __init__(self, name, email, password, phone):
        self.name = name
        self.email = email
        self.password = password
        self.phone = phone

