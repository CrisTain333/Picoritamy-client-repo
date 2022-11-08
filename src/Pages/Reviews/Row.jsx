import React from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";

const Row = ({data}) => {
    const{serviceName,_id,message,time} = data
  return (
    <>
      <div className="p-2 my-10 bg-gray-100 text-gray-900 rounded-md">
        <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-6 md:flex-row">
          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-center md:text-left">
            {serviceName}
            </h4>
            <p className="text-base">
            Time : {time}

            </p>
            <p className="dark:text-gray-400">
             {message}
            </p>
          </div>
        </div>
        <div className="flex justify-start ml2 pt-4 space-x-4 align-center">
            <button className="btn btn-circle bg-red-500" ><MdDeleteForever className="text-white text-3xl"/></button>
            <button className="btn btn-circle bg-green-500" ><AiOutlineEdit className="text-white text-3xl"/></button>
        </div>
      </div>
    </>
  );
};

export default Row;