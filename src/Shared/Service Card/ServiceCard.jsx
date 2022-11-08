import React from "react";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const ServiceCard = ({ data }) => {
  const { img, title, description, rating, price,_id } = data;
  return (
    <>
    <PhotoProvider>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
      <PhotoView src={img}>

        <img src={img} className="object-cover w-full h-64" alt="" />
      </PhotoView>
        <div className="p-5 border border-t-0">
          <Link
            to="/"
            aria-label="Category"
            title="Visit the East"
            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            {title}
          </Link>
          <p className="mb-2 text-gray-700">{description?.slice(0, 70)}....</p>
          <p className="inline-flex items-center  transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 font-bold">
            Price : ${price}
          </p>
          <div className="flex items-center flex-wrap ">
            <Link className="text-primary inline-flex items-center md:mb-2 lg:mb-0" to={`/services/${_id}`}>
            View details
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <FaStar   className="text-yellow-400"/>
              {rating}
            </span>
          </div>
        </div>
      </div>
      </PhotoProvider>
    </>
  );
};

export default ServiceCard;
