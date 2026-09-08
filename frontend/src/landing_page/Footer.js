

// import React from "react";
// import "./Footer.css";

// function Footer() {
//   const companyLinks = [
//     "About",
//     "Products",
//     "Pricing",
//     "Referral programme",
//     "Careers",
//     "Zerodha.tech",
//     "Press & media",
//     "Zerodha cares (CSR)",
//   ];

//   const supportLinks = [
//     "Contact",
//     "Support portal",
//     "Z-Connect blog",
//     "List of charges",
//     "Downloads & resources",
//   ];

//   const accountLinks = [
//     "Open an account",
//     "Fund transfer",
//     "60 day challenge",
//   ];

//   return (
//     <footer className="footer">
//       <div className="container">

//         {/* ================= BRAND ================= */}

//         <div className="footer-main">

//           <div className="footer-brand">

//             <img
//               src="https://zerodha.com/static/images/logo.svg"
//               alt="Zerodha"
//               className="footer-logo"
//             />

//             <p className="copyright">
//               © 2010 - 2026, Zerodha Broking Ltd.
//               <br />
//               All rights reserved.
//             </p>

//             {/* Social Icons */}

//             <div className="footer-social">

//               <a href="#twitter" aria-label="X">
//                 <img
//                   src="https://zerodha.com/static/images/x-twitter.svg"
//                   alt="X"
//                 />
//               </a>

//               <a href="#youtube" aria-label="YouTube">
//                 <img
//                   src="https://zerodha.com/static/images/youtube.svg"
//                   alt="YouTube"
//                 />
//               </a>

//               <a href="#whatsapp" aria-label="WhatsApp">
//                 <img
//                   src="https://zerodha.com/static/images/whatsapp-logo.svg"
//                   alt="WhatsApp"
//                 />
//               </a>

//             </div>

//             {/* App Download */}

//             <div className="app-buttons">

//               <a href="#google-play">
//                 <img
//                   src="https://zerodha.com/static/images/google-play-badge-light.svg"
//                   alt="Get it on Google Play"
//                 />
//               </a>

//               <a href="#app-store">
//                 <img
//                   src="https://zerodha.com/static/images/appstore-badge-light.svg"
//                   alt="Download on the App Store"
//                 />
//               </a>

//             </div>

//           </div>


//           {/* ================= COMPANY ================= */}

//           <FooterColumn
//             title="Company"
//             links={companyLinks}
//           />


//           {/* ================= SUPPORT ================= */}

//           <FooterColumn
//             title="Support"
//             links={supportLinks}
//           />


//           {/* ================= ACCOUNT ================= */}

//           <FooterColumn
//             title="Account"
//             links={accountLinks}
//           />

//         </div>


//         {/* ================= DISCLAIMER ================= */}

//         <div className="footer-disclaimer">

//           <p>
//             Zerodha Broking Ltd. is a member of NSE & BSE.
//             Securities and exchange-related services are subject
//             to applicable regulations.
//           </p>

//           <p>
//             Investments in securities market are subject to market
//             risks. Read all related documents carefully before
//             investing.
//           </p>

//           <p>
//             Prevent unauthorised transactions in your account.
//             Update your registered mobile number and email ID with
//             your broker and receive transaction information directly
//             from the exchange.
//           </p>

//           <p>
//             KYC is a one-time exercise when dealing with a SEBI
//             registered intermediary. Investors should carefully
//             verify any person claiming to provide investment or
//             trading services.
//           </p>

//           <p>
//             If you have any complaint or require assistance,
//             please contact the official support channel.
//           </p>

//         </div>


//         {/* ================= BOTTOM LINKS ================= */}

//         <div className="footer-bottom">

//           <span>Privacy</span>

//           <span>Terms & Conditions</span>

//           <span>Risk Disclosure</span>

//           <span>Policies</span>

//         </div>

//       </div>
//     </footer>
//   );
// }


// /* ================= FOOTER COLUMN ================= */

// function FooterColumn({ title, links }) {

//   return (
//     <div className="footer-column">

//       <h3>{title}</h3>

//       <ul>

//         {links.map((link, index) => (

//           <li key={index}>

//             <a
//               href={`#${link
//                 .toLowerCase()
//                 .replaceAll(" ", "-")}`}
//             >
//               {link}
//             </a>

//           </li>

//         ))}

//       </ul>

//     </div>
//   );
// }


// export default Footer;




import React from "react";
import "./Footer.css";

function Footer() {
  const companyLinks = [
    "About",
    "Products",
    "Pricing",
    "Referral programme",
    "Careers",
    "Zerodha.tech",
    "Press & media",
    "Zerodha cares (CSR)",
  ];

  const supportLinks = [
    "Contact",
    "Support portal",
    "Z-Connect blog",
    "List of charges",
    "Downloads & resources",
  ];

  const accountLinks = [
    "Open an account",
    "Fund transfer",
    "60 day challenge",
  ];

  return (
    <footer className="footer">
      <div className="container">

        {/* ================= BRAND ================= */}

        <div className="footer-main">

          <div className="footer-brand">

            <img
              src="https://zerodha.com/static/images/logo.svg"
              alt="Zerodha"
              className="footer-logo"
            />

            <p className="copyright">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            {/* SOCIAL ICONS */}

            <div className="footer-social">

              <a href="#twitter" aria-label="X">
                <img
                  src="https://zerodha.com/static/images/x-twitter.svg"
                  alt="X"
                />
              </a>

              <a href="#youtube" aria-label="YouTube">
                <img
                  src="https://zerodha.com/static/images/youtube.svg"
                  alt="YouTube"
                />
              </a>

              <a href="#whatsapp" aria-label="WhatsApp">
                <img
                  src="https://zerodha.com/static/images/whatsapp-logo.svg"
                  alt="WhatsApp"
                />
              </a>

            </div>

            {/* APP DOWNLOAD */}

            <div className="app-buttons">

              <a href="#google-play">
                <img
                  src="https://zerodha.com/static/images/google-play-badge-light.svg"
                  alt="Get it on Google Play"
                />
              </a>

              <a href="#app-store">
                <img
                  src="https://zerodha.com/static/images/appstore-badge-light.svg"
                  alt="Download on the App Store"
                />
              </a>

            </div>

          </div>

          {/* COMPANY */}

          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          {/* SUPPORT */}

          <FooterColumn
            title="Support"
            links={supportLinks}
          />

          {/* ACCOUNT */}

          <FooterColumn
            title="Account"
            links={accountLinks}
          />

        </div>

        {/* ================= DISCLAIMER ================= */}

        <div className="footer-disclaimer">

          <p>
            Zerodha Broking Ltd. is a member of NSE & BSE.
            Securities and exchange-related services are subject
            to applicable regulations.
          </p>

          <p>
            Investments in securities market are subject to market
            risks. Read all related documents carefully before
            investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account.
            Update your registered mobile number and email ID with
            your broker and receive transaction information directly
            from the exchange.
          </p>

          <p>
            KYC is a one-time exercise when dealing with a SEBI
            registered intermediary. Investors should carefully
            verify any person claiming to provide investment or
            trading services.
          </p>

          <p>
            If you have any complaint or require assistance,
            please contact the official support channel.
          </p>

        </div>

        {/* ================= BOTTOM LINKS ================= */}

        <div className="footer-bottom">

          <span>Privacy</span>

          <span>Terms & Conditions</span>

          <span>Risk Disclosure</span>

          <span>Policies</span>

        </div>

      </div>
    </footer>
  );
}


/* ================= FOOTER COLUMN ================= */

function FooterColumn({ title, links }) {
  return (
    <div className="footer-column">

      <h3>{title}</h3>

      <ul>

        {links.map((link, index) => (
          <li key={index}>

            <a
              href={`#${link
                .toLowerCase()
                .replaceAll(" ", "-")}`}
            >
              {link}
            </a>

          </li>
        ))}

      </ul>

    </div>
  );
}

export default Footer;