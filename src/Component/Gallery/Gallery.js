import React from "react";
import gallery1 from "../../images/banner/bo-02.jpg";
import gallery2 from "../../images/banner/bo.jpg";
import gallery3 from "../../images/banner/gallery-02.jpg";
import gallery4 from "../../images/banner/gallery-04.jpg";
import gallery5 from "../../images/banner/gallery-05.jpg";
import gallery6 from "../../images/banner/gallery-06.jpg";

const Gallery = () => {
  return (
    <div>
      <h1 >Our <span className="text-danger">Gallery</span></h1>
      <div className="row">
        <div className="card-group col-12 col-md-4 g-4 p-2 ">
          <div className="card">
            <img src={gallery1} class="card-img-top w-100%" alt="..." />
          </div>
        </div>
        <div className="card-group col-12 col-md-4 g-4 p-2">
          <div className="card">
            <img src={gallery2} class="card-img-top w-100%" alt="..." />
          </div>
        </div>
        <div className="card-group col-12 col-md-4 g-4 p-2">
          <div className="card">
            <img src={gallery3} class="card-img-top w-100%" alt="..." />
          </div>
        </div>
        <div className="card-group col-12 col-md-4 g-4 p-2">
          <div className="card">
            <img src={gallery4} class="card-img-top w-100%" alt="..." />
          </div>
        </div>
        <div className="card-group col-12 col-md-4 g-4 p-2">
          <div className="card">
            <img src={gallery5} class="card-img-top w-100%" alt="..." />
          </div>
        </div>
        <div className="card-group col-12 col-md-4 g-4 p-2">
          <div className="card">
            <img src={gallery6} class="card-img-top w-100%" alt="..." />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Gallery;
