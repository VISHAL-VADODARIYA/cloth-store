import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart";

export default function Navbar({
  login,
  setLogin,
  setCartToggle,
  cartData,
  setCartData,
}) {
  const [buy, setBuy] = useState(false);
  const [miniToggleMenu, setMiniToggleMenu] = useState(false);

  function MiniToggleMenu() {
    setMiniToggleMenu(!miniToggleMenu);
  }

  function Buy() {
    login.isLogin && setBuy(true);
    setCartToggle(true);
    MiniToggleMenu();
  }

  function logout() {
    setLogin({ isLogin: false, username: "" });
    MiniToggleMenu();
  }

  return (
    <>
      <nav class="bg-indigo-900 shadow-xl border-gray-200 sticky top-0">
        <div class="max-w-screen-2xl md:flex md:flex-wrap items-center justify-around mx-auto p-4">
          <div className="flex justify-between">
            <div>
              <a href="#" class="flex items-center">
                <span class="text-white self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
                  Cloth Store
                </span>
              </a>
            </div>
            <div>
              {login.isLogin && (
                <button
                  data-collapse-toggle="navbar-default"
                  type="button"
                  class="items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-indigo-900 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-cntrols="navbar-default"
                  aria-expanded="false"
                  onClick={MiniToggleMenu}
                  // onChange={toggleclose}
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
          </div>

          <div
            class={!miniToggleMenu && " w-full md:block md:w-auto hidden"}
            id="navbar-default"
          >
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-auto">
              <li>
                <Link to="/">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-indigo-900"
                    aria-current="page"
                    onClick={MiniToggleMenu}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Menswear">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-indigo-900"
                    onClick={MiniToggleMenu}
                  >
                    Men's Wear
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Womenswear">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-indigo-900"
                    onClick={MiniToggleMenu}
                  >
                    Women's Wear
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Jewelery">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-indigo-900"
                    onClick={MiniToggleMenu}
                  >
                    Jewellery
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/Electronics">
                  <a
                    href="#"
                    class="block py-1 pl-3 pr-3 text-white rounded hover:bg-white hover:text-indigo-900"
                    onClick={MiniToggleMenu}
                  >
                    Electronics
                  </a>
                </Link>
              </li>
            </ul>
            <div className="flex justify-center md:hidden ">
              {login?.username && (
                <button
                  id="loginButton"
                  className=" md:block hidden px-8 py-1 bg-white rounded text-indigo-900 hover:bg-indigo-200"
                >
                  {login.username}
                </button>
              )}

              <div className="m-2"> </div>

              {login.isLogin && (
                <button
                  className="px-8 py-1 bg-white rounded text-indigo-900 hover:bg-indigo-200"
                  onClick={Buy}
                >
                  Cart{" "}
                  {login.isLogin && (
                    <span className="border px-1 rounded-full border-0 bg-indigo-900 text-white">
                      {Object.keys(cartData).length}
                    </span>
                  )}
                </button>
              )}
              <div className="m-2"> </div>

              {login.isLogin && (
                <button
                  className="px-3 py-1 bg-white rounded  text-indigo-900 hover:bg-indigo-200 fa fa-sign-out"
                  onClick={logout}
                ></button>
              )}
            </div>
          </div>
          <div className="flex flex-row justify-center hidden md:inline-flex">
            {login?.username && (
              <button
                id="loginButton"
                className=" md:block hidden px-8 py-1 bg-white rounded text-indigo-900 hover:bg-indigo-200"
              >
                {login.username}
              </button>
            )}

            <div className="m-2"> </div>

            {login.isLogin && (
              <button
                className="px-8 py-1 bg-white rounded text-indigo-900 hover:bg-indigo-200"
                onClick={Buy}
              >
                Cart{" "}
                {login.isLogin && (
                  <span className="border px-1 rounded-full border-0 bg-indigo-900 text-white">
                    {Object.keys(cartData).length}
                  </span>
                )}
              </button>
            )}
            <div className="m-2"> </div>

            {login.isLogin && (
              <button
                className="px-3 py-1 bg-white rounded  text-indigo-900 hover:bg-indigo-200 fa fa-sign-out"
                onClick={logout}
              ></button>
            )}
          </div>
        </div>
      </nav>
      {/* {login.isLogin ?  */}
      {buy && (
        <Cart
          cartData={cartData}
          setCartData={setCartData}
          setBuy={setBuy}
          cartToggle={buy}
          setCartToggle={() => {
            setBuy(false);
          }}
        />
      )}
    </>
  );
}
