#!/usr/bin/python3

from Models.BaseModel import BaseModel, Base
from datetime import datetime
from sqlalchemy import Column, String, Integer, BigInteger, DateTime, Enum
from sqlalchemy.orm import relationship

class Messages(BaseModel, Base):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True, autoincrement=True)
    room = Column(String(60))
    sent_at =  Column(DateTime, default=datetime.utcnow)
    sent_by = Column(String(100))
    sent_to = Column(String(100))
    recieved = Column(Enum('yes', 'no'), default='no')
    read = Column(Enum('yes', 'no'), default='no')
    content = Column(String(500))
    

    def __init__(self, room, sent_by, sent_to, content):
        self.room = room
        self.sent_by = sent_by
        self.sent_to = sent_to
        self.content = content
        
