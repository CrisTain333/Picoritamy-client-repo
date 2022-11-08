import React, { useContext, useEffect, useState } from "react";
import "./review.css";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import AuthContext from "../../Context/Context";
const Reviews = ({data , title}) => {
    const [reviws,setReviws]=useState([])
  const {user}= useContext(AuthContext);


  useEffect(()=>{
    fetch(`http://localhost:5000/review/${data}`)
    .then(res=>res.json())
    .then(data => setReviws(data))
  },[reviws])




  return (
    <>
      <div className="p-6 py-12 shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <h2 className="text-center text-3xl tracking-tighter font-bold">
              {" "}
              Customer Review
            </h2>
          </div>
        </div>
      </div>
      <div className="mainParent mt-10 ">
        <div className="left">
          {
            reviws.map(e=>{
                return(
                    <ReviewCard  key={e._id} data={e}/>
                )
            })
          }
        </div>

        <div className="right  ">
          {user ? (
            <AddReview data={data} title={title}  />
          ) : (
            <>
              <div className="h-40 flex items-center justify-center">
                <Link to="/login">
                  {" "}
                  <div className="bg-red-500  text-white  ml-24 w-16 rounded-full p-5">
                    <FaLock className="text-xl " />
                  </div>{" "}
                  <p className="text-red-600 text-xl font-semibold underline ">
                    {" "}
                    Please Login To Add A Review
                  </p>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Reviews;
