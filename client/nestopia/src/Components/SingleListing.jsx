import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";


const SingleListing = () => {
    const id = useParams()
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchListing = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:5050/view_listing?id=${id.id}`);
                const results = response.data;
                setData(results);
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving listings:', error);
            }
        };
        fetchListing();
    }, [id]);

    console.log(data)
    return (
        <div>
            
            {loading ?  (<p>Loading...</p>) : (
                <div>
                <div className="single-property-4">
                <div className="container-fluid p0">
                    <div className="row">
                        <div className="col-sm-6 col-lg-6 p0">
                            <div className="row m0">
                                <div className="col-lg-12 p0">
                                    <div className="popup-images">
                                        <a className="popup-img" href="images/interior/p-1.jpg"><img className="img-fluid w100" src="/c_assets/images/interior/p-1.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-6 p0">
                            <div className="row m0">
                                <div className="col-sm-6 col-lg-6 p0">
                                    <div className="popup-images">
                                        <a className="popup-img" href="images/interior/p-2.jpg"><img className="img-fluid w100" src="/c_assets/images/interior/p-2.jpg" alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6 p0">
                                    <div className="popup-images">
                                        <a className="popup-img" href="images/interior/p-3.jpg"><img className="img-fluid w100" src="/c_assets/images/interior/p-3.jpg" alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6 p0">
                                    <div className="popup-images">
                                        <a className="popup-img" href="images/interior/p-4.jpg"><img className="img-fluid w100" src="/c_assets/images/interior/p-4.jpg" alt=""/></a>
                                    </div>
                                </div>
                                <div className="col-sm-6 col-lg-6 p0">
                                    <div className="popup-images">
                                        <a className="popup-img" href="images/interior/p-5.jpg"><img className="img-fluid w100" src="/c_assets/images/interior/p-5.jpg" alt=""/></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- END SECTION HEADINGS -->
    
            <!-- START SECTION PROPERTIES LISTING --> */}
            <section className="single-proper blog details">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-12 blog-pots">
                            <div className="row">
                                <div className="col-md-12">
                                    <section className="headings-2 pt-0">
                                        <div className="pro-wrapper">
                                            <div className="detail-wrapper-body">
                                                <div className="listing-title-bar">
                                                    <h3>{data.listing.name}</h3>
                                                    <div className="mt-0">
                                                        <a href="#listing-location" className="listing-address">
                                                            <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5"></i>{data.listing.location}
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single detail-wrapper mr-2">
                                                <div className="detail-wrapper-body">
                                                    <div className="listing-title-bar">
                                                        <h4>$ {data.listing.price}</h4>
        
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    {/* <!-- Star Description --> */}
                                    <div className="single homes-content details mb-30">
                                        <h5 className="mb-4">Description</h5>
                                        <p>{data.listing.description}</p>
                                        </div>
                                    {/* <!-- End Description --> */}
                                </div>
                            </div>
                            {/* <!-- Star Property Details --> */}
                            <div className="single homes-content details mb-30">
                                {/* <!-- title --> */}
                                <h5 className="mb-4">Property Details</h5>
                                <ul className="homes-list clearfix">
                                    
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Type:</span>
                                        {data.listing.type === 'self contain' ? <span className="det">Self Contain</span>
                                                                                : <span className="det">Houses</span>}
                
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Pairing Available:</span>
                                        <span className="det">{data.listing.pairing}</span>
                                    </li>
                                    <li>
                                        <span className="font-weight-bold mr-1">Property Price:</span>
                                        <span className="det">${data.listing.price}</span>
                                    </li>
                                    {
                                        data.listing.type !== 'self contain' && <li>
                                        <span className="font-weight-bold mr-1">Rooms:</span>
                                        <span className="det">{data.listing.rooms}</span>
                                    </li>
                                    }
                
                                   
                                </ul>
                                {/* <!-- title --> */}
                                <h5 className="mt-5">Amenities</h5>
                                {/* <!-- cars List --> */}
                                <ul className="homes-list clearfix">
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Air Cond</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Balcony</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Internet</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Dishwasher</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Bedding</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Cable TV</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Parking</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Pool</span>
                                    </li>
                                    <li>
                                        <i className="fa fa-check-square" aria-hidden="true"></i>
                                        <span>Fridge</span>
                                    </li>
                                </ul>
                            </div>
    
                        </div>
                        <aside className="col-lg-4 col-md-12 car">
                            <div className="single widget">
                                <div className="sidebar">
                                    <div className="widget-boxed mt-33 mt-5">
                                        <div className="widget-boxed-header">
                                            <h4>Agent Information</h4>
                                        </div>
                                        <div className="widget-boxed-body">
                                            <div className="sidebar-widget author-widget2">
                                                <div className="author-box clearfix">
                                                    <img src="/c_assets/images/testimonials/ts-1.jpg" alt="author-image" className="author__img"/>
                                                    <h4 className="author__title">Lisa Clark</h4>
                                                    <p className="author__meta">Agent of Property</p>
                                                </div>
                                                <ul className="author__contact">
                                                    <li><span className="la la-map-marker"><i className="fa fa-map-marker"></i></span>302 Av Park, New York</li>
                                                    <li><span className="la la-phone"><i className="fa fa-phone" aria-hidden="true"></i></span><a href="#">(234) 0200 17813</a></li>
                                                    <li><span className="la la-envelope-o"><i className="fa fa-envelope" aria-hidden="true"></i></span><a href="#">lisa@gmail.com</a></li>
                                                </ul>
                                                <div className="agent-contact-form-sidebar">
                                                    <h4>Request Inquiry</h4>
                                                    <form name="contact_form" method="post" action="https://code-theme.com/html/findhouses/functions.php">
                                                        <input type="text" id="fname" name="full_name" placeholder="Full Name" required />
                                                        <input type="number" id="pnumber" name="phone_number" placeholder="Phone Number" required />
                                                        <input type="email" id="emailid" name="email_address" placeholder="Email Address" required />
                                                        <textarea placeholder="Message" name="message" required></textarea>
                                                        <input type="submit" name="sendmessage" className="multiple-send-message" value="Submit Request" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
           </div>  ) }
            

        </div>
    )
}

export default SingleListing