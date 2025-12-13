import "./Orders.css";

const Orders = ({ user }) => {
  const orders =
    JSON.parse(localStorage.getItem("orders"))?.filter(
      (o) => o.username === user?.username
    ) || [];

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, i) => (
          <div className="order-card" key={i}>
            <h3>Order #{i + 1}</h3>
            <p>Name: {order.customerName}</p>
            <p>Phone: {order.customerPhone}</p>
            <p>Address: {order.customerAddress}</p>
            <p>Date: {order.date}</p>

            {order.items.map((item, j) => (
              <p key={j}>
                {item.name} × {item.quantity} = ₹
                {item.price * item.quantity}
              </p>
            ))}

            <h4>Total: ₹{order.total}</h4>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
