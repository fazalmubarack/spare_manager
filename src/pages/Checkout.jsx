
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";

import { toast } from "react-toastify";

export default function Checkout({ cart, clearCart, user }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("CARD");

  // Payment inputs
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upiId, setUpiId] = useState("");

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (!name || !address || !phone) {
      toast.error("Please fill delivery details!");
      return;
    }

    if (paymentMethod === "CARD") {
      if (!cardNumber || !expiry || !cvv) {
        toast.error("Please fill card details!");
        return;
      }
    }

    if (paymentMethod === "UPI") {
      if (!upiId) {
        toast.error("Please enter UPI ID!");
        return;
      }
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push({
      username: user.username,
      customerName: name,
      customerAddress: address,
      customerPhone: phone,
      paymentMethod,
      paymentDetails:
        paymentMethod === "CARD"
          ? `Card ****${cardNumber.slice(-4)}`
          : paymentMethod === "UPI"
          ? upiId
          : "Cash on Delivery",
      items: cart,
      total,
      status: "Order Placed",
      date: new Date().toLocaleString(),
    });

    localStorage.setItem("orders", JSON.stringify(orders));
    clearCart();

    toast.success("Order placed successfully!");
    navigate("/orders");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="total-box">Total: ₹{total}</div>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        placeholder="Delivery Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        rows="3"
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* PAYMENT METHODS */}
      <div className="payment-section">
        <h3>Payment Method</h3>

        {/* CARD */}
        <div
          className={`payment-card ${
            paymentMethod === "CARD" ? "active" : ""
          }`}
          onClick={() => setPaymentMethod("CARD")}
        >
          💳 <strong>Debit / Credit Card</strong>
          <span>Visa, MasterCard, RuPay</span>
        </div>

        {paymentMethod === "CARD" && (
          <div className="payment-form">
            <input
              placeholder="Card Number"
              maxLength="16"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            <div className="card-row">
              <input
                placeholder="MM/YY"
                maxLength="5"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
              />
              <input
                placeholder="CVV"
                maxLength="3"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* UPI */}
        <div
          className={`payment-card ${
            paymentMethod === "UPI" ? "active" : ""
          }`}
          onClick={() => setPaymentMethod("UPI")}
        >
          📱 <strong>UPI</strong>
          <span>GPay, PhonePe, Paytm</span>
        </div>

        {paymentMethod === "UPI" && (
          <div className="payment-form">
            <input
              placeholder="Enter UPI ID (example@upi)"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
          </div>
        )}

        {/* COD */}
        <div
          className={`payment-card ${
            paymentMethod === "COD" ? "active" : ""
          }`}
          onClick={() => setPaymentMethod("COD")}
        >
          🚚 <strong>Cash on Delivery</strong>
          <span>Pay when product arrives</span>
        </div>
      </div>

      <button className="place-order-btn" onClick={handleOrder}>
        Place Order
      </button>
    </div>
  );
}
