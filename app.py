#!/usr/bin/python3
from flask import Flask, render_template
from datetime import datetime
from flask_socketio import SocketIO, join_room
from Controllers.signupController import signup
from Controllers.listingsController import add_listing, view_listing, delete_listing, all_listing, update_listing, area
from Controllers.profileController import add_profile, view_profile, delete_profile, all_profile, update_profile, paired_users
from Controllers.loginController import login
from Models.Messages import Messages
from Models import storage
import time
import random
import string
import re
import base64
from flask import request
from flask import jsonify
import os
from flask_cors import CORS
import bcrypt
from Models.Users import Users
from Models import storage


app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = './UPLOAD_FOLDER'
socketio = SocketIO(app)

@app.route('/')
def homepage():
    return "The project just began"

@app.route('/signup', methods=['POST'])
def signup_route():
    """function to handle user signup"""
    return signup()

@app.route('/login', methods=['POST'])
def login_fx():
    """deal with login"""
    return login()

@app.route('/view_listing')
def returnListing():
    """fetch a specific listing"""
    return view_listing()

@app.route('/add_listing', methods=['POST'])
def addListing():
    """function to add listing to db"""
    image_names = upload()
    return add_listing(image_names)

@app.route('/all_listings')
def allListing():
    """fetch all listing"""
    return all_listing()

@app.route('/update_listing', methods=['PUT'])
def updateListing():
    """update a specific listing"""
    image_names = upload()
    return update_listing(image_names)

@app.route('/delete_listing', methods=['DELETE'])
def deleteListing():
    """delete listing from DB"""
    return delete_listing()

@app.route('/add_profile', methods=['POST'])
def addProfile():
    """add profile of an existing user"""
    return add_profile()

@app.route('/view_profile')
def returnProfile():
    """fetch a specific listing"""
    return view_profile()

@app.route('/update_profile', methods=['PUT'])
def updateProfile():
    """update a specific listing"""
    return update_profile()

@app.route('/all_profile')
def allProfile():
    """fetch all profiles"""
    return all_profile()

@app.route('/delete_profile', methods=['DELETE'])
def deleteProfile():
    """delete listing from DB"""
    return delete_profile()

@app.route('/chat')
def chat_engine():
    """deal with chat engine"""
    username = request.args.get('username')
    room = request.args.get('room')
    return render_template('chat.html', username=username, room=room)

@app.route('/join_room')
def handle_join():
    return render_template('index.html')

@app.route('/area_listings')
def major_area():
    return area()

@app.route('/view_pairs')
def view_pairs():
    return paired_users()   


@socketio.on('join_room')
def handle_join(data):
    app.logger.info("{} has joined the room {}".format(data['username'], data['room']))
    join_room(data['room'])
    # socketio.emit('join_room_announcement', data, room=data['room'])

def serialize_message(message):
    return {
        'room': message['room'],
        'content': message['content'],
        'sent_by': message['sent_by'],
        'sent_to': message['sent_to'],
        'sent_at': message['sent_at'].isoformat()
    }


def generate_random_string(length):
    """Generate a random string of given length."""
    letters = string.ascii_letters + string.digits
    return ''.join(random.choice(letters) for _ in range(length))

def upload():
    uploaded_files = request.files.getlist('images')  # Get a list of uploaded files

    # Initialize an empty list to store the file names
    file_names = []

    # Generate a unique filename based on the current time and a random string
    current_time = str(int(time.time()))  # Convert current time to string

    # Save each file with a unique filename and store the names
    for file in uploaded_files:
        filename, extension = os.path.splitext(file.filename)
        random_string = generate_random_string(8)  # Generate an 8-character random string
        new_filename = f"{current_time}_{random_string}{extension}"
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], new_filename))
        file_names.append(new_filename)

    # Concatenate the file names with commas
    names_string = ','.join(file_names)
    return names_string


@socketio.on('send_message')
def handle_send_message_event(data):
    app.logger.info("{} has sent a message to the room {}: {}".format(data['username'],
                                                                     data['room'],
                                                                     data['message']))
    room = '{}{}-{}{}'.format(data['username'], 5, 'kumba', 10)
    message = Messages(room, data['username'], 'victor', data['message'])
    storage.new(message)
    storage.save()

    param = 'room'
    messages = storage.query_all(Messages, param, room)
    sorted_messages = sorted(messages, key=lambda x: x['sent_at'])
    json_msg = []
    for i in sorted_messages:
        json_msg.append(serialize_message(i))

    print(json_msg)
    socketio.emit('receive_message', json_msg, room=data['room'])
#@app.route('/search_listings', methods=['POST'])



if __name__ == "__main__":
    socketio.run(app, port=5050, debug=True)