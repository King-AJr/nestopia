#!/usr/bin/python3
from flask import Flask
from Controllers.signupController import signup
from Controllers.listingsController import add_listing, view_listing, delete_listing, all_listing, update_listing
from Controllers.profileController import add_profile, view_profile, delete_profile, all_profile, update_profile
from Controllers.loginController import login
import re
from flask import request
from flask import jsonify
import bcrypt
from Models.Users import Users
from Models import storage


app = Flask(__name__)

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
    return add_listing()

@app.route('/all_listing')
def allListing():
    """fetch all listing"""
    return all_listing()

@app.route('/update_listing', methods=['PUT'])
def updateListing():
    """update a specific listing"""
    return update_listing()

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
    """fetch all listing"""
    return all_profile()

@app.route('/delete_profile', methods=['DELETE'])
def deleteProfile():
    """delete listing from DB"""
    return delete_profile()

#@app.route('/search_listings', methods=['POST'])



if __name__ == "__main__":
    app.run(port=5050, debug=True)