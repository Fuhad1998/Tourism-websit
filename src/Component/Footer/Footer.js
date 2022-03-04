import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="footer-container text-light p-5 bg-dark row ">

        <div className="col-12 col-sm-12 col-md-4">
          <h2>Latest Tweets.</h2>
          <p>@simonrichwright Here’s an article to get you started with using our support platform: https://t.co/eiUoQNlHUh Let… https://t.co/PhSMKT4Rph</p>
          <p>@alexherder hi @alexherder, we can’t recommend anyone specific, but you can find a list of freelenacers working wit… https://t.co/fs1gMcMOej</p>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <h2>See More Details</h2>
          <h2><i className="fab fa-facebook text-primary"> </i> Facebook</h2>
          <h2><i className="fab fa-twitter text-primary"> </i> Twitter</h2>
          <h2><i className="fab fa-youtube text-danger"> </i> Youtube</h2>
        </div>

        <div className="col-12 col-sm-12 col-md-4">
          <h1>About us</h1>
          <p>You can now take an exciting sea trip, which has given tourism on St. Martin's Island a whole new dimension. To us, every moment of your trip to Saint Martin by bay one cruise is priceless. That is why, we care from the moment you buy your ticket to the time you return</p>
          <h6> <i className="fas fa-phone"></i> 01715497198</h6>
          <h6> <i className="fas fa-envelope"></i> fuwadrare444@gmail.com</h6>
          <h6> <i className="fas fa-map-marker-alt">  184 Main uttra Street</i></h6>

        </div>
   
      </div>
      <div >
      <p className="text-light bg-dark p-2"><i className="  fas fa-copyright mb-2 "></i> Copy right 2021 By Fuwad Hossian</p>
      </div>
      
    </div>
    
  );
};

export default Footer;
