import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Orders from "./pages/Orders.jsx";
import ProductDetails from "./pages/ProductDetails";
import Profile from "./pages/Profile.jsx";

import { useState, useEffect } from "react";
import Footer from "./components/Footer.jsx";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("loggedUser")) || null
  );

  const loginUser = (userData) => {
    localStorage.setItem("loggedUser", JSON.stringify(userData));
    setUser(userData);
    // toast.success("Login successful");
  };

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    const idx = cart.findIndex((i) => i.id === product.id);
    const newCart = [...cart];

    if (idx >= 0) {
      newCart[idx].quantity += 1;
    } else {
      newCart.push({ ...product, quantity: 1 });
    }

    setCart(newCart);
    toast.success("Product added to cart");
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
    toast.info("Product removed from cart");
  };

  const logoutUser = () => {
    localStorage.removeItem("loggedUser");
    setUser(null);
    toast.info("Logged out successfully");
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />

      <Navbar user={user} cartCount={cart.length} logoutUser={logoutUser} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />

        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              removeFromCart={removeFromCart}
              user={user}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />


        <Route
          path="/checkout"
          element={
            user ? (
              <Checkout cart={cart} clearCart={clearCart} user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route path="/login" element={<Login loginUser={loginUser} />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/orders"
          element={user ? <Orders user={user} /> : <Navigate to="/login" />}
        />

        <Route
          path="/profile"
          element={
            user ? (
              <Profile user={user} logoutUser={logoutUser} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
