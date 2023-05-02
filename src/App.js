import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link,Navigate } from "react-router-dom";
import Login from "./components/Login";
import Menswear from "./components/category/Menswear";
import Womenswear from "./components/category/Womenswear";
import Jewelery from "./components/category/Jewelery";
import Electronics from "./components/category/Electronics";
import { useState } from "react";
import Navbar from "./components/UI/Navbar";

function App() {
  //data of add cart store in cartData...
  // const [cartData, setCartData] = useState({});

  const [cartData, setCartData] = useState([]);
  const [login, setLogin] = useState({ isLogin: false, username: "" });
  const [cartToggle, setCartToggle] = useState(false);
  // console.log(cartToggle);
  return (
    <>
      <Router>
        <Navbar
          login={login}
          setCartData={setCartData}
          setCartToggle={setCartToggle}
          cartData={cartData}
          setLogin={setLogin}
        />
        <Routes>
          {login.isLogin ? (
            <Route exact path="/" element={<Home />}></Route>
          ) : (
            <Route
              exact
              path="/"
              element={<Login setLogin={setLogin} />}
            ></Route>
          )}

          <Route
            exact
            path="/login"
            element={
              login.isLogin ? (
                <Login setLogin={setLogin} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/Menswear"
            element={
              login.isLogin ? (
                <Menswear cartData={cartData} setCartData={setCartData} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/Womenswear"
            element={
              login.isLogin ? (
                <Womenswear cartData={cartData} setCartData={setCartData} />
              ) : (
                <Navigate to="/" />
              )
            }
              
            
          ></Route>
          <Route
            exact
            path="/Jewelery"
            element={
            login.isLogin ? (
                <Jewelery cartData={cartData} setCartData={setCartData} />
              ) : (
                <Navigate to="/" />
              )
            }
          ></Route>
          <Route
            exact
            path="/Electronics"
            element={
              login.isLogin ? (
                <Electronics cartData={cartData} setCartData={setCartData} />
              ) : (
                <Navigate to="/" />
              )
            }
              
            
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
