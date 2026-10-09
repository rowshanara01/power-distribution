import React from "react";
import { useForm } from "react-hook-form";

const BillInfoAdd = ({ id }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, event) => {
    fetch(`https://red-smarties-17325.herokuapp.com/update-billing/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json)
      .then((result) => {
        console.log("success put");
      });
    event.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2>Type your Bill information</h2>
          <form
            className="flex flex-col justify-center items-center gap-2 mt-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your full name"
              {...register("userName", { required: true })}
            />
            {errors.userName?.type === "required" && "First name is required"}

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your email"
              {...register("userEmail", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
            />
            {errors.userEmail && "please provide your valid email"}

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your phone number"
              type="number"
              {...register("phoneNumber", {
                required: true,
                minLength: 11,
                maxLength: 11,
              })}
            />
            {errors.phoneNumber && "please valid your phone number"}

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your amount"
              type="number"
              {...register("amount", { required: true })}
            />
            {errors.amount && "please enter your amount"}
            <input
              className="btn btn-primary w-full max-w-xs"
              type="submit"
              value="submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BillInfoAdd;
