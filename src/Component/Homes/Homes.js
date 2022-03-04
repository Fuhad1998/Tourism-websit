import React, { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Home from "../Home/Home";
import Schedule from "../Schedule/Schedule";




const Homes = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch(`https://young-plateau-63014.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="">
      <Banner></Banner>
      <div className="container">
      <div className="row">
      <h1>Our <span className="text-primary">Services</span></h1>
        {services.map((services) => (
          <Home key={services.id} services={services}></Home>
        ))}
      </div>
      </div>
      <Gallery></Gallery>
      <Schedule></Schedule>
     
    </div>
  );
};

export default Homes;
