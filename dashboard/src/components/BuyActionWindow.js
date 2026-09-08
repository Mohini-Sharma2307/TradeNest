// import React, { useState, useContext } from "react";
// import { Link } from "react-router-dom";

// import API from "../api/api";
// import GeneralContext from "./GeneralContext";
// import toast from "react-hot-toast";

// import "./BuyActionWindow.css";

// const BuyActionWindow = ({ uid }) => {
//   const {
//     closeBuyWindow,
//     refreshDashboard,
//   } = useContext(GeneralContext);

//   const [stockQuantity, setStockQuantity] = useState(1);
//   const [stockPrice, setStockPrice] = useState(0.0);

//   // =========================
//   // CANCEL
//   // =========================

//   const handleCancelClick = (e) => {
//     e.preventDefault();
//     closeBuyWindow();
//   };

//   // =========================
//   // BUY STOCK
//   // =========================

//   const handleBuyClick = async (e) => {
//     e.preventDefault();

//     const quantity = Number(stockQuantity);
//     const price = Number(stockPrice);

//     // Validation
//     if (!quantity || quantity <= 0) {
//       toast.error("Please enter a valid quantity");
//       return;
//     }

//     if (!price || price <= 0) {
//       toast.error("Please enter a valid price");
//       return;
//     }

//     try {
//       const res = await API.post("/order/buy", {
//         name: uid,
//         qty: quantity,
//         price: price,
//       });

//       console.log("Buy Order Response:", res.data);

//       // =========================
//       // SUCCESS
//       // =========================

//       if (res.data.success) {
//         toast.success(
//           res.data.message ||
//             "Stock Purchased Successfully"
//         );

//         // Dashboard refresh
//         if (typeof refreshDashboard === "function") {
//           refreshDashboard();
//         }

//         // Close buy window
//         closeBuyWindow();

//         return;
//       }

//       // =========================
//       // BACKEND ERROR
//       // =========================

//       toast.error(
//         res.data.message ||
//           "Unable to Purchase Stock"
//       );

//     } catch (err) {
//       console.log(
//         "Buy Order Error:",
//         err.response?.data || err.message
//       );

//       toast.error(
//         err.response?.data?.message ||
//           "Unable to Purchase Stock"
//       );
//     }
//   };

//   return (
//     <div
//       className="container"
//       id="buy-window"
//       draggable="true"
//     >
//       {/* =========================
//           ORDER INPUTS
//       ========================= */}

//       <div className="regular-order">
//         <div className="inputs">

//           {/* QUANTITY */}

//           <fieldset>
//             <legend>Qty.</legend>

//             <input
//               type="number"
//               name="qty"
//               id="qty"
//               min="1"
//               onChange={(e) =>
//                 setStockQuantity(e.target.value)
//               }
//               value={stockQuantity}
//             />
//           </fieldset>

//           {/* PRICE */}

//           <fieldset>
//             <legend>Price</legend>

//             <input
//               type="number"
//               name="price"
//               id="price"
//               min="0"
//               step="0.05"
//               onChange={(e) =>
//                 setStockPrice(e.target.value)
//               }
//               value={stockPrice}
//             />
//           </fieldset>

//         </div>
//       </div>

//       {/* =========================
//           BUTTONS
//       ========================= */}

//       <div className="buttons">

//         <span>
//           Margin required ₹140.65
//         </span>

//         <div>

//           <Link
//             to=""
//             className="btn btn-blue"
//             onClick={handleBuyClick}
//           >
//             Buy
//           </Link>

//           <Link
//             to=""
//             className="btn btn-grey"
//             onClick={handleCancelClick}
//           >
//             Cancel
//           </Link>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyActionWindow;













import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import API from "../api/api";
import GeneralContext from "./GeneralContext";
import toast from "react-hot-toast";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const {
    closeBuyWindow,
    refreshDashboard,
    refreshPositions,
  } = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  // =========================
  // CANCEL
  // =========================

  const handleCancelClick = (e) => {
    e.preventDefault();
    closeBuyWindow();
  };

  // =========================
  // BUY STOCK
  // =========================

  const handleBuyClick = async (e) => {
    e.preventDefault();

    const quantity = Number(stockQuantity);
    const price = Number(stockPrice);

    // Validation
    if (!quantity || quantity <= 0) {
      toast.error("Please enter a valid quantity");
      return;
    }

    if (!price || price <= 0) {
      toast.error("Please enter a valid price");
      return;
    }

    try {
      const res = await API.post("/order/buy", {
        name: uid,
        qty: quantity,
        price: price,
      });

      console.log("Buy Order Response:", res.data);

      // =========================
      // SUCCESS
      // =========================

      if (res.data.success) {
        toast.success(
          res.data.message ||
            "Stock Purchased Successfully"
        );

        // Dashboard refresh
        if (typeof refreshDashboard === "function") {
          refreshDashboard();
        }

        // Positions refresh
        if (typeof refreshPositions === "function") {
          refreshPositions();
        }

        // Close buy window
        closeBuyWindow();

        return;
      }

      // =========================
      // BACKEND ERROR
      // =========================

      toast.error(
        res.data.message ||
          "Unable to Purchase Stock"
      );

    } catch (err) {
      console.log(
        "Buy Order Error:",
        err.response?.data || err.message
      );

      toast.error(
        err.response?.data?.message ||
          "Unable to Purchase Stock"
      );
    }
  };

  return (
    <div
      className="container"
      id="buy-window"
      draggable="true"
    >
      {/* =========================
          ORDER INPUTS
      ========================= */}

      <div className="regular-order">
        <div className="inputs">

          {/* QUANTITY */}

          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              name="qty"
              id="qty"
              min="1"
              onChange={(e) =>
                setStockQuantity(e.target.value)
              }
              value={stockQuantity}
            />
          </fieldset>

          {/* PRICE */}

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              name="price"
              id="price"
              min="0"
              step="0.05"
              onChange={(e) =>
                setStockPrice(e.target.value)
              }
              value={stockPrice}
            />
          </fieldset>

        </div>
      </div>

      {/* =========================
          BUTTONS
      ========================= */}

      <div className="buttons">

        <span>
          Margin required ₹140.65
        </span>

        <div>

          <Link
            to=""
            className="btn btn-blue"
            onClick={handleBuyClick}
          >
            Buy
          </Link>

          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>

        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;