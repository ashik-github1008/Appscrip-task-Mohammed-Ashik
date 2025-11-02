import "./Footer.css";
import usFlag from "../images/us-flag.svg";
import starIcon from "../images/star-icon.svg";
import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/linkedin.svg";
import { ReactComponent as Cards } from "../images/cards.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-newsletter">
        <div className="newsletter-content">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="newsletter-form">
            <input
              className="enter-email"
              type="email"
              placeholder="Enter your e-mail..."
            />
            <button className="subs-btn">SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-contact">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h3 className="currency-title">CURRENCY</h3>
          <div className="currency-selector">
            <span className="flag">
              <img src={usFlag} alt="country-flag" />
            </span>
            <span className="">
              <img src={starIcon} alt="star" />
            </span>
            <span>USD</span>
          </div>
          <p className="currency-note">
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>

      <div className="footer-main">
        <div className="footer-column">
          <h4 className="footer-column-meta-muse">mettā muse</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#stories">Stories</a>
            </li>
            <li>
              <a href="#artisans">Artisans</a>
            </li>
            <li>
              <a href="#boutiques">Boutiques</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#eu">EU Compliances Docs</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>
              <a href="#orders">Orders & Shipping</a>
            </li>
            <li>
              <a href="#seller">Join/Login as a Seller</a>
            </li>
            <li>
              <a href="#payment">Payment & Pricing</a>
            </li>
            <li>
              <a href="#returns">Return & Refunds</a>
            </li>
            <li>
              <a href="#faqs">FAQs</a>
            </li>
            <li>
              <a href="#privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FOLLOW US</h4>
          <div className="social-icons">
            <a href="#instagram" aria-label="Instagram">
              <img src={instagramIcon} alt="insta" />
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="linkedin" />
            </a>
          </div>

          <h4 className="accepts-title footer-column-meta-muse">
            mettā muse ACCEPTS
          </h4>
          <div className="payment-methods">
            <Cards />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
