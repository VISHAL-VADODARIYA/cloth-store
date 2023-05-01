import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

export default function Home({ login }) {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((data) => setData(data.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="mx-auto w-max pt-5">
        <div className="grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5">
          {data &&
            data.map((i) => {
              return (
                <>
                  <div className="overflow-hidden border border-2 p-1 border-pink-700 rounded-xl">
                    <img
                      src={i.image}
                      className="object-contain overflow-hidden border border-0 rounded-lg md:w-48 md:h-48 sm:w-60 sm:h-60 w-60 h-60 bg-white p-2"
                      width="300px"
                      height="30px"
                    />
                  </div>
                  <div className="overflow-hidden border border-0 rounded-md">
                    <div 
                      className="object-contain overflow-hidden border border-0 md:w-48 md:h-48 w-0 h-0 bg-transperent"
                      width="300px"
                      height="30px"
                    />
                  </div>
                </>

              );
            })}
        </div>
      </div>
    </>
  );
}
