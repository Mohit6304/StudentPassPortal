// src/components/Footer.js
import './Footer.css';

function Footer() {

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
            Welcome to StudentPassPro - your ultimate solution for managing student bus passes. We are dedicated to providing seamless transportation services to students. Our mission is to make the daily commute of students hassle-free, ensuring safe and convenient travel. 
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
        <h6>Categories</h6>
        <ul className="footer-links">
            <li><a href="/apply">Application</a></li>
            <li><a href="/renew">Renewal</a></li>
            <li><a href="/modify">Modify Details</a></li>
            <li><a href="/exclusive-pass">Exclusive Pass</a></li>
            <li><a href="/general-pass">General Pass</a></li>
        </ul>
        </div>


          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About Us</a></li>
                <li><a href="/contact-us">Contact Us</a></li>
                <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
        </div>

        </div>
        <hr className="small" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by 
              <a href="/"> StudentPassPro</a>.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
