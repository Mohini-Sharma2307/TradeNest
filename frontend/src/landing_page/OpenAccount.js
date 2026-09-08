// import React from "react";
// import { Link } from "react-router-dom";
// import "./OpenAccount.css";

// function OpenAccount() {
//   return (
//     <section className="open-account-section">
//       <div className="container">
//         <div className="open-account-content">

//           <span className="open-account-tag">
//             GET STARTED
//           </span>

//           <h2>Open your account today</h2>

//           <p>
//             Modern platforms and apps, simple investing,
//             and a seamless trading experience—all in one place.
//           </p>

//           <Link
//             to="/signup"
//             className="open-account-btn"
//           >
//             Sign up now
//           </Link>

//           <div className="open-account-features">
//             <span>✓ Easy signup</span>
//             <span>✓ Simple interface</span>
//             <span>✓ Multiple products</span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default OpenAccount;














import React from "react";
import { Link } from "react-router-dom";
import "./OpenAccount.css";

function OpenAccount() {
  return (
    <section className="open-account-section">
      <div className="container">
        <div className="open-account-content">

          {/* TAG */}
          <span className="open-account-tag">
            GET STARTED
          </span>

          {/* HEADING */}
          <h2>
            Open your account today
          </h2>

          {/* DESCRIPTION */}
          <p>
            Modern platforms and apps, simple investing,
            and a seamless trading experience—all in one place.
          </p>

          {/* BUTTON */}
          <Link
            to="/signup"
            className="open-account-btn"
          >
            Sign up now
          </Link>

          {/* FEATURES */}
          <div className="open-account-features">
            <span>✓ Easy signup</span>
            <span>✓ Simple interface</span>
            <span>✓ Multiple products</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default OpenAccount;