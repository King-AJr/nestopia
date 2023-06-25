import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import axios from 'axios';

function AddListing () {
    const [selection, setSelection] = useState('');
  const [numberOfBedrooms, setNumberOfBedrooms] = useState(0);

  const [formData, setFormData] = useState({
    name: '',
    location: '',
    latitude: '',
    longitude: '',
    price: '',
    pairing: '',
    type: '',
    rooms: '',
    images: [],
    major_area: '',
    description: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    setFormData({ ...formData, images: files });
  };

  const handleSelectionChange = (event) => {
    setSelection(event.target.value);
    handleInputChange(event); // Reset the number of bedrooms when the selection changes
  };

 const handleSubmit = (e) => {
    e.preventDefault()
    const formDataToSend = new FormData();
    for (const field in formData) {
      if (field === 'images') {
        for (let i = 0; i < formData.images.length; i++) {
          formDataToSend.append('images', formData.images[i]);
        }
      } else {
        formDataToSend.append(field, formData[field]);
      }
    }

    // Set the Content-Type header to application/json
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    // Send formDataToSend to the backend using Axios
    axios.post('http://127.0.0.1:5050/add_listing', formDataToSend, { headers })
      .then(response => {
        // Handle the response from the backend
        console.log(response.data);
      setFormData({
        name: '',
        location: '',
        latitude: '',
        longitude: '',
        price: '',
        pairing: '',
        type: '',
        rooms: '',
        images: [],
        major_area: '',
        description: ''
      });
    })
    .catch(error => {
      console.error(error);
    });
};
    return (
        <div>
            <main>
        {/* <!-- Banner Area --> */}
        <section className="banner-listing-area">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-lg-9 mx-auto text-center">
                        <h1 className="banner-title mb-15">Add Your Listing</h1>
                        <p className="banner-subtitle dot-sep">Home <span className="sep">Add Listing</span></p>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- Banner Area --> */}


        {/* <!-- Company Info Area --> */}
        <section className="company-info-area bg-gray pt-130 pb-100">
            <div className="container">
                <div className="row">
                    <div className="banner-down d-flex flex-wrap justify-content-between mb-70">
                        <p className="small-2">If you don't have an account you can optionally create one below by entering
                            your email address/username.</p>
                        <a className="down-btn" href="#">Sign in</a>
                    </div>


                    <div className="company-info mb-50">
                        <form className="row g-4" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label info-label">Listing Name</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleInputChange}
                                    className="form-control info-input small-1" 
                                    id="formGroupExampleInput"
                                    placeholder="Example input placeholder"/>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <label className="form-label info-label">Listing Category</label>
                                <div className="col-auto">
                                    <select className="info-input" name='type' id="inputCat" value={selection} onChange={handleSelectionChange}>
                                        <option value="self contain" selected>Self Contain</option>
                                        <option value="bedroom">Has Bedrooms</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <label className="form-label info-label">Where is your Lodge located</label>
                                <input 
                                    type="text" 
                                    name="location"
                                    value={formData.location}
                                    className="form-control info-input" 
                                    onChange={handleInputChange}
                                    id="phone" 
                                    placeholder=""/>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label info-label">Price</label>
                                <input 
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleInputChange}
                                    className="form-control info-input" 
                                    id="phone" 
                                    placeholder="500"/>
                            </div>
                            <label className="form-label info-label">Major Area around school</label>
                                <div className="col-auto col-lg-4">
                                    <select 
                                        className="info-input" 
                                        name="major_area"
                                        value={formData.major_area}
                                        onChange={handleInputChange}
                                        id="inputCat">
                                        <option value="alakahia" selected>Alakahia</option>
                                        <option value="choba">Choba</option>
                                        <option value="Back of Chem">Back of Chem</option>
                                        <option value="Aluu">Aluu</option>
                                        <option value="First Mechanic">First Mechanic</option>
                                        <option value="Odums">Odums</option>
                                        <option value="Rumousi">Rumousi</option>
                                        <option value="Miebaga">Miebaga</option>
                                    </select>
                                </div>
                                
                            <div className="col-lg-4">
                                <label className="form-label info-label">Latitude</label>
                                <input 
                                    type="text" 
                                    name="latitude"
                                    value={formData.latitude}
                                    onChange={handleInputChange}
                                    className="form-control info-input" 
                                    id="phone" 
                                    placeholder="38.9072"/>
                            </div>
                            <div className="col-lg-4">
                                <label className="form-label info-label">Longitude</label>
                                <input 
                                    type="text" 
                                    className="form-control info-input" 
                                    name="longitude"
                                    value={formData.longitude}
                                    onChange={handleInputChange}
                                    id="phone" 
                                    placeholder="38.9072"/>
                            </div>
                            <label className="form-label info-label">Would you like to have a room mate</label>
                            <div className="col-auto">
                                    <select 
                                        className="info-input" 
                                        name="pairing"
                                        value={formData.pairing}
                                        onChange={handleInputChange}
                                        id="inputCat">
                                        <option value="yes" selected>Yes </option>
                                        <option value="no">No</option>
                                    </select>
                                </div>
                                {selection === 'bedroom' && (
                                    <div className="col-lg-4 col-md-6">
                                    <label className="form-label info-label" >
                                        Number of Bedrooms:</label>
                                        <input
                                        className="form-control info-input"
                                        type="number"
                                        name="rooms"
                                        value={formData.rooms}
                                        onChange={handleInputChange}
                                        />
                                    </div>
                                )}
                            <h5 className="info-title mb-15 mt-40">Description</h5>
                            <div>
                                <textarea 
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="form-control info-input info-textarea" 
                                    id="exampleFormControlTextarea1"
                                    rows="3">Your Listing name</textarea>
                            </div>
                            <div className="images-upload mb-50">
                        <div className="d-lg-flex justify-content-between mb-50">
                            <h5 className="upload-title">Images upload</h5>
                            <div className="upload-tabs">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link tabs-link" id="pills-gallery-tab" data-bs-toggle="pill"
                                            data-bs-target="#pills-gallery" type="button" role="tab"
                                            aria-controls="pills-gallery" aria-selected="false">Gallery</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade" id="pills-gallery" role="tabpanel"
                                aria-labelledby="pills-gallery-tab" tabIndex="0">
                                <div className="listing-dropzone dropzone">
                                    <div className="dz-message">
                                        <img src="/d_assets/static/media/upload-icon.9d8c572f2c16669c9b9393348fd08ff1.svg" alt="upload"/>
                                        <h6 className="dz-button">drop your image here</h6>
                                        <p className="dz-custom-upload-text">or <span>browse</span></p>
                                        <p className="file-limit">Supports: JPG, PNG (Maximum file size: 10 MB)</p>
                                        <div className="btn-bordered">
                                            <input type='file' 
                                                name="images"
                                                multiple
                                                onChange={handleFileChange}
                                            ></input>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="prev-btn mt-15 inline-block">Submit</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        {/* <!-- Company Info Area --> */}

    </main>
    <Footer/>
        </div>
    )
}

export default AddListing;