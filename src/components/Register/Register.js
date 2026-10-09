import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    fetch("https://red-smarties-17325.herokuapp.com/register", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
      });

    event.target.reset();
  };
  return (
    <div className="bg-slate-200 w-3/6 mx-auto p-8 mt-6">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-2 mt-3 w-full mx-auto"
      >
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter your name"
          {...register("name", { required: true })}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter your Email"
          {...register("email", { required: true })}
        />
        <input
          className="input input-bordered w-full max-w-xs"
          placeholder="Enter your password"
          type="text"
          {...register("password", { required: true })}
        />
        <input
          className="btn btn-primary w-full max-w-xs"
          type="submit"
          value="Register"
        />
      </form>
    </div>
  );
};

export default Register;
