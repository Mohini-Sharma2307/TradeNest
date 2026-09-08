import React, { useEffect, useMemo, useState } from "react";
import API from "../api/api";
import "./Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    API.get("/order/orders")
      .then((res) => {
        setOrders(res.data.orders);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredOrders = useMemo(() => {
    return orders.filter((order) =>
      order.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [orders, search]);

  const buyCount = orders.filter((o) => o.mode === "BUY").length;
  const sellCount = orders.filter((o) => o.mode === "SELL").length;

  if (orders.length === 0) {
    return (
      <div className="orders-page">
        <div className="orders-card">
          <h2>No Orders Yet 📭</h2>
          <p>You haven't placed any orders yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <div className="orders-card">
        <div className="orders-header">
          <h2>📋 Orders ({orders.length})</h2>

          <input
            type="text"
            placeholder="🔍 Search Stock..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-order"
          />
        </div>

        <div className="order-summary">
          <div className="summary-box">
            <h4>Total Orders</h4>
            <h2>{orders.length}</h2>
          </div>

          <div className="summary-box buy">
            <h4>BUY</h4>
            <h2>{buyCount}</h2>
          </div>

          <div className="summary-box sell">
            <h4>SELL</h4>
            <h2>{sellCount}</h2>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Stock</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order._id}>
                  <td>{order.name}</td>

                  <td>{order.qty}</td>

                  <td>₹{Number(order.price).toLocaleString("en-IN")}</td>

                  <td>
                    <span
                      className={
                        order.mode === "BUY" ? "badge-buy" : "badge-sell"
                      }
                    >
                      {order.mode}
                    </span>
                  </td>

                  <td>₹{Number(order.totalAmount).toLocaleString("en-IN")}</td>

                  <td>
                    <span className="badge-status">{order.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
