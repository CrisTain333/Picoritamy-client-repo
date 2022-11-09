import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useTitle from "../../hooks/useTitle";

const UpdateReview = () => {
  const data = useLoaderData();
  useTitle('Reviews/update')
  const { _id, message } = data;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.message.value;

    // fetch(`http://localhost:5000/review/update/${_id}`, {
    //   method: "PUT",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body:JSON.stringify(message)
    // })
    fetch(`http://localhost:5000/review/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Review Updated");
        }
      });
  };

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="p-2 my-10 bg-gray-100 text-gray-900 rounded-md">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="flex">
            <form onSubmit={handleUpdate}>
              <div className=" mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-xl text-gray-600"
                >
                  Update Review
                </label>
                <textarea
                  defaultValue={message}
                  name="message"
                  className="w-full bg-white rounded border border-gray-300  text-base p-5 resize-none mt-3"
                  rows="5"
                  cols="80"
                ></textarea>
              </div>
              <div className="flex justify-start ml2 pt-2 space-x-4 align-center">
                {/* <GrUpdate/> */}
                {/* <input
                  type="submit"
                  value="Update"
                  className="btn btn-primary text-white "
                /> */}
                <button
                  type="submit"
                  className="btn btn-primary text-white text-md "
                >
                  <GrUpdate className="text-md  mr-2" /> Update{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateReview;
