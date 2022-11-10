import React, { useContext, useEffect, useState } from "react";
import "./review.css";
import AddReview from "./AddReview";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import AuthContext from "../../Context/Context";
import lock from '../../images/lock.svg'
const Reviews = ({data , title , }) => {
  const {user}= useContext(AuthContext);  
  const [hit,setHit]=useState(true)
  const [reviws,setReviws]=useState([])


  useEffect(()=>{
    fetch(`https://picoritamy-server-cristain333.vercel.app/review/${data}`)
    .then(res=>res.json())
    .then(newdata => setReviws(newdata))
    setHit(false)
  },[hit])




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

        <div className="right">
          {user ? (
              <div className=" md:sticky md:top-10 ">
              <AddReview data={data} setHit={setHit} title={title} />
              </div>
          ) : (
            <>
              <div className=" md:sticky md:top-20 ">
              <div className="h-40 mt-20 flex items-center justify-center ">
                <Link to="/login">
                  {" "}
                  <div className="  text-white  w-60 rounded-full p-5">
                    {/* <FaLock className="text-xl " /> */}
                    <img src={lock} alt="" />
                  </div>{" "}
                  <p className="text-red-600 text-xl font-semibold underline ">
                    {" "}
                    Please Login To Add A Review
                  </p>
                </Link>
              </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Reviews;
