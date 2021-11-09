import React, { useEffect, useState } from "react";
import useAuth from "../Hooks/UseAuth";


const MyOrders = () => {
 const [myOrders, setMhOrders] = useState([]);
 const { user } = useAuth();
 useEffect(()=>{
   fetch('https://young-plateau-63014.herokuapp.com/orders')
   .then(res => res.json())
   .then(data=>setMhOrders(data))
 },[])

 // delete a order
const handelDelateOrder = id =>{
const url = `https://young-plateau-63014.herokuapp.com/orders/${id}`
 fetch(url, {
   method: 'DELETE'
 })
 .then(res => res.json())
 .then(data =>{
   if(data.deletedCount > 0){
     alert('deleted successful')
    //  confirm('are you sure to delete')
     const remainingOrders = myOrders.filter(orders =>orders._id !==id)
     setMhOrders(remainingOrders)
   }
 })
}


//  const handelDeleteOrder = id =>{
//   const url = `http://localhost:5000/orders/${id}`;
//   fetch(url, {
//     method:'DELETE'
//   })
//   .then()
  
// }

  return (
    
    <div>
      <h1>My Orders</h1>
        <div>
        {
          myOrders.map(order =><div
          key={order._id}
          order={order}
          >
         
         <div className="row d-flex justify-content-center m-2">
            <div className="col-sm-12 col-md-12 w-25  ">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Service Name: {order.orderName}</h5>
                  <h5 className="card-title">User Name: {order.Name}</h5>
                  <h6 className="card-title">Email: {order.email}</h6>
                  <p className="card-text">Address: {order.address}</p>
                  
                  <button onClick={() => handelDelateOrder(order?._id)} className="conform-submit m-2 w-50">delete</button>
                  
                </div>
              </div>
            </div>
          </div> 
         
        
          </div>)
        }
      </div> 
    </div>
  );
};

export default MyOrders;
