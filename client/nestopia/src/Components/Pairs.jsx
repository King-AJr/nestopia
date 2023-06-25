import { Link, useParams } from "react-router-dom";
import Footer from "./Footer"
import Header from "./Header"
import axios from "axios";
import { useState, useEffect } from "react";

const Pairs = () => {
    const id = useParams()
    const [data, setData] = useState([]);

useEffect(() => {
    const fetchListing = async () => {
  axios.get(`http://127.0.0.1:5050/view_pairs?id=${id.id}`)
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

    return (
        <div>
             <div>
            <Header/>
            <section className="crn-service-area pt-120 pb-90" data-bg-color="#F8F8F8">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8">
                  <div className="crn-service-title-wrapper mb-60">
                     <span className="crn-section-title-pre">Our Service</span>
                     <h3 className="crn-section-title">Find your dream home <br /> with us</h3>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="crn-service-btn text-lg-end">
                     <a className="crn-btn" href="service-details.html">Discover More <span><i
                              className="fa-regular fa-plus"></i></span></a>
                  </div>
               </div>
            </div>
            <div className="row">
            {data.map(element => (
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".2s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="/assets/img/service/img-1.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="/assets/img/service/icon-1.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Chat with {element.name}</a></h3>
                        <p></p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
            ))}
            </div>
         </div>
      </section>
            <Footer/>

        </div>
        </div>
    )
}

export default Pairs