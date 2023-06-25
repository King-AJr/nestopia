#!/usr/bin/python3

from Models.BaseModel import BaseModel, Base
from sqlalchemy import Column, String, Integer, Enum, Boolean, ForeignKey

class Listings(BaseModel, Base):
    __tablename__ = 'listings'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(60))
    location = Column(String(300))
    latitude = Column(String(100), nullable=True)
    longitude = Column(String(100), nullable=True)
    price = Column(Integer)
    pairing = Column(Enum('yes', 'no'))
    rooms = Column(Integer)
    images = Column(String(100))
    description = Column(String(500))
    type = Column(Enum('self contain', 'bedroom'))
    major_area = Column(String(60))
    userID = Column(Integer, ForeignKey('users.id'), default=1)

    def __init__(self, name, location, latitude, longitude, price, pairing, type, rooms, images, major_area, description):
        self.name = name
        self.location = location
        self.latitude = latitude
        self.longitude = longitude
        self.price = price
        self.type = type
        self.pairing = pairing
        self.rooms = rooms
        self.images = images
        self.major_area = major_area
        self.description = description
