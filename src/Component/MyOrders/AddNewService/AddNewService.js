import React from "react";
import { useForm } from "react-hook-form";

const AddNewService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("order successful");
        }
      });
  };
  return (
    <div>
      <h1>Please Add New Services</h1>
      <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
        <input {...register("Name")} placeholder="Write service name" />
        <input {...register("detele1")} placeholder="Write service detail" />
        <input {...register("description")} placeholder="Write description" />
        <input {...register("img")} placeholder="Write ing url" />
        <input
          className="conform-submit"
          type="submit"
          value="Add New Services"
        />
      </form>
    </div>
  );
};

export default AddNewService;
