import React from 'react';
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import './OrderPlace.css'
import { useState } from 'react';
import { useEffect } from 'react';

const OrderPlace = () => {
    const [service, setService] = useState([]);
    const { id } = useParams();
    console.log(id)
    useEffect(() => {
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setService(data));
    }, []);
    const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
      console.log(data);
    }
    const item = service.find(pd=> pd.id ==id);
    return (
        <div>
       
      <img src={item?.img} alt="" />
      <h1>{item?.name}</h1>
   <div>
       <h1>Please Conform To Book</h1>
   <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", )} placeholder="Write your email" />
        <input {...register("password", )} placeholder="Write your password"/>
        <input {...register("Name", )} placeholder="Write your name"/>
        <input type="number" {...register("number", )} placeholder="Write your phone number"/>
        <input className="conform-submit" type="submit" value="Conform To Book" />
      </form>
   </div>
    </div>
    );
};

export default OrderPlace;