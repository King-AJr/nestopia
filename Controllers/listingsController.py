#!/usr/bin/python3

from flask import request
from Models.Listings import Listings 
from sqlalchemy import exc
import os
from flask import jsonify

from flask import request, jsonify
from Models import storage

def add_listing(names):
    if request.method == 'POST':
        try:
            required_fields = ['name', 'location', 'price', 'pairing', 'type', 'major_area', 'description']
            missing_fields = []
            for field in required_fields:
                if field not in request.form or not request.form[field]:
                    missing_fields.append(field.capitalize())

            if missing_fields:
                error_message = f"The following fields are required: {', '.join(missing_fields)}"
                return jsonify({'error': error_message}), 400

            name = request.form.get('name')
            location = request.form.get('location')
            latitude = request.form.get('latitude') if request.form.get('latitude') else '0'
            longitude = request.form.get('longitude') if request.form.get('longitude') else '0'
            price = request.form.get('price')
            pairing = request.form.get('pairing')
            type = request.form.get('type')
            rooms = request.form.get('rooms') if request.form.get('rooms') else '0'
            images = names
            major_area = request.form.get('major_area')
            description = request.form.get('description')

            new_listing = Listings(name, location, latitude, longitude, price, pairing, type, rooms, images, major_area, description)
            storage.new(new_listing)
            storage.save()
            return jsonify({'message': 'Listing has been created'})

        except KeyError as e:
            error_message = f"One of the fields is missing: {e}"
            return jsonify({'error': error_message}), 400

    return 'Invalid request method', 405

        

def view_listing():
    from Models import storage
    """Function that fetches a particular listing"""
    id = request.args.get('id')
    params = 'id'
    listing = storage.data_dict(Listings, params, id)

    if listing and 'images' in listing:
        image_names = listing['images'].split(',')
        image_urls = []
        for image_name in image_names:
            image_path = os.path.join('UPLOAD_FOLDER', image_name.strip())
            if os.path.exists(image_path):
                image_urls.append(image_path)
        listing['image_urls'] = image_urls
    return jsonify({'listing': listing})

def all_listing():
    # Fetch all listings from the database
    major_area = request.args.get('major_area')
    if major_area is not None:
        params = 'major_area'
        print('major')
        listings = storage.query_all(Listings, params, major_area)
    else:
        listings = storage.query_all(Listings)
    print(listings)
    # Create a list to store the updated listings with image filenames
    updated_listings = []

    
    for listing in listings:
        # Get the image filenames associated with the listing
        image_filenames = listing['images'].split(',') if 'images' in listing else []
        
        # Update the listing by adding the image filenames
        updated_listing = {
            'id': listing['id'],
        'name': listing['name'],
        'location': listing['location'],
        'latitude': listing['latitude'],
        'longitude': listing['longitude'],
        'price': listing['price'],
        'pairing': listing['pairing'],
        'type': listing['type'],
        'rooms': listing['rooms'],
        'images': image_filenames,
        'major_area': listing['major_area'],
        'description': listing['description']
        }
        
        # Add the updated listing to the list
        updated_listings.append(updated_listing)
    
    return updated_listings


def update_listing(names):
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
            listing.images = names
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
    


def area():
    from Models import storage
    try:
        major_area = request.args.get('major_area')
        params = 'major_area'
        listings = storage.query_all(Listings, params, major_area)
        return listings
    except AttributeError as e:
        return "profile does not exist", 404
    

# def upload():
#     uploaded_files = request.files.getlist('file')  # Get a list of uploaded files

#     # Initialize an empty list to store the file names
#     file_names = []

#     # Save each file to the upload folder and store the names
#     for file in uploaded_files:
#         file.save(os.path.join(app.config['UPLOAD_FOLDER'], file.filename))
#         file_names.append(file.filename)

#     # Concatenate the file names with commas
#     names_string = ','.join(file_names)

