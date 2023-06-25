import { Link } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import axios from "axios";
import { useState, useEffect } from "react";


const AllListings = () => {
    const [data, setData] = useState([]);

useEffect(() => {
    const fetchListing = async () => {
  axios.get('http://127.0.0.1:5050/all_listings')
    .then(response => {
      const results = response.data;
      setData(results);
    })
    .catch(error => {
      console.error('Error retrieving listings:', error);
    });
}
fetchListing()
}, []);


; // This may log the initial empty state


    return (
        
        <div>
            <Header/>
            <main>

{/* <!-- Property List breadcrumb area start --> */}
<section className="breadcrumb__area pt-195 pb-145 breadcrumb-transform p-relative z-index-1 fix"
   data-bg-color="#F8F8F8">
   <div className="breadcrumb__bg" style={{backgroundImage : `url(assets/img/breadcrumb/bg.png`}}></div>
   <div className="container">
      <div className="row align-items-center">
         <div className="col-sm-6">
            <div className="breadcrumb__content">
               <h3 className="breadcrumb__title">Property List</h3>
            </div>
         </div>
         <div className="col-sm-6">
            <div className="breadcrumb__content">
               <div className="breadcrumb__list text-center text-sm-end">
                  <span><a href="index-2.html">Home</a></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>Property List</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
{/* <!-- Property List breadcrumb area end -->


<!-- property list area start --> */}
<section className="crn-property-list-area pt-120 pb-120">
   <div className="container">
      <div className="row">
         <div className="col-lg-12">
            <div className="crn-property-title-wrapper text-center mb-60">
               <h3 className="crn-section-title">Your Dream Home Awaits</h3>
               <span>Sell/Rent</span>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-lg-4">
            <div className="crn-property-wrapper">
               <div className="crn-property-widget mb-30">
                  <div className="crn-property-widget-content">
                     <h3 className="crn-property-widget-title">Property Status</h3>
                     <div className="crn-property-widget-checkbox">
                        <ul>
                           <li>
                              <input id="on_rent" type="checkbox"/>
                              <label htmlFor="on_rent">htmlFor Rent</label>
                           </li>
                           <li>
                              <input id="in_sell" type="checkbox"/>
                              <label htmlFor="in_sell">htmlFor Sell</label>
                           </li>
                        </ul>
                        {/* <!-- .filter-items --> */}
                     </div>
                  </div>
               </div>

               <div className="crn-property-widget mb-30">
                  <div className="crn-property-widget-content">
                     <h3 className="crn-property-widget-title">Property Type</h3>
                     <div className="crn-property-widget-checkbox">
                        <ul>
                           <li>
                              <input id="homes" type="checkbox"/>
                              <label htmlFor="homes">Single-family homes</label>
                           </li>
                           <li>
                              <input id="condominiums" type="checkbox"/>
                              <label htmlFor="condominiums">Condominiums</label>
                           </li>
                           <li>
                              <input id="Townhouses" type="checkbox"/>
                              <label htmlFor="Townhouses">Townhouses</label>
                           </li>
                           <li>
                              <input id="Apartments" type="checkbox"/>
                              <label htmlFor="Apartments">Apartments</label>
                           </li>
                           <li>
                              <input id="Duplexes" type="checkbox"/>
                              <label htmlFor="Duplexes">Duplexes</label>
                           </li>
                           <li>
                              <input id="Mobile" type="checkbox"/>
                              <label htmlFor="Mobile">Mobile homes</label>
                           </li>
                           <li>
                              <input id="apartments" type="checkbox"/>
                              <label htmlFor="apartments">Co-operative apartments</label>
                           </li>
                           <li>
                              <input id="Commercial" type="checkbox"/>
                              <label htmlFor="Commercial">Commercial properties</label>
                           </li>
                        </ul>
                        {/* <!-- .filter-items --> */}
                     </div>
                  </div>
               </div>

               <div className="crn-property-widget mb-30">
                  <div className="crn-property-widget-content">
                     <h3 className="crn-property-widget-title">Property Range</h3>
                     <div className="crn-property-widget-filter mb-40">
                        <div
                           className="crn-property-widget-filter-info d-flex align-items-center justify-content-between">
                           <span className="input-range">
                              Price Range:
                              <input type="text" id="amount-offcanvas" readOnly/>
                           </span>
                        </div>
                        <div id="slider-range-offcanvas" className="mb-10"></div>
                     </div>

                     <div className="crn-property-widget-filter mb-40">
                        <div
                           className="crn-property-widget-filter-info d-flex align-items-center justify-content-between">
                           <span className="input-range">
                              Square footage:
                              <input type="text" id="amount-offcanvas-2" readOnly/>
                           </span>
                        </div>
                        <div id="slider-range-offcanvas-2" className="mb-10"></div>
                     </div>

                     <div className="crn-property-widget-filter mb-40">
                        <div
                           className="crn-property-widget-filter-info d-flex align-items-center justify-content-between">
                           <span className="input-range">
                              Bedrooms:
                              <input type="text" id="amount-offcanvas-3" readOnly/>
                           </span>
                        </div>
                        <div id="slider-range-offcanvas-3" className="mb-10"></div>
                     </div>

                     <div className="crn-property-widget-filter mb-40">
                        <div
                           className="crn-property-widget-filter-info d-flex align-items-center justify-content-between">
                           <span className="input-range">
                              Bathrooms:
                              <input type="text" id="amount-offcanvas-4" readOnly/>
                           </span>
                        </div>
                        <div id="slider-range-offcanvas-4" className="mb-10"></div>
                     </div>

                     <div className="crn-property-widget-filter">
                        <div
                           className="crn-property-widget-filter-info d-flex align-items-center justify-content-between">
                           <span className="input-range">
                              Lot size:
                              <input type="text" id="amount-offcanvas-5" readOnly/>
                           </span>
                        </div>
                        <div id="slider-range-offcanvas-5" className="mb-10"></div>
                     </div>
                  </div>
               </div>

               <div className="crn-property-widget mb-30">
                  <div className="crn-property-widget-content">
                     <h3 className="crn-property-widget-title">Others Features</h3>
                     <div className="crn-property-widget-search">
                        <form action="#">
                           <div className="crn-property-widget-search-input">
                              <input type="text" placeholder="Search"/>
                              <button type="submit"><i className="far fa-search"></i></button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-8">
            <div className="crn-property-wrapper">
                {data.map(element => (
               <div key={element.id} className="crn-property-thumb-wrapper mb-60">
                  <div className="crn-property-thumb p-relative">
                     <img src="assets/img/property/img-1.jpg" alt=""/>
                     <div className="crn-property-price">
                        <span>{element.price}$</span>
                     </div>
                  </div>
                  <div className="crn-property-content">
                     <div className="crn-property-content-inner">
                        <Link to={`/single_listing/${element.id}`} className="crn-property-title">{element.name}</Link>
                        <p>{element.description}</p>
                        <a href="#"><i className="fa-solid fa-location-dot"></i>{element.location}</a>
                        <div className="crn-property-content-list mb-25 d-flex">
                            {
                                element.rooms > 0 ? <p><i className="fa-solid fa-bed"></i> {element.rooms} Bed</p> 
                                : <p><i className="fa-solid fa-bed"></i> Self Contain</p>
                            }
                           <p><i className="fa-solid fa-ruler-combined"></i> 1,200 sqft</p>
                        </div>
                     </div>
                     <div className="crn-property-btn d-flex justify-content-between">
                     {
                                element.pairing === 'yes' ? <a href="#">Pairing: Yes</a>
                                : <p>Pairing:</p>
                            }
                        <Link to={`/area_listings/${element.major_area}`}>Major Area: {element.major_area}</Link>
                        <div className="crn-property-btn-share">
                           <a href="#"><span><i className="fa-regular fa-share-nodes"></i></span></a>
                           <a href="#"><span><i className="fa-regular fa-arrow-right"></i></span></a>
                        </div>
                     </div>
                  </div>
               </div>
                ))}
            </div>
         </div>
      </div>
   </div>
</section>
{/* <!-- property list area end --> */}

</main>  
            <Footer/>

        </div>
    )
}

export default AllListings