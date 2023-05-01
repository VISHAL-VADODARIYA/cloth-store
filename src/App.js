import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
            element={<Login setLogin={setLogin} />}
          ></Route>
          <Route
            exact
            path="/Menswear"
            element={<Menswear cartData={cartData} setCartData={setCartData} />}
          ></Route>
          <Route
            exact
            path="/Womenswear"
            element={
              <Womenswear cartData={cartData} setCartData={setCartData} />
            }
          ></Route>
          <Route
            exact
            path="/Jewelery"
            element={<Jewelery cartData={cartData} setCartData={setCartData} />}
          ></Route>
          <Route
            exact
            path="/Electronics"
            element={
              <Electronics cartData={cartData} setCartData={setCartData} />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
