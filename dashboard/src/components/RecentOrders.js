import React, {
  useEffect,
  useState,
  useContext,
} from "react";

import API from "../api/api";
import GeneralContext from "./GeneralContext";

import "./RecentOrders.css";

const RecentOrders = () => {
  const { refreshData } = useContext(GeneralContext);

  const [orders, setOrders] = useState([]);

  // =========================
  // LOAD RECENT ORDERS
  // =========================

  useEffect(() => {
    loadOrders();
  }, [refreshData]);

  const loadOrders = async () => {
    try {
      const res = await API.get("/order/recent");

      console.log(
        "Updated Recent Orders:",
        res.data.orders
      );

      setOrders(res.data.orders || []);
    } catch (err) {
      console.log(
        "Recent Orders Error:",
        err
      );
    }
  };

  return (
    <div className="recent-orders">

      <h3>📋 Recent Orders</h3>

      <table>
        <thead>
          <tr>
            <th>Stock</th>
            <th>Type</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order._id}>

                <td>
                  {order.name}
                </td>

                <td
                  className={
                    order.mode === "BUY"
                      ? "buy-text"
                      : "sell-text"
                  }
                >
                  {order.mode}
                </td>

                <td>
                  {order.qty}
                </td>

                <td>
                  ₹{order.price}
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="4"
                style={{
                  textAlign: "center",
                  padding: "20px",
                }}
              >
                No recent orders
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default RecentOrders;