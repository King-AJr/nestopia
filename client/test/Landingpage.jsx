import Header from "./Header"
import Footer from "./Footer"


const LandingPage = () => {
    return (
        <div>
            {/* <Header/> */}
            <main>

      {/* <!-- hero area start --> */}
      <section className="crn-hero-area p-relative pt-110 pb-70 crn-hero-transform" style={{backgroundColor: "#F8F8F8"}}>
         <div className="crn-hero-bg" style={{ backgroundImage: `url(assets/img/hero/hero-bg.png)`}}></div>
         <div className="crn-hero-bg-shape">
            <img className="shape-1" src="assets/img/hero/hero-bg-2.png" alt=""/>
            <img className="shape-2" src="assets/img/hero/shape-1.png" alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="crn-hero-content p-relative wow fadeInUp pb-170" style={{ animationDuration: '1s' }}
                     data-wow-delay=".3s">
                     <div className="crn-hero-title-wrapper">
                        <span className="crn-hero-subtitle">Be SaFe</span>
                        <h2 className="crn-hero-title">Your dream home is <br /> our top priority</h2>
                        <p>And In Order To Make A Business, Brand Advertising And Marketing Plays <br /> An Important
                           Role. Similarly, In Making Cultivation Business A Brand, <br /> Good Slogans Are Necessary.</p>
                        <div className="crn-hero-btn mr-30">
                           <a className="crn-btn" href="about.html">Discover More <span><i
                                    className="fa-regular fa-plus"></i></span></a>
                        </div>
                     </div>
                  </div>
                  <div className="crn-hero-tab p-relative">
                     <div className="row justify-content-center">
                        <div className="col-lg-9">
                           <nav>
                              <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                 <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                    aria-selected="true">Rent</button>
                                 <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                                    aria-selected="false">Buy</button>
                                 <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                    data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                                    aria-selected="false">Sell</button>
                              </div>
                           </nav>
                           <div className="tab-content" id="nav-tabContent">
                              <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                 aria-labelledby="nav-home-tab">
                                 <div className="crn-hero-tab-box d-flex">
                                    <div className="crn-hero-tab-item d-flex align-items-end">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Location</h4>
                                          <input type="text" placeholder="Select Your City"/>
                                       </div>
                                       <div className="crn-hero-tab-icon">
                                          <span><i className="fa-light fa-location-dot"></i></span>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-item d-flex align-items-end">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Property Type</h4>
                                          <select className="wide">
                                             <option>Choose Property Type</option>
                                             <option value="Residential">Residential</option>
                                             <option value="Commercial">Commercial</option>
                                             <option value="Apartment">Apartment</option>
                                             <option value="Office Space">Office Space</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-item d-flex ">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Price Range</h4>
                                          <input type="text" placeholder="Choose Price Range"/>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-search d-flex align-items-center">
                                       <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                 aria-labelledby="nav-profile-tab">
                                 <div className="crn-hero-tab-box d-flex">
                                    <div className="crn-hero-tab-item d-flex align-items-end">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Location</h4>
                                          <input type="text" placeholder="Select Your City"/>
                                       </div>
                                       <div className="crn-hero-tab-icon">
                                          <span><i className="fa-light fa-location-dot"></i></span>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-item d-flex align-items-end">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Property Type</h4>
                                          <select className="wide">
                                             <option>Choose Property Type</option>
                                             <option value="Residential">Residential</option>
                                             <option value="Commercial">Commercial</option>
                                             <option value="Apartment">Apartment</option>
                                             <option value="Office Space">Office Space</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-item d-flex ">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Price Range</h4>
                                          <input type="text" placeholder="Choose Price Range"/>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-search d-flex align-items-center">
                                       <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                 </div>
                              </div>
                              <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                 aria-labelledby="nav-contact-tab">
                                 <div className="crn-hero-tab-box d-flex">
                                    <div className="crn-hero-tab-item d-flex align-items-end">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Location</h4>
                                          <input type="text" placeholder="Select Your City"/>
                                       </div>
                                       <div className="crn-hero-tab-icon">
                                          <span><i className="fa-light fa-location-dot"></i></span>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-item d-flex align-items-end">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Property Type</h4>
                                          <select className="wide">
                                             <option>Choose Property Type</option>
                                             <option value="Residential">Residential</option>
                                             <option value="Commercial">Commercial</option>
                                             <option value="Apartment">Apartment</option>
                                             <option value="Office Space">Office Space</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-item d-flex ">
                                       <div className="crn-hero-tab-content">
                                          <h4 className="crn-hero-tab-title">Price Range</h4>
                                          <input type="text" placeholder="Choose Price Range"/>
                                       </div>
                                    </div>
                                    <div className="crn-hero-tab-search d-flex align-items-center">
                                       <span><i className="fa-solid fa-magnifying-glass"></i></span>
                                    </div>
                                 </div>
                              </div>
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- hero area end -->


      <!-- about area start --> */}
      <section className="crn-about-area p-relative pt-40 pb-120">
         <div className="crn-about-shape">
            <img src="assets/img/about/shape-1.jpg" alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="crn-about-thumb-wrapper d-flex justify-content-lg-center">
                     <img src="assets/img/about/img-1.jpg" alt=""/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="crn-about-wrapper wow fadeInRight" data-wow-duration="1s" data-wow-delay=".3s">
                     <div className="crn-about-title-wrapper">
                        <span className="crn-section-title-pre">About Company</span>
                        <h3 className="crn-section-title">We help you build on <br /> your past</h3>
                        <p>Aliquam eros justo, posuere lobort, viverra laoreet augue mattii fermentum non ullamcorper
                           viverra laoreet augue. posuere lobortis ,viverra</p>
                     </div>
                     <div className="crn-about-wrapper-list">
                        <ul>
                           <li><span><i className="fa-regular fa-check"></i></span> Opening doors to your future</li>
                           <li><span><i className="fa-regular fa-check"></i></span> Experience the difference</li>
                           <li><span><i className="fa-regular fa-check"></i></span> Your Startup industry mattis</li>
                           <li><span><i className="fa-regular fa-check"></i></span> Startup industry stan mattis</li>
                        </ul>
                     </div>
                     <div className="crn-about-point d-flex">
                        <div className="crn-about-point-inner d-flex">
                           <div className="crn-about-point-icon">
                              <span><img src="assets/img/about/icon-1.svg" alt=""/></span>
                           </div>
                           <div className="crn-about-point-content">
                              <h4 className="crn-about-point-title">Home Scope</h4>
                              <p>Construction Service</p>
                           </div>
                        </div>
                        <div className="crn-about-point-inner d-flex">
                           <div className="crn-about-point-icon">
                              <span><img src="assets/img/about/icon-2.svg" alt=""/></span>
                           </div>
                           <div className="crn-about-point-content">
                              <h4 className="crn-about-point-title">Place Perfect</h4>
                              <p>Architecture Service</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- about area end -->


      <!-- house listing area start --> */}
      <section className="crn-house-listing-area pb-120">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-8">
                  <div className="crn-house-listing-title-wrapper mb-60">
                     <span className="crn-section-title-pre">Pricing Action</span>
                     <h3 className="crn-section-title">Let us help you find the perfect <br /> place to call home</h3>
                  </div>
               </div>
               <div className="col-lg-4">
                  <div className="crn-house-listing-btn text-lg-end">
                     <a className="crn-btn" href="service.html">Load More <span><i
                              className="fa-regular fa-plus"></i></span></a>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".3s">
                              <div className="crn-house-listing-item p-relative">
                                 <div className="crn-house-listing-thumb">
                                    <img src="assets/img/house-listing/img-1.jpg" alt=""/>
                                 </div>
                                 <div className="crn-house-listing-rent">
                                    <span>For Rent</span>
                                 </div>
                                 <div className="crn-house-listing-content">
                                    <div className="crn-house-listing-content-price mb-20 d-flex justify-content-between">
                                       <a href="#">Family</a>
                                       <p>990$</p>
                                    </div>
                                    <div className="crn-house-listing-content-feature mb-20 d-flex justify-content-between">
                                       <p><i className="fa-solid fa-bed"></i> 4 Bed</p>
                                       <p><i className="fa-solid fa-bath"></i> 3 Bath</p>
                                       <p><i className="fa-solid fa-ruler-combined"></i> 1,200 sqft</p>
                                    </div>
                                    <h4 className="crn-house-listing-title">The key to your new home</h4>
                                    <div className="crn-house-listing-content-reaction d-flex justify-content-between">
                                       <p><i className="fa-solid fa-location-dot"></i> 1901 Thornridge</p>
                                       <div className="crn-house-listing-content-reaction-react d-flex">
                                          <a className="react" href="#"><span><i className="fa-light fa-heart"></i></span></a>
                                          <a href="#"><span><i className="fa-regular fa-arrow-right-long"></i></span></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                                    data-wow-delay=".3s">
                              <div className="crn-house-listing-item p-relative">
                                 <div className="crn-house-listing-thumb">
                                    <img src="assets/img/house-listing/img-2.jpg" alt=""/>
                                 </div>
                                 <div className="crn-house-listing-rent">
                                    <span>For Rent</span>
                                 </div>
                                 <div className="crn-house-listing-content">
                                    <div className="crn-house-listing-content-price mb-20 d-flex justify-content-between">
                                       <a href="#">Family</a>
                                       <p>23,000$</p>
                                    </div>
                                    <div className="crn-house-listing-content-feature mb-20 d-flex justify-content-between">
                                       <p><i className="fa-solid fa-bed"></i> 4 Bed</p>
                                       <p><i className="fa-solid fa-bath"></i> 3 Bath</p>
                                       <p><i className="fa-solid fa-ruler-combined"></i> 1,200 sqft</p>
                                    </div>
                                    <h4 className="crn-house-listing-title">We help you find the key</h4>
                                    <div className="crn-house-listing-content-reaction d-flex justify-content-between">
                                       <p><i className="fa-solid fa-location-dot"></i> 4517 Washington</p>
                                       <div className="crn-house-listing-content-reaction-react d-flex">
                                          <a className="react" href="#"><span><i className="fa-light fa-heart"></i></span></a>
                                          <a href="#"><span><i className="fa-regular fa-arrow-right-long"></i></span></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                </div>
                <div className="col-lg-4 col-md-6">
                                <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s">
                              <div className="crn-house-listing-item p-relative">
                                 <div className="crn-house-listing-thumb">
                                    <img src="assets/img/house-listing/img-3.jpg" alt=""/>
                                 </div>
                                 <div className="crn-house-listing-rent">
                                    <span>For Rent</span>
                                 </div>
                                 <div className="crn-house-listing-content">
                                    <div className="crn-house-listing-content-price mb-20 d-flex justify-content-between">
                                       <a href="#">Family</a>
                                       <p>1630$</p>
                                    </div>
                                    <div className="crn-house-listing-content-feature mb-20 d-flex justify-content-between">
                                       <p><i className="fa-solid fa-bed"></i> 4 Bed</p>
                                       <p><i className="fa-solid fa-bath"></i> 3 Bath</p>
                                       <p><i className="fa-solid fa-ruler-combined"></i> 1,200 sqft</p>
                                    </div>
                                    <h4 className="crn-house-listing-title">Discover your new home sweet home</h4>
                                    <div className="crn-house-listing-content-reaction d-flex justify-content-between">
                                       <p><i className="fa-solid fa-location-dot"></i> 2972 Westheimer</p>
                                       <div className="crn-house-listing-content-reaction-react d-flex">
                                          <a className="react" href="#"><span><i className="fa-light fa-heart"></i></span></a>
                                          <a href="#"><span><i className="fa-regular fa-arrow-right-long"></i></span></a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              </div>
                    </div>
                    </div>

         </div>
      </section>
      {/* <!-- house listing area end -->


      <!-- service area start --> */}
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
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".2s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/service/img-1.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="assets/img/service/icon-1.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Key Match</a></h3>
                        <p>It is a long established fact that a reader will be distracted</p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".3s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/service/img-2.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="assets/img/service/icon-2.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Home Finders</a></h3>
                        <p>Lorem Ipsum i simply dummy text of the printing and types</p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".5s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/service/img-3.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="assets/img/service/icon-3.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Dream Space</a></h3>
                        <p>It is a long established fact that a reader will be distracted</p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".2s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/service/img-4.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="assets/img/service/icon-4.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Place Perfect</a></h3>
                        <p>Lorem Ipsum isimply dummy text of the printing and types</p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".3s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/service/img-5.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="assets/img/service/icon-5.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Home Vision</a></h3>
                        <p>It is a long established fact that a reader will be distracted</p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".5s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/service/img-6.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-icon">
                        <span>
                           <img src="assets/img/service/icon-6.png" alt=""/>
                        </span>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Move Mate</a></h3>
                        <p>Aliquam eros just posuere loborti viverra laoreet what</p>
                        <a className="btn" href="service-details.html"><span><i
                                 className="fa-regular fa-arrow-right"></i></span></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- service area end -->


      <!-- portfolio area start --> */}
      {/* <!-- portfolio area end -->



      <!-- team counter area box start --> */}
      <div className="crn-team-counter-box p-relative" data-background="assets/img/team/bg.jpg">
         <div className="crn-team-counter-overlay"></div>
         {/* <!-- team area start --> */}
         <section className="crn-team-area pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     <div className="crn-team-title-wrapper mb-60">
                        <span className="crn-section-title-pre">Connected Partners</span>
                        <h3 className="crn-section-title">Making your real estate <br /> dreams a reality</h3>
                     </div>
                  </div>
                  <div className="col-lg-4">
                     <div className="crn-team-nav text-end p-relative">
                        <button type="button" className="team-button-prev-1"><i
                              className="fa-regular fa-arrow-left"></i></button>
                        <button type="button" className="team-button-next-1"><i
                              className="fa-regular fa-arrow-right"></i></button>
                     </div>
                  </div>
               </div>
               <div className="row">
                  <div className="crn-team-slider-wrapper">
                     <div className="crn-team-active swiper-container">
                        <div className="swiper-wrapper mb-30">
                           <div className="swiper-slide">
                              <div className="crn-team-item p-relative">
                                 <div className="crn-team-thumb">
                                    <a href="https://creationic.com/"><img src="assets/img/team/img-1.jpg" alt=""/></a>
                                    <div className="crn-team-social">
                                       <a className="icon-1" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                       <a className="icon-2" href="#"><i className="fa-brands fa-instagram"></i></a>
                                       <a className="icon-3" href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="crn-team-icon">
                                       <span><i className="fa-regular fa-share-nodes"></i></span>
                                    </div>
                                 </div>
                                 <div className="crn-team-content">
                                    <h4 className="crn-team-title"><a href="https://creationic.com/">Arlene McCoy</a></h4>
                                    <p>IT Department</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="crn-team-item p-relative">
                                 <div className="crn-team-thumb">
                                    <a href="https://creationic.com/"><img src="assets/img/team/img-2.jpg" alt=""/></a>
                                    <div className="crn-team-social">
                                       <a className="icon-1" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                       <a className="icon-2" href="#"><i className="fa-brands fa-instagram"></i></a>
                                       <a className="icon-3" href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="crn-team-icon">
                                       <span><i className="fa-regular fa-share-nodes"></i></span>
                                    </div>
                                 </div>
                                 <div className="crn-team-content">
                                    <h4 className="crn-team-title"><a href="https://creationic.com/">Eleanor Pena</a></h4>
                                    <p>Graphics</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="crn-team-item p-relative">
                                 <div className="crn-team-thumb">
                                    <a href="https://creationic.com/"><img src="assets/img/team/img-3.jpg" alt=""/></a>
                                    <div className="crn-team-social">
                                       <a className="icon-1" href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                       <a className="icon-2" href="#"><i className="fa-brands fa-instagram"></i></a>
                                       <a className="icon-3" href="#"><i className="fa-brands fa-twitter"></i></a>
                                    </div>
                                    <div className="crn-team-icon">
                                       <span><i className="fa-regular fa-share-nodes"></i></span>
                                    </div>
                                 </div>
                                 <div className="crn-team-content">
                                    <h4 className="crn-team-title"><a href="https://creationic.com/">Mutlen sek</a></h4>
                                    <p>Designer</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- team area end -->


         <!-- counter area start --> */}
         <section className="crn-counter-area pb-120">
            <div className="container">
               <div className="crn-counter-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                  <div className="row">
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="crn-counter-item d-flex mb-30">
                           <div className="crn-counter-item-icon">
                              <span>
                                 <img src="assets/img/counter/icon-1.svg" alt=""/>
                              </span>
                           </div>
                           <div className="crn-counter-item-content">
                              <h4 className="crn-counter-title"><span className="purecounter" data-purecounter-duration="4"
                                    data-purecounter-end="200"></span>+</h4>
                              <p>Team member</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="crn-counter-item d-flex justify-content-center mb-30">
                           <div className="crn-counter-item-icon">
                              <span>
                                 <img src="assets/img/counter/icon-2.svg" alt=""/>
                              </span>
                           </div>
                           <div className="crn-counter-item-content">
                              <h4 className="crn-counter-title"><span className="purecounter" data-purecounter-duration="4"
                                    data-purecounter-end="450"></span>+</h4>
                              <p>Total Project</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="crn-counter-item d-flex justify-content-center mb-30">
                           <div className="crn-counter-item-icon">
                              <span>
                                 <img src="assets/img/counter/icon-3.svg" alt=""/>
                              </span>
                           </div>
                           <div className="crn-counter-item-content">
                              <h4 className="crn-counter-title"><span className="purecounter" data-purecounter-duration="4"
                                    data-purecounter-end="400"></span>+</h4>
                              <p>Setishfacfied</p>
                           </div>
                        </div>
                     </div>
                     <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="crn-counter-item d-flex justify-content-center mb-30">
                           <div className="crn-counter-item-icon">
                              <span>
                                 <img src="assets/img/counter/icon-4.svg" alt=""/>
                              </span>
                           </div>
                           <div className="crn-counter-item-content">
                              <h4 className="crn-counter-title"><span className="purecounter" data-purecounter-duration="4"
                                    data-purecounter-end="100"></span>+</h4>
                              <p>Total Award</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* <!-- counter area end --> */}
      </div>
      {/* <!-- team counter area box end --> */}


{/* 
      <!-- faq area start --> */}
      {/* <!-- faq area end -->


      <!-- package area start --> */}
      {/* <!-- package area end -->



      <!-- contact area start --> */}
      <section className="crn-contact-area p-relative pb-120">
         <div className="crn-contact-shape">
            <img src="assets/img/contact/bg.png" alt=""/>
         </div>
         <div className="container">
            <div className="row">
               <div className="col-lg-6">
                  <div className="crn-contact-thumb-wrapper p-relative text-center wow fadeInLeft" data-wow-duration="1s"
                     data-wow-delay=".3s">
                     <img src="assets/img/contact/img-1.jpg" alt=""/>
                     <img className="shape-1" src="assets/img/contact/icon-1.png" alt=""/>
                     <img className="shape-2" src="assets/img/contact/icon-2.png" alt=""/>
                  </div>
               </div>
               <div className="col-lg-6">
                  <div className="crn-contact-title-wrapper mb-55">
                     <span className="crn-section-title-pre">talk to us</span>
                     <h3 className="crn-section-title">Creating spaces where life happens</h3>
                  </div>
                  <div className="crn-contact-form">
                     <form id="contact-form" action="https://creationic.com/html/realnest/assets/mail.php" method="POST">
                        <div className="row">
                           <div className="col-md-6">
                              <div className="contact-input">
                                 <input name="name" type="text" placeholder="First Name"/>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="contact-input">
                                 <input name="l_name" type="text" placeholder="Last Name"/>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="contact-input">
                                 <input name="phone" type="text" placeholder="Phone Number"/>
                              </div>
                           </div>
                           <div className="col-md-6">
                              <div className="contact-input">
                                 <input name="email" type="email" placeholder="E-mail"/>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <div className="contact-input">
                                 <textarea name="message" placeholder="Comment"></textarea>
                              </div>
                           </div>
                           <div className="col-md-12">
                              <p>We don’t sell your email and spam</p>
                              <div className="contact__btn">
                                 <button type="submit" className="crn-btn">Submit Here</button>
                              </div>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- contact area end -->



      <!-- testimonial area start --> */}
      <section className="crn-testimonial-area p-relative pt-120 pb-120"
         data-background="assets/img/testimonial/shape-bg.png">
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="crn-testimonial-title-wrapper p-relative text-center mb-60">
                     <span className="crn-section-title-pre">CUSTOMER TESTIMONIAL</span>
                     <h3 className="crn-section-title">What do people say about us?</h3>
                  </div>
               </div>
               <div className="col-lg-12">
                  <div className="crn-testimonial-slider-wrapper wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                     <div className="crn-testimonial-active swiper-container">
                        <div className="swiper-wrapper">
                           <div className="swiper-slide">
                              <div className="crn-testimonial-item mb-30">
                                 <div className="crn-testimonial-content">
                                    <div
                                       className="crn-testimonial-rating d-flex align-items-center justify-content-between">
                                       <img src="assets/img/testimonial/quote.png" alt=""/>
                                       <div className="crn-testimonial-rating-inner">
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                       </div>
                                    </div>
                                    <div className="crn-testimonial-user-wrapper d-flex align-items-center">
                                       <div className="crn-testimonial-user-thumb">
                                          <img src="assets/img/testimonial/user-1.png" alt=""/>
                                       </div>
                                       <div className="crn-testimonial-user-content">
                                          <h4 className="crn-testimonial-user-title">Devon Lane</h4>
                                          <p>President of Sales</p>
                                       </div>
                                    </div>
                                    <h3 className="crn-testimonial-title">Dream house isn’t dream anymore</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nun duis
                                       convallis. Viverra erat egestas cras dapibus.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="crn-testimonial-item mb-30">
                                 <div className="crn-testimonial-content">
                                    <div
                                       className="crn-testimonial-rating d-flex align-items-center justify-content-between">
                                       <img src="assets/img/testimonial/quote.png" alt=""/>
                                       <div className="crn-testimonial-rating-inner">
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                       </div>
                                    </div>
                                    <div className="crn-testimonial-user-wrapper d-flex align-items-center">
                                       <div className="crn-testimonial-user-thumb">
                                          <img src="assets/img/testimonial/user-2.png" alt=""/>
                                       </div>
                                       <div className="crn-testimonial-user-content">
                                          <h4 className="crn-testimonial-user-title">Darrell Steward</h4>
                                          <p>Medical Assistant</p>
                                       </div>
                                    </div>
                                    <h3 className="crn-testimonial-title">Transforming Our Construction Experience</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nun duis
                                       convallis. Viverra erat egestas cras dapibus.</p>
                                 </div>
                              </div>
                           </div>
                           <div className="swiper-slide">
                              <div className="crn-testimonial-item mb-30">
                                 <div className="crn-testimonial-content">
                                    <div
                                       className="crn-testimonial-rating d-flex align-items-center justify-content-between">
                                       <img src="assets/img/testimonial/quote.png" alt=""/>
                                       <div className="crn-testimonial-rating-inner">
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                          <span><i className="fa-solid fa-star"></i></span>
                                       </div>
                                    </div>
                                    <div className="crn-testimonial-user-wrapper d-flex align-items-center">
                                       <div className="crn-testimonial-user-thumb">
                                          <img src="assets/img/testimonial/user-3.png" alt=""/>
                                       </div>
                                       <div className="crn-testimonial-user-content">
                                          <h4 className="crn-testimonial-user-title">Savannah Nguyen</h4>
                                          <p>Nursing Assistant</p>
                                       </div>
                                    </div>
                                    <h3 className="crn-testimonial-title">We had a complex commercial construction project
                                    </h3>
                                    <p>Lorem ipsum dolor sit amet consectetur. Ante quis pellentesque nun duis
                                       convallis. Viverra erat egestas cras dapibus.</p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="crn-scrollbar-3"></div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- testimonial area end -->



      <!-- blog area start --> */}
      {/* <!-- blog area end -->



      <!-- cta area start --> */}
      <section className="crn-cta-area pt-80 pb-80" data-bg-color="#F8F8F8">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-8">
                  <div className="crn-cta-title-wrapper p-relative text-center mb-45">
                     <span className="crn-section-title-pre">get our newsletter</span>
                     <h3 className="crn-section-title">Get News & Update to Your Inbox</h3>
                  </div>
                  <div className="crn-cta-input text-end p-relative">
                     <input type="text" placeholder="Enter Your Email address"/>
                     <button>Subscribe</button>
                  </div>
                  <div className="crn-cta-text text-center">
                     <p>Will be used accordance with our <a href="#">Privacy Policy</a></p>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- cta area end --> */}
            </main>
            {/* <Footer/> */}
        </div>
    )
}

export default LandingPage