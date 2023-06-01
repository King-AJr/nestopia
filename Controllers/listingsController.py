#!/usr/bin/python3

from flask import request
from Models.Listings import Listings 
from sqlalchemy import exc
from flask import jsonify

def add_listing():
    from Models import storage
    if request.method == 'POST':
        try:
            if request.is_json:
                data = request.get_json()
                required_fields = ['name', 'location', 'price', 'pairing', 'type', 'description']
                missing_fields = []
                for field in required_fields:
                    if field not in data or not data[field]:
                        missing_fields.append(field.capitalize())
                
                if missing_fields:
                    error_message = f"The following fields are required: {', '.join(missing_fields)}"
                    return jsonify({'error': error_message})
                    
                name = data.get('name')
                location = data.get('location')
                latitude = data.get('latitude') if data.get('latitude') is not None else '0'
                longitude = data.get('longitude') if data.get('longitude') is not None else '0'
                price = data.get('price')
                pairing = data.get('pairing')
                type = data.get('type')
                rooms = data.get('rooms') if data.get('rooms') is not None else '0'
                images = data.get('images') if data.get('images') is not None else ''
                description = data.get('description')

                new_listing = Listings(name, location, latitude, longitude, price, pairing, type, rooms, images, description)
                storage.new(new_listing)
                storage.save()
                return jsonify({'message': 'Listing has been created'})
            else:
                return 'Request does not contain valid JSON data', 400

        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message})
        

def view_listing():
    from Models import storage
    """Function that fetches a particular listing"""
    id = request.args.get('id')
    params = 'id'
    listing = storage.data_dict(Listings, params, id)
    return jsonify({'listing':listing})

def all_listing():
    from Models import storage
    """fetch all listings in DB"""
    listings = storage.query_all(Listings)
    return listings


def update_listing():
    from Models import storage
    """takes ID from params and updates isting"""
    id = request.args.get('id')
    params = 'id'
    listing = storage.query(Listings, params, id)
    if listing:
        try:
            data = request.get_json()
            required_fields = ['name', 'location', 'price', 'pairing', 'type', 'description']
            missing_fields = []
            for field in required_fields:
                if field not in data or not data[field]:
                    missing_fields.append(field.capitalize())
                    
                if missing_fields:
                    error_message = f"The following fields are required: {', '.join(missing_fields)}"
                    return jsonify({'error': error_message})
                        
            listing.name = data.get('name')
            listing.location = data.get('location')
            listing.latitude = data.get('latitude') if data.get('latitude') is not None else '0'
            listing.longitude = data.get('longitude') if data.get('longitude') is not None else '0'
            listing.price = data.get('price')
            listing.pairing = data.get('pairing')
            listing.type = data.get('type')
            listing.rooms = data.get('rooms') if data.get('rooms') is not None else '0'
            listing.images = data.get('images') if data.get('images') is not None else ''
            listing.description = data.get('description')

            storage.save()
            return jsonify({'message': 'Listing has been updated'})
        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message})
        except exc.DataError as e:
            error_message = f"please fill in the appropriate data"
    else:
        return 'listing does not exist', 400




def delete_listing():
    from Models import storage
    """Function that fetches a particular listing"""
    id = request.args.get('id')

    message = storage.delete(Listings, int(id))
    return jsonify({'message': message})
    
