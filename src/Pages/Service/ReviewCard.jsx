import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewCard = () => {
  return (
    <div>
      <div className="container flex justify-start flex-col w-full m-2 sm:mx-auto max-w-lg rounded-md  bg-gray-100 my-10">
        <div className="flex justify-between p-2">
          <div className="flex space-x-4">
            <div>
              <img
                src="https://source.unsplash.com/100x100/?portrait"
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">Leroy Jenkins</h4>
              <span className="text-xs dark:text-gray-400">2 days ago</span>
            </div>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>
            Vivamus sit amet turpis leo. Praesent varius eleifend elit, eu
            dictum lectus consequat vitae. Etiam ut dolor id justo fringilla
            finibus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
