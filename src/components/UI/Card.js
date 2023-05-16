import React, { useState } from "react";
import Button from "./Button";
import Buy from "../Buy";

export default function Card(props) {
  const [tog, setTog] = useState(false);
  const toggle = () => {
    setTog(!tog);
  };

  const addCart = () => {
    props.setCartData((p) => {
      console.log(p);
      return {
        ...p,
        [props.id]: {
          image: props.image,
          title: props.title,
          description: props.description,
          price: props.price,
          rate: props.rate,
          count: props.count,
        },
      };
    });
  };
  // function addCart(props) {
  //   props.setCartData((cartData) => {
  //     console.log(cartData);
  //     return {
  //       ...cartData,
  //       [props.id]: {
  //         'image': props.image,
  //         'title': props.title,
  //         'description': props.description,
  //         'price': props.price,
  //         'rate': props.rate,
  //         'count': props.count,
  //       },
  //     };
  //   });
  // }
  return (
    <div class="max-w-sm bg-white rounded-lg shadow grid content-between p-5">
      <div>
        <div className="flex justify-center p-3">
          <a href="#">
            <img
              class="rounded-t-lg  object-contain overflow-hidden border border-0 w-32 h-32 bg-white"
              src={props.image}
              alt={props.image + "Image"}
            />
          </a>
        </div>

        <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900">
          {props.title}
        </h5>
        <p class="mb-3 font-normal text-white">
          <button onClick={toggle} className="text-gray-700">
            Description {tog ? "▲" : "▼"}
          </button>

          {tog && (
            <div
              className={
                "border border-1 rounded shadow-md shadow-gray-700 text-gray-700 p-3"
              }
            >
              {props.description}
              <p class="mt-3 mb-1 underline font-normal text-gray-700">
                Rating : {props.rate}★ <br />
                Rating by {props.count} People
              </p>
            </div>
          )}
        </p>
        <h5 class="mb-3 font-bold text-gray-700">Price : {props.price} ₹</h5>
      </div>
      <div className="flex justify-center mt-full">
        {/* <Button
          class="bg-green-700 text-white hover:bg-green-800"
          text="Buy"
          id={props.id}
          onClick={Buy}
        /> */}
        <Button
          class="bg-blue-700 px-2 text-white hover:bg-blue-800"
          text="Add To Cart"
          id={props.id}
          onClick={addCart}
        />
      </div>
    </div>
  );
}
