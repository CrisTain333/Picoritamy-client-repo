import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../../Shared/Service Card/ServiceCard";
const Service = () => {
  const [services,setServices]=useState([])

  useEffect(()=>{
    fetch('https://picoritamy-server-cristain333.vercel.app/home/services')
    .then(res=>res.json())
    .then(data=>{
      setServices(data)
    })
  },[])

  return (
    <>
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-full  md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">{" "}</span>
            </span>{" "}
            Best Services
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            “Our rewards in life will always be in direct ratio to our service.”
          </p>
        </div>
        <div className="px-4 mb-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            services.map(e=>{
              return(
          <ServiceCard key={e._id} data={e} />

              )
            })
          }
         
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Link
            to="/services"
            className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-primary text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            See All
          </Link>
        </div>
      </div>
    </>
  );
};

export default Service;
