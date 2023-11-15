import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Login } from "./login/Login";
import { Home } from "./screens/home/Home";
import { ToastContainer, toast } from "react-toastify";
import { Productdetails } from "./screens/home/Productdetails";
import { About } from "./screens/aboutus/Aboutus";
import { Shop } from "./screens/shop/Shop";
import { CartProvider } from "react-use-cart";
import { Cart } from "./screens/cart/Cart";
import { Checkout } from "./screens/cart/Checkout";
function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/home/productdetails/:productId" element={<Productdetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}
export { App }