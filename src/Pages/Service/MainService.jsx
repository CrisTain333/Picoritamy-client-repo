import React, {  useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import ServiceCard from "../../Shared/Service Card/ServiceCard";

const MainService = () => {
  const [loading, setLoading] = useState(true);
  const [serives, setServices] = useState([]);

  useTitle("Service");

  useEffect(() => {
    fetch("https://picoritamy-server-cristain333.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-5xl font-bold">Best Services</h2>
          <p className="dark:text-gray-400">For You</p>
        </div>

          {loading ? (
            <div className="">
              <section class="  relative place-items-center grid my-40 gap-4">
                <div class="bg-gray-500 w-44 h-44 absolute animate-ping rounded-full delay-5s shadow-xl"></div>

                <div class="bg-gray-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

                <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin "></div>
              </section>
            </div>
          ) : (
            <>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {serives.map((e) => {
                return (
                  <ServiceCard
                    key={e._id}
                    data={e}
                    loading={loading}
                  ></ServiceCard>
                );
              })}
        </div>
            </>
          )}
      </section>
    </div>
  );
};

export default MainService;
