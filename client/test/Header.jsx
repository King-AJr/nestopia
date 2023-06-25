import logo from '../img/logo.png'
import logo_black from '../img/logo-black.png'
import { Link } from 'react-router-dom'

 function Header () {
    return (
    <div>
        {/* <!-- Header Area --> */}
  <header className="header-area">
    <nav className="navbar navbar-expand-lg header-menu">
      <div className="container">
        <a className="navbar-brand sticky_logo" href="#">
          <img className="main" src={{logo}} alt="logo"/>
          <img className="sticky" src={{logo_black}} alt="logo"/>
        </a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="menu_toggle">
            <span className="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="hamburger-cross">
              <span></span>
              <span></span>
            </span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown active">
              <a className="nav-link active dropdown-toggle" href="#" role="button">
                Home
              </a>
              <i className="las la-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu nav-menu">
                <li>
                  <a className="dropdown-item active" href="index-2.html">Home One</a>
                </li>
                <li>
                  <a className="dropdown-item" href="index-3.html">Home Two</a>
                </li>
                <li>
                  <a className="dropdown-item" href="index-4.html">Home Three</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                Explore
              </a>
              <i className="las la-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu nav-menu">
                <li>
                  <a className="dropdown-item" href="price.html">Price plan</a>
                </li>
                <li>
                  <a className="dropdown-item" href="listing.html">Listing</a>
                </li>
                <li>
                  <Link className="dropdown-item" to="/add_listing">Add Listing</Link>
                </li>
                <li>
                  <a className="dropdown-item" href="listing-details.html">Listing Details</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown ">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                Pages
              </a>
              <i className="las la-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu nav-menu">
                <li>
                  <a className="dropdown-item" href="about.html">About Us</a>
                </li>
                <li>
                  <a className="dropdown-item" href="about-2.html">About US 02</a>
                </li>
                <li>
                  <a className="dropdown-item" href="faq.html">Faq</a>
                </li>
                <li>
                  <a className="dropdown-item" href="career.html">Career</a>
                </li>
                <li><a className="dropdown-item" href="jobs.html">Jobs</a></li>
                <li>
                  <a className="dropdown-item" href="job-details.html">Jobs Details</a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button">
                Blog
              </a>
              <i className="las la-angle-down mobile_dropdown_icon"></i>
              <ul className="dropdown-menu nav-menu">
                <li><a className="dropdown-item" href="blog.html">Blog</a></li>
                <li>
                  <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
          <div className="d-flex right-nav">
            <a className="btn btn-signin" href="#"><i className="lar la-user-circle"></i> Sign in</a>
            <Link className="dropdown-item" to="/add_listing">Add Listing</Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
  {/* <!-- Header Area --> */}
    </div>
    )
 }
 export default Header