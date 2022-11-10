import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import AOS from "aos";
import "aos/dist/aos.css";
const ReviewCard = ({ data }) => {
  const { message, name, photo, time } = data;

  AOS.init();
  AOS.init({
    disable: false,
    startEvent: "DOMContentLoaded",
    initClassName: "aos-init",
    animatedClassName: "aos-animate",
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,
    offset: 120,
    delay: 0,
    duration: 400,
    easing: "ease",
    once: false,
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  return (
    <div>
      <PhotoProvider>
        <div
          className="container flex justify-start flex-col w-full m-2 sm:mx-auto max-w-lg rounded-md  bg-gray-50 my-10"
          data-aos="flip-up"
        >
          <div className="flex justify-between p-2">
            <div className="flex space-x-4">
              <PhotoView src={photo}>
                <div>
                  <img
                    src={photo}
                    alt={name}
                    className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
                  />
                </div>
              </PhotoView>
              <div>
                <h4 className="font-bold">{name}</h4>
                <span className="text-xs dark:text-gray-400">{time}</span>
              </div>
            </div>
          </div>
          <div className="p-4 space-y-2 text-sm dark:text-gray-400">
            <p>{message}</p>
          </div>
        </div>
      </PhotoProvider>
    </div>
  );
};

export default ReviewCard;
