import React, { useContext } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/AppContext";
import MyOrders from "./pages/MyOrders";
import Auth from "./models/Auth";
import Footer from "./components/Footer";

const App = () => {
  const { isSeller, showUserLogin } = useContext(AppContext);
  // "/seller" route -> No Navbar
  const isSellerPath = useLocation().pathname.includes("seller");
  return (
    <div>
      {isSellerPath ? null : <Navbar />}
      {showUserLogin ? <Auth /> : null}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/my-orders" element={<MyOrders />} />
        </Routes>
      </div>
      {isSellerPath ? null : <Footer />}
    </div>
  );
};

export default App;
