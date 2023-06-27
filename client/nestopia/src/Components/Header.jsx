import { Link } from "react-router-dom"
import useAuth from "../Hooks/useAuth";
import { useEffect } from "react";


const Header = () => {
   const {auth, setAuth} = useAuth();
    return (
        <div>
              <header className="crn-header-area crn-header-height p-relative">
      <div className="crn-header-top d-none d-xl-block">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-xxl-6 col-xl-8">
                  <div className="crn-header-top-info">
                     <ul>
                        <li>
                           <a href="mailto:info@example.com"><span><i
                                    className="fa-solid fa-envelope"></i></span>info@example.com</a>
                        </li>
                        <li>
                           <a href="https://www.google.com/maps/search/6391+Elgin+St,+Wilmington,+DE,+USA/@39.7298967,-75.5645038,13z/data=!3m1!4b1"
                              target="_blank"><span><i className="fa-sharp fa-solid fa-location-dot"></i></span>6391 Elgin
                              St. Celina, 10299</a>
                        </li>
                        <li>
                           <a href="tel:555-0129"><span><i className="fa-solid fa-phone"></i></span>(629) 555-0129</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="col-xxl-6 col-xl-4">
                  <div className="crn-header-top-right d-flex justify-content-end align-items-center">
                     <div className="header-social d-xl-block d-none">
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="header-sticky" className="crn-header-main header__sticky p-relative">
         <div className="container">
            <div className="crn-header-box">
               <div className="row align-items-center">
                  <div className="col-xl-2 col-6">
                     <div className="crn-header-main-left p-relative d-flex justify-content-xl-center">
                        <div className="crn-header-logo">
                           <a href="index-2.html">
                              <img src="/assets/img/logo/logo.png" alt=""/>
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-8 d-none d-xl-block">
                     <div className="crn-main-menu-area d-flex align-items-center justify-content-center">
                        <div className="crn-main-menu">
                           <nav className="crn-main-menu-content">
                              <ul>
                                 <li>
                                    <Link to="/">Home</Link>
                                 </li>
                                 <li className="has-dropdown"><Link to='/all_listings'>Listings</Link>
                                 <ul className="submenu">
                                       <li><Link to="/add_listing">Add listing</Link></li>
                                       <li><Link to="/all_listings">View listing</Link></li>
                                    </ul></li>
                                 <li><Link to={`/view_pairs/${auth?.user?.id}`}>Roomates</Link>
                                 </li>
                                 { 
                                 auth?.user ? <li ><Link to="/signin">{auth?.user?.name}</Link> </li>
                                                   : <li ><Link to="/signin">Sign In</Link> </li>
                                 }
                                 <li><a href="contact.html">Contact</a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-6">
                     <div className="crn-header-main-right d-flex align-items-center justify-content-end">
                        <div className="crn-header-contact d-none d-xl-block z-index-1">
                           <div className="crn-header-contact-search search-open-btn d-none d-xxl-block">
                              <span><i className="fa-solid fa-magnifying-glass"></i></span>
                           </div>
                        </div>
                        {/* <div className="crn-header-hamburger-btn offcanvas-open-btn">
                           <button className="hamburger-btn">
                              <span></span>
                              <span></span>
                           </button>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>
        </div>
    )
}

export default  Header