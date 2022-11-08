import React, { useEffect, useState } from "react";
import AuthContext from "../../Context/Context";
import ServiceCard from "../../Shared/Service Card/ServiceCard";

const MainService = () => {
  const [serives, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Best Services</h2>
          <p className="dark:text-gray-400">For You</p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
       

          {serives.map((e) => {
            return <ServiceCard key={e._id} data={e}></ServiceCard>;
          })}
        </div>
      </section>
    </div>
  );
};

export default MainService;
