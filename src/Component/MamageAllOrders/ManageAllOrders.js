import React from "react";
import { useState, useEffect } from "react";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("https://young-plateau-63014.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  return (
    <div>
        <h1>Manage All Orders</h1>
      {
        orders.map(order => <div 
          key={order._id}
        order={order}>
          <div className="row d-flex justify-content-center m-2">
            <div className="col-sm-12 col-md-12 w-25  ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Service Name: {order.orderName}</h5>
                  <h5 className="card-title">User Name: {order.Name}</h5>
                  <h6 className="card-title">Email: {order.email}</h6>
                  <p className="card-text">Address: {order.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          
          )
      }
    </div>
  );
};

export default ManageAllOrders;
