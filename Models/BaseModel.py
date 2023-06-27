#!/usr/bin/python3

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import text



classes = {}

Base = declarative_base()

class BaseModel():
    """deals with storage in DB"""
    __engine = None
    __session = None

    def __init__(self):
        self.__engine = create_engine('mysql+mysqldb://admin:admin@localhost/nestopia')
        Session = sessionmaker(bind=self.__engine)
        self.__session = Session()
        Base.metadata.create_all(self.__engine)


    def new(self, obj):
        """add the object to the current database session"""
        Base.metadata.create_all(self.__engine)
        self.__session.add(obj)

    def save(self):
        """commit all changes of the current database session"""
        self.__session.commit()

    
    def delete(self, table, id):
        """delete from the current database session obj if not None"""
        row = self.__session.query(table).filter_by(id=id).first()
        if row:
            self.__session.delete(row)
            self.__session.commit()
            return f"Listing with ID {row.id} deleted successfully."
        else:
            return f"Listing with ID {row.id} not found."

    def close(self):
        """call remove() method on the private session attribute"""
        self.__session.close()

    @staticmethod
    def serialize_row(row):
        if row is None:
            return None

        serialized = row.__dict__.copy()
        # Remove any unnecessary keys from the dictionary
        serialized.pop('_sa_instance_state', None)

        return serialized
    
    def data_dict(self, table, param, value):
        row = self.query(table, param, value)
        data_dict = self.serialize_row(row)
        return data_dict

    
    def query(self, table, param, value):
        """Query DB for specific data"""
        data = self.__session.query(table).filter_by(**{param: value}).first()
        return data if data else None
    
    def take_query(self, string):
        query = text(string)
        result = self.__session.execute(query)
        columns = result.keys()

        # Fetch all the rows as dictionaries
        results = [dict(zip(columns, row)) for row in result.fetchall()]
        return results
        
    def roll(self):
        self.__session.rollback()
        return 'done'


    def query_all(self, table, param=None, value=None):
        """Query DB for a specific table"""
        if param == None:
            data = self.__session.query(table).all()
        else:
            data = self.__session.query(table).filter_by(**{param: value})
        rows = []
        for i in data:
            rows.append(self.serialize_row(i))
        return rows

    def search_listings(self, criteria):
        from Models.Listings import Listings
        """search listings based on specific criterias"""
        results = self.__session.query(Listings).filter(Listings.pairing == criteria.get('pairing'))

        if criteria.get('type'):
            results = results.filter(Listings.type == (criteria.get('type')))

        if criteria.get('location'):
            results = results.filter(Listings.type.ilike('%{}%'.format(criteria.get('location'))))

        if criteria.get('max_price'):
            results = results.filter(Listings.price <= criteria.get('max_price'))

        if criteria.get('min_rooms'):
            results = results.filter(Listings.price >= criteria.get('min_rooms'))

        return results.all()