import { useNavigate } from "react-router-dom";
import "./Cart.css";
import { toast } from "react-toastify";

export default function Cart({ cart, setCart, removeFromCart, user }) {
  const navigate = useNavigate();

  const increase = (i) => {
    const newCart = [...cart];
    newCart[i].quantity += 1;
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const decrease = (i) => {
    const newCart = [...cart];
    if (newCart[i].quantity > 1) {
      newCart[i].quantity -= 1;
      setCart(newCart);
      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      toast.error("Please login first to checkout");
      navigate("/login"); // Use SPA navigation
      return;
    }
    navigate("/checkout"); // Navigate to checkout page
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <>
          {cart.map((item, i) => (
            <div className="cart-item" key={i}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="qty">
                <button onClick={() => decrease(i)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increase(i)}>+</button>
              </div>
              <button onClick={() => removeFromCart(i)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button onClick={handleCheckout}>Proceed to Checkout</button>
        </>
      )}
    </div>
  );
}
