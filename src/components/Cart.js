import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Button from "./UI/Button";

export default function Cart({
  Buy,
  cartToggle,
  setCartToggle,
  cartData,
  setCartData,
  setBuy,
  image,
  title,
  description,
  price,
  count,
  rate,
  id,
}) {
  const [tog, setTog] = useState(false);
  const toggle = () => {
    setTog(!tog);
  };

  const close = (e) => {
    e.preventDefault();
    setCartToggle(false);
  };

  const [countItem, setCountItem] = useState({});

  // const CartItem = () => {
  //   return Object.keys(cartData).map((i) => {
  //     console.log(cartData[i]);
  //     return (
  //       <div class="max-w-sm bg-white rounded-lg shadow grid content-between p-5">
  //         <button onClick={close} className="float top-0 right-0">
  //           X
  //         </button>
  //         <br />
  //         <div>
  //           <div className="flex justify-center p-3">
  //             <a href="#">
  //               <img
  //                 class="rounded-t-lg  object-contain overflow-hidden border border-1 w-48 h-48 bg-white"
  //                 src={i.image}
  //                 alt={i.image + "Image"}
  //               />
  //             </a>
  //           </div>
  //           <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
  //             {i.title}
  //           </h5>
  //           <p class="mb-3 font-normal text-white">
  //             <button onClick={toggle} className="text-gray-700">
  //               Description {tog ? "▲" : "▼"}
  //             </button>

  //             {tog && (
  //               <div
  //                 className={
  //                   "border border-1 rounded  transition ease-in-out delay-1000  shadow-md shadow-gray-700 text-gray-700 p-3"
  //                 }
  //               >
  //                 {i.description}
  //               </div>
  //             )}
  //           </p>
  //           <h5 class="mb-3 font-bold text-gray-700">Price : {i.price} ₹</h5>
  //           <p class="mb-3 font-normal text-gray-700">
  //             Rating : {i.rate}★ <br />
  //             Rating by {i.count} People
  //           </p>{" "}
  //         </div>
  //         <div className="flex justify-around mt-full">
  //           <Button
  //             class="bg-green-700 text-white hover:bg-green-800"
  //             text="Buy"
  //             id={i.id}
  //           />
  //           <Button
  //             class="bg-blue-700 text-white hover:bg-blue-800"
  //             text="Add To Cart"
  //             id={i.id}
  //           />
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  return cartToggle ? (
    <Fragment>
      {ReactDOM.createPortal(
        <div class="fixed grid place-items-center w-full p-4 bg-gray-800 opacity-50 overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"></div>,
        document.getElementById("backdrop")
      )}
      {ReactDOM.createPortal(
        <div className="bg-transparent">
          <div
            id="staticModal"
            data-modal-backdrop="static"
            tabindex="-1"
            aria-hidden="true"
            class="fixed grid place-items-center w-full p-4 bg overflow-x-hidden overflow-y-auto md:inset-0  max-h-full"
          >
            <div class="bg-white rounded-lg shadow p-5">
              <div className="flex justify-between mb-3">
                <h2 className="text-4xl font-bold text-pink-700">Cart</h2>

                <button onClick={close} className="place-self-end">
                  <span className="text-4xl font-bold text-pink-700">
                    &times;
                  </span>
                </button>
              </div>
              <div className="flex flex-col m-3 justify-end bg-white">
                {Object.keys(cartData).length > 0 ? (
                  Object.keys(cartData).map((i) => {
                    return (
                      <>
                        <div class="flex flex-col lg:flex-row rounded overflow-hidden h-auto lg:h-32 border shadow shadow-lg">
                          <div className=" h-32 w-32 border rounded overflow-hidden ">
                            <img
                              class="block h-auto w-full lg:w-48 h-24"
                              src={cartData[i].image}
                            />
                          </div>
                          <div class="bg-white mb-3 pl-3 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                            <div class="text-black font-bold text-xl mb-1 leading-tight">
                              {cartData[i].title}
                            </div>
                            <p class="text-grey-darker text-base">
                              Price: {cartData[i].price}
                            </p>
                            <p class="text-grey-darker text-base">
                              Total Price:{" "}
                              {(
                                cartData[i].price * (countItem[i] || 1)
                              ).toFixed(2)}
                            </p>
                            <div className="flex justify-start">
                              <div className="flex border border-1 rounded border-pink-700 w-min">
                                <button
                                  className="px-2"
                                  text="-"
                                  id={cartData[i].id}
                                  onClick={() => {
                                    countItem[i] >= 1 &&
                                      setCountItem((p) => {
                                        return {
                                          ...p,
                                          [i]: p[i] - 1,
                                        };
                                      });
                                  }}
                                >
                                  {" "}
                                  -{" "}
                                </button>
                                <input
                                  value={countItem[i] || 1}
                                  id={cartData[i].id}
                                  className="w-8 text-center"
                                />
                                <button
                                  className="px-2"
                                  text="+"
                                  id={cartData[i].id}
                                  onClick={() => {
                                    setCountItem((p) => {
                                      return {
                                        ...p,
                                        [i]: (countItem[i] || 0) + 1,
                                      };
                                    });
                                  }}
                                >
                                  {" "}
                                  +{" "}
                                </button>
                              </div>
                              <Button
                                id={i}
                                class="flex text-white ml-3 bg-pink-700"
                                text="Remove"
                                onClick={(i) => {
                                  setCartData((p) => {
                                    delete p[i.target.id];
                                    return { ...p };
                                  });
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })
                ) : (
                  <div>Please Add item to Cart</div>
                )}
              </div>

              {Object.keys(cartData).length > 0 && (
                <>
                  <div className="text-center font-bold">
                    Total Price:{" "}
                    {(cartData.price * (countItem || 1)).toFixed(2)}
                  </div>
                  <div className="flex justify-around">
                    <Button
                      class="bg-pink-700 text-white"
                      text="Cancel"
                      onClick={() => {
                        setCartData([]);
                        setCartToggle(false);
                      }}
                    />
                    <Button class="bg-pink-700 text-white px-9" text="Buy" onClick />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>,
        document.getElementById("form")
      )}
    </Fragment>
  ) : null;
}
