import React from "react";
import Service from "./Service";
import Gallery from "./Gallery";
import About from "./About"
import mainImage from '../../images/CourtenayWeddingPhotographer_686.jpg'
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const Home = () => {
  useTitle('Home')
  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 ">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0 ">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded-sm shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={mainImage}
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              <span className="text-primary">Capture Every</span>
              <br className="hidden md:block" />
              Moment As If{" "}
              <span className="inline-block text-deep-purple-accent-400">
                Its Your Last
              </span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              "It's not enough to just own a camera. Everyone owns a camera. To
              be a photographer, you must understand, appreciate, and harness
              the power you hold!"
            </p>
            <div className="flex items-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide bg-primary text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="pt-20 mb-10">
      <Service/>
      </div>

      <h1 className="title-font sm:text-4xl text-3xl mb-10 font-medium text-gray-900 text-center">About Me</h1>

      <About></About>

      <Gallery/>


    </>
  );
};

export default Home;
