import Footer from "./Footer"
import Header from "./Header"


const LandingPage = () => {
    return (
        <div>
            <Header/>
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
                        <h2 className="crn-hero-title">Find your perfect nest <br /> embrace the <br />student life</h2>
                        <p>And In Order To Make A Business, Brand Advertising And Marketing Plays <br /> An Important
                           Role. Similarly, In Making Cultivation Business A Brand, <br /> Good Slogans Are Necessary.</p>
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
                        <h3 className="crn-section-title">Discover your new home away from home</h3>
                        <p>Aliquam eros justo, posuere lobort, viverra laoreet augue mattii fermentum non ullamcorper
                           viverra laoreet augue. posuere lobortis ,viverra</p>
                     </div>
                     <div className="crn-about-wrapper-list">
                     </div>
                     <div className="crn-about-point d-flex">
                        <div className="crn-about-point-inner d-flex">
                           <div className="crn-about-point-icon">
                              <span><img src="assets/img/about/icon-1.svg" alt=""/></span>
                           </div>
                           <div className="crn-about-point-content">
                              <h4 className="crn-about-point-title">Good Roomates</h4>
                              <p>Find Room mates that same values with you</p>
                           </div>
                        </div>
                        <div className="crn-about-point-inner d-flex">
                           <div className="crn-about-point-icon">
                              <span><img src="assets/img/about/icon-2.svg" alt=""/></span>
                           </div>
                           <div className="crn-about-point-content">
                              <h4 className="crn-about-point-title">Home Scope</h4>
                              <p>Find affordable accomodation around school</p>
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
                     <span className="crn-section-title-pre">Using a great Algorithm</span>
                     <h3 className="crn-section-title">Get paired with interesting  <br />room mates</h3>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".2s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/team/img-1.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Key Match</a></h3>
                        <p>It is a long established fact that a reader will be distracted</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".3s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/team/img-3.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">Ideal Friends</a></h3>
                        <p>Lorem Ipsum i simply dummy text of the printing and types</p>
                     </div>
                  </div>
               </div>
               <div className="col-lg-4 col-md-6">
                  <div className="crn-service-item p-relative mb-30 wow fadeInUp" data-wow-duration="1s"
                     data-wow-delay=".5s">
                     <div className="crn-service-item-thumb">
                        <a href="service-details.html"><img src="assets/img/team/img-2.jpg" alt=""/></a>
                     </div>
                     <div className="crn-service-item-content">
                        <h3 className="crn-service-title"><a href="service-details.html">same Values</a></h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- service area end -->


      <!-- portfolio area start --> */}
      {/* <!-- portfolio area end -->



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
                     <p>Nestopia is a platform designed to simplify the process of finding student housing and 
                        compatible roommates. Users can create a profile, search for housing listings based on 
                        their preferences, and communicate directly with listing owners. Nestopia also offers a 
                        unique roommate matching feature, helping users find roommates with similar interests and lifestyles. 
                        The platform allows students publish listings requesting for room mates. With a user-friendly 
                        interface and personalized recommendations, Nestopia 
                        aims to provide a seamless and efficient experience for students looking for housing and roommates.</p>
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
            <Footer/>
        </div>
    )
}

export default LandingPage