import React, { useEffect, useState } from "react";
import Home from "./Home";

export default function Login({ setLogin, login }) {
  var password;
  var passcode;
  const [PassCheck, setPassCheck] = useState("");
  

  const [loginData, setLoginData] = useState({
    name: "",
    password: Math.floor(Math.random() * 9999 + 1),
  });
  const [loginRedirect, setLoginRedirect] = useState(false);
  useEffect(() => {
    console.log(loginData.password);
  }, []);

  const verify = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    var password = e.target[1].value;
    if (+password === loginData.password) {
      // console.log(loginData);
      setLoginData({ name: email, password: password });
      setLogin({ isLogin: true, username: email });
      console.log("login Successful");
      e.target[0].value = "";
      e.target[1].value = "";
      setLoginRedirect(true);
    }
  };
  const checkpass = () => {
    setPassCheck("Plase enter correct password");
    
  };

  // const logout = () =>{setLogin({ isLogin: false, username: "login" });}
  return (
    <>
      {loginRedirect ? (
        <Home />
      ) : (
        <div className="flex justify-center mt-20">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-xl sm:p-6 md:p-8 ">
            <form class="space-y-6" action="#" onSubmit={verify}>
              <h5 class="text-3xl text-center font-bold text-indigo-900">
                Sign In
              </h5>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                  required
                />
              </div>
              <div className="text-red-700">{PassCheck}</div>
              <div>Your password is: {loginData.password}</div>

              <button
                type="submit"
                class="w-full text-white bg-indigo-900 hover:bg-indigo-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                onClick={checkpass}
              >
                Login to your account
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
