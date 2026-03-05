import React from "react";
import "./footer.css";
// import Hooks
import { useGetFlag, useGetFlagVariable, useGetFlagVariables } from 'vwo-fme-react-sdk';

const options = {
  accountId: '1069944',
  sdkKey: 'cd911fff4deab44325692a12aa5c564e'
};
const userContext = {
  id: '100'
};


const Footer = () => {
  const { flag, isReady } = useGetFlag('key123', userContext);
  if (!flag?.isEnabled()) {
    
    // To get value of a single variable
const variable1 = useGetFlagVariable(flag, "defaulttext", "Try out our products");

// To get value of all variables as a list
const variables = useGetFlagVariables(flag);
    return (    
      <footer className="footer-container">
        <div className="app-store-play">
          <h1>Md. Arshad</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, quia
            eius est sunt consectetur rem possimus officia minima reiciendis
            perspiciatis! Soluta corrupti nesciunt suscipit repellendus adipisci
            reiciendis veritatis, accusantium saepe?
          </p>
          <div className="icon-footer appstore">
            <div className="img d_flex logo-text">
              <i className="fa-brands fa-google-play"></i>
              <span>Google Play Store</span>
            </div>
            <div className="img d_flex logo-text">
              <i className="fa-brands fa-app-store-ios"></i>
              <span>Apple App Store</span>
            </div>
          </div>
        </div>
        <div className="">
          <h2>{variable1}</h2>
          <ul>
            <li>Careers</li>
            <li>Our Stories</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="">
          <h2>Customer Care</h2>
          <ul>
            <li>Help Center</li>
            <li>How To Buy</li>
            <li>Track Your Order</li>
            <li>Corporate & Bulk Purchasing</li>
            <li>Returns & Refunds</li>
          </ul>
        </div>
        <div className="">
          <h2>Contact Us</h2>
          <ul>
            <li>12/2 Shat Masjid Road, Dhanmondi, Dhaka</li>
            <li className="contact-info-flex">
              Email :
              <a
                target="_blank"
                href="mailto:arshadchowdhury46@gmail.com"
                className="icon-flex phone-icon"
              >
                arshadchowdhury46@gmail.com
              </a>
            </li>
            <li className="contact-info-flex">
              Phone :{" "}
              <a
                target="_blank"
                href="https://api.whatsapp.com/send?phone=8801317089432"
                className="icon-flex phone-icon"
              >
                +8801317089432
              </a>
            </li>
          </ul>
        </div>
      </footer>
    );
  };


  }
  

export default Footer;
