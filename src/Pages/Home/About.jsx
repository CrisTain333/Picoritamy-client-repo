import React from "react";
import logo from "../../images/me.jpg";

const About = () => {
  return (
    <>
      <section className="text-gray-600 body-font mb-40">
        <div className="container mx-auto flex px-5  items-center justify-center flex-col">
          <div className="avatar">
            <div className="w-48 rounded-full ">
              <img src={logo} alt="" />
            </div>
          </div>
          <div className="text-center lg:w-2/3 w-full mt-10">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Hi ! My Name Is Cristain
            </h1>
            <p className="mb-8 leading-relaxed">
            It’s amazing how one day someone walks into your life, and suddenly, you can’t remember how you lived without them.
            "With my whole heart and for my whole life"
            </p>
            <div className="flex justify-center">
              <button className="ml-4 inline-flex bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-pink-700 rounded text-lg text-white">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
