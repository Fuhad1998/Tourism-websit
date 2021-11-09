import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const { name, img, detele1, detele, id } = props.services;
  return (
    <div className="card-group col-12 col-md-3 g-4 p-2">
      <div className="card">
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-text">{detele1}</h5>
          <h5 className="card-text">{detele}</h5>
          <button className="btn-section">
            <Link className="btn-link" to={`/orderPlace/${id}`}>
              Book Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
