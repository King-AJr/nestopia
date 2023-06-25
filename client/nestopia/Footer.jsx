import headerLogo from '../images/header-logo.svg'

function Footer () {
    return (
    <div>
        {/* <!-- Footer Area --> */}
  <section className="footer-area pt-130 pb-100">
    <div className="container">
      <div className="footer-content-top pb-70">
        <a className="wow fadeInRight" href="index-2.html"><img src="assets/img/logo.png" alt="Logo" /></a>
        <div className="d-flex flex-wrap justify-content-xl-between justify-content-center wow fadeInRight"
          data-wow-delay="0.3s">
          <div className="d-flex footer-sub-menu my-xl-0 my-4">
            <a href="#" className="mr-20">Food & Drinks</a>
            <a href="#" className="mr-20">Hotels</a>
            <a href="#" className="mr-20">Shopping</a>
            <a href="#" className="mr-20">Beauty</a>
          </div>
          <div className="right-content">
            <div className="footer-search-form wow fadeInLeft">
              <p className="Subscribe-title mb-20">Subscribe</p>
              <form action="#">
                <div className="d-sm-flex justify-content-end footer-search">
                  <div>
                    <input type="text" className="form-control email-form" placeholder="Your email address" />
                  </div>
                  <button className="btn-Subscribe" type="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-30 footer-content d-flex flex-lg-row flex-column wow fadeInUp" data-wow-delay="0.5">
        <div className="footer-terms">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy</a>
          <a href="#">Feedbacks</a>
        </div>
        <div className="social-icon text-center">
          <a href="#"><i className="lab la-facebook-f"></i></a>
          <a href="#"><i className="lab la-twitter"></i></a>
          <a href="#"><i className="lab la-instagram"></i></a>
          <a href="#"><i className="lab la-linkedin-in"></i></a>
        </div>
        <div className="text-end">
          <p>Copyright © 2023 Spider-Themes</p>
        </div>
      </div>
    </div>
  </section>
  {/* <!-- Footer Area --> */}
    </div>
    )
}

export default Footer