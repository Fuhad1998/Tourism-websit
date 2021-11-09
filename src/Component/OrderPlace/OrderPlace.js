import React from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import "./OrderPlace.css";
import { useState } from "react";
import { useEffect } from "react";

const OrderPlace = () => {
  const [service, setService] = useState([]);
  const { id } = useParams();
  const item = service.find((pd) => pd.id == id);
  // console.log(id);
  useEffect(() => {
    fetch(`https://young-plateau-63014.herokuapp.com/services`)
      .then((res) => res.json())
      .then((data) => setService(data));
      // console.log(service)
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    data.orderName = item.name;
    
    fetch('https://young-plateau-63014.herokuapp.com/orders',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(result=>{
      if(result.insertedId){
        alert('order successful')
        
      }
      
    })
    
  };
  
  
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="card-group col-12 col-md-3  g-4 p-2 ">
          <div className="card  ">
            <img src={item?.img} class="card-img-top" alt="..." />
            <div className="card-body">
              <h4 className="card-text">{item?.name}</h4>
              <h5 className="card-text">{item?.description}</h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1>Please Book Here</h1>
        <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
          <input {...register("email")} placeholder="Write your email" />
          <input {...register("password")} placeholder="Write your password" />
          <input {...register("Name")} placeholder="Write your name" />
          <input {...register("address")} placeholder="Write your address" />
          <input
            type="number"
            {...register("number")}
            placeholder="Write your phone number"
          />
          
          <input
            className="conform-submit"
            type="submit"
            value="Press Orders"
          />
        </form>
      </div>
    </div>
  );
};

export default OrderPlace;
