// import "./App.css";

// import React, { useEffect, useState } from "react";

// import ScrollToTop from "./ScrollToTop";
// import { useNavigate } from "react-router-dom";

// // import prawn1 from "../assets/prawn1.jpg";

// const TradingHome = () => {
//   const [activeSlide, setActiveSlide] = useState(0); 
//   return (
//     <div style={styles.app}>

//  <ScrollToTop /> 
//       {/* <Header /> */}

//       <Header setActiveSlide={setActiveSlide} />
//       {/* <Hero /> */}
//       <SubHeader /> 
//       {/* <Markets /> */}
//       {/* <ImportExportSection /> */}
//       <ImportExportSection 
//   activeSlide={activeSlide} 
//   setActiveSlide={setActiveSlide} 
// />
//       {/* <Services /> */}
//       <AboutSection />
//       <ContactSection />
//       <Footer />
//     </div>
//   );
// };

// // const Header = () => {
//   const Header = ({ setActiveSlide }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   // Detect screen resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <header style={styles.header}>
//       <div style={styles.headerInner}>

//         {/* LOGO */}
//         <img
//           // src="tradeinglogo.jpeg"
//           src={process.env.PUBLIC_URL + "/tradeinglogo.jpeg"}
//           alt="Logo"
//           style={styles.logoImg}
//           onClick={() => (window.location.href = "#home")}
//         />

//         {/* HAMBURGER (ONLY MOBILE) */}
//         {isMobile && (
//           <div
//             style={styles.hamburger}
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             {menuOpen ? "✖" : "☰"}
//           </div>
//         )}

//         {/* NAV */}
//         {(!isMobile || menuOpen) && (
//           // <nav
//           //   style={{
//           //     ...styles.nav,
//           //     ...(isMobile ? styles.navOpen : {}),
//           //   }}
//           // >
//           //   <a onClick={() => setMenuOpen(false)} href="#home" style={styles.navLink}>Home</a>
//           //    <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Import</a>
//           //     <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Export</a>
//           //   <a onClick={() => setMenuOpen(false)} href="#about" style={styles.navLink}>About us</a>
//           //   <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Services</a>
//           //    <a onClick={() => setMenuOpen(false)} href="#" style={styles.navLink}>Contact</a>
             
//           // </nav>

// <nav
//   style={{
//     ...styles.nav,
//     ...(isMobile ? styles.navOpen : {}),
//   }}
// >
//   <a onClick={() => setMenuOpen(false)} href="#home" style={styles.navLink}>
//     Home
//   </a>
// {/* 
//   <a onClick={() => setMenuOpen(false)} href="#imports" style={styles.navLink}>
//     Import
//   </a>

//   <a onClick={() => setMenuOpen(false)} href="#exports" style={styles.navLink}>
//     Export
//   </a> */}

// <a
//   onClick={() => {
//     setMenuOpen(false);
//     setActiveSlide(1);   // 👈 go to imports slide
//   }}
//   href="#imports-exports"
//   style={styles.navLink}
// >
//   Import
// </a>

// <a
//   onClick={() => {
//     setMenuOpen(false);
//     setActiveSlide(6);   // 👈 exports slide
//   }}
//   href="#imports-exports"
//   style={styles.navLink}
// >
//   Export
// </a>


//   {/* <a onClick={() => setMenuOpen(false)} href="#services" style={styles.navLink}>
//     Services
//   </a> */}

//   <a onClick={() => setMenuOpen(false)} href="#about" style={styles.navLink}>
//     About us
//   </a>


//   <a onClick={() => setMenuOpen(false)} href="#contact" style={styles.navLink}>
//     Contact
//   </a>

//   {/* Optional */}
  
// </nav>

//         )}

//       </div>
//     </header>
//   );
// };



// const MenuItem = ({ text, onClick }) => {
//   return (
//     <div 
//       style={styles.menuItem}
//       onClick={onClick}
//       onMouseEnter={(e) => {
//         e.currentTarget.querySelector(".underline").style.width = "100%";
//       }}
//       onMouseLeave={(e) => {
//         e.currentTarget.querySelector(".underline").style.width = "0%";
//       }}
//     >
//       {text}
//       <div className="underline" style={styles.underline}></div>
//     </div>
//   );
// };


// // const Hero = () => {
// //   const [index, setIndex] = useState(0);
 
// // const navigate = useNavigate();
// //   const images = [
// //     process.env.PUBLIC_URL + "/fishone.jpg",
// //     process.env.PUBLIC_URL + "/import.jpg",
// //     process.env.PUBLIC_URL + "/fishesfour.png"
// //   ];

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       setIndex((prev) => (prev + 1) % images.length);
// //     }, 3000);

// //     return () => clearInterval(timer);
// //   }, []);

// //   return (
// //     <section id="home" style={styles.hero}>
// //       {images.map((img, i) => (
// //         <img
// //           key={i}
// //           src={img}
// //           alt="Trading"
// //           style={{
// //             ...styles.heroImg,
// //             opacity: i === index ? 1 : 0,
// //           }}
// //         />
// //       ))}


// //       {/* POPUP */}
  
// //     </section>
// //   );
// // };


// const Hero = () => {
//   const [index, setIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

//   const images = [
//     process.env.PUBLIC_URL + "/fishone.jpg",
//     process.env.PUBLIC_URL + "/import.jpg",
//     process.env.PUBLIC_URL + "/fishesfour.png"
//   ];

//   // slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(timer);
//   }, []);

//   // mobile detect
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <section
//       id="home"
//       style={{
//         ...styles.hero,
//         ...(isMobile ? styles.heroMobile : {}),
//       }}
//     >
//       {images.map((img, i) => (
//         <img
//           key={i}
//           src={img}
//           alt="Trading"
//           style={{
//             ...styles.heroImg,
//             ...(isMobile ? styles.heroImgMobile : {}),
//             opacity: i === index ? 1 : 0,
//           }}
//         />
//       ))}
//     </section>
//   );
// };


// const SubHeader = () => {
//   return (
//     <section style={styles.subHeader}>
//       <div style={styles.subHeaderContent}>
//         <h1>Fresh Seafood. Trusted Global Supply.</h1>
//         <p>Premium Fish • Quality Prawns • Worldwide Export</p>

//         {/* <button 
//           style={styles.heroBtn}
//           onClick={() => {
//             const section = document.getElementById("imports-exports");
//             section.scrollIntoView({ behavior: "smooth" });
//           }}
//         >
//           Explore
//         </button> */}
//       </div>
//     </section>
//   );
// };


// const marketImages = [
//   "https://5.imimg.com/data5/GF/CU/MY-2050439/white-prawn-shrimp-500x500.jpg",
//   "https://zubairrabbani.com/wp-content/uploads/2024/05/Seafood-Captions-For-Instagram-1024x1024.webp",
//   "https://static01.nyt.com/images/2018/01/16/science/00TB-FOODWEB-promo/00TB-FOODWEB2-superJumbo.jpg",
//   "https://www.tradeimex.in/blogs/uploads/images/202507/img_w860_687e23f818b0e6-94738744.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTarLmFVTdMHCT4XjXYzUOQfLv9fosWTu59iQ&s",
//   "https://5.imimg.com/data5/LH/HV/WC/SELLER-9549927/seafood-500x500.jpg",
//   "https://www.foodandwine.com/thmb/ClPnka2WSnl5PtrMYOjlmXsXw1k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/escovitch-fish-FT-RECIPE0920-8a733638c2ba4b72b48737782fa616c2.jpg",
// ];

// function Markets() {
//   const sliderRef = React.useRef(null);
//   const [zoomImg, setZoomImg] = useState(null);

//   const handleWheel = (e) => {
//     e.preventDefault();
//     sliderRef.current.scrollLeft += e.deltaY;
//   };

//   return (
//     <>
//       <div className="markets-container" id="markets">
//         <h2 className="markets-title">Markets</h2>

//         <div
//           className="markets-slider"
//           ref={sliderRef}
//           onWheel={handleWheel}
//         >
//           {marketImages.map((img, index) => (
//             <div
//               className="market-card"
//               key={index}
//               onClick={() => setZoomImg(img)}
//             >
//               <img src={img} alt="market" />
//             </div>
//           ))}
//         </div>
//       </div>

      
//       {zoomImg && (
//         <div
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.8)",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             zIndex: 9999,
//             cursor: "pointer",
//           }}
//           onClick={() => setZoomImg(null)}
//         >
//           <img
//             src={zoomImg}
//             alt="zoom"
//             style={{
//               maxWidth: "190%",
//               maxHeight: "190%",
//               borderRadius: "10px",
//               boxShadow: "0 0 20px #000",
//             }}
//           />
//         </div>
//       )}
//     </>
//   );
// }

// const Services = () => {
//   return (
//     <section className="services-section" id="services">
//       <div className="services-overlay">

//         <h2 className="services-title">Our Services</h2>

//         <div className="services-content">

//           <div className="service-box fade-in">
//             <h3>Fresh Fish Export</h3>
//             <p>Supplying premium quality fresh and frozen fish worldwide.</p>
//           </div>

//           <div className="service-box slide-up">
//             <h3>Prawn Processing & Export</h3>
//             <p>Hygienic cleaning, grading, freezing, and national shipping.</p>
//           </div>

//           <div className="service-box fade-in">
//             <h3>Seafood Cold Storage</h3>
//             <p>Temperature-controlled storage for long-lasting freshness</p>
//           </div>

//           <div className="service-box slide-up">
//             <h3>24/7 Support</h3>
//             <p>Always here for you</p>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// };




// const ImportExportSection = () => {
//   const navigate = useNavigate();

//   // Navigation handlers
//   const handleImportClick = () => navigate("/imports-exports");
//   const handleExportClick = () => navigate("/imports-exports");

//   return (
//     <section id="imports-exports" style={styles.importExportSection}>
//       <h2 style={styles.sectionTitle}>Imports & Exports</h2>

//       <div style={styles.gridContainer}>
//         {/* --- IMPORT CARD --- */}
//         <div style={styles.importExportCard} onClick={handleImportClick}>
//           <div style={styles.imageWrapper}>
//             <img
//               src="https://static.vecteezy.com/system/resources/thumbnails/020/173/239/small/global-business-logistics-transport-import-export-and-international-trade-concept-logistics-distribution-of-containers-cargo-freight-ship-train-truck-and-plane-transportation-industry-background-photo.jpg"
//               style={styles.importExportImg}
//               alt="Imports"
//             />
//           </div>
//           <div style={styles.cardContent}>
//             <h3>Imports</h3>
//             <p>High-quality seafood and feed sourced globally.</p>
//           </div>
//         </div>

//         {/* --- EXPORT CARD --- */}
//         <div style={styles.importExportCard} onClick={handleExportClick}>
//           <div style={styles.imageWrapper}>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75hzrt-cwrOqmIMGXWOP3aNi4RQSfHgesVA&s"
//               style={styles.importExportImg}
//               alt="Exports"
//             />
//           </div>
//           <div style={styles.cardContent}>
//             <h3>Exports</h3>
//             <p>Trusted export services delivering worldwide freshness.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// const Service = ({ title, text }) => (
//   <div style={styles.serviceCard}>
//     <h3>{title}</h3>
//     <p>{text}</p>
//   </div>
// );

// const AboutSection = () => {
//   return (
//     <section id="about" style={styles.aboutSection}>
//       <h2 style={styles.sectionTitle}>About Us</h2>

//       <p style={styles.aboutText}>
//         UPIN Trading Corporation is a trusted name in imports and exports,
//         specializing in high-quality seafood, aquaculture feed, and industrial
//         solutions. We are committed to delivering premium products and reliable
//         services to customers across the globe.
//       </p>

//       <p style={styles.aboutText}>
//         With a focus on quality, sustainability, and customer satisfaction,
//         we ensure excellence in every stage — from sourcing to delivery.
//       </p>
//     </section>
//   );
// };




// const ContactSection = () => {
//   return (
//     <section id="contact" style={styles.contactSection}>
//       <h2 style={styles.sectionTitle}>Contact Us</h2>

//       <form
//         style={styles.contactForm}
//         onSubmit={(e) => {
//           e.preventDefault();

//           const name = e.target[0].value;
//           const phone = e.target[1].value;
//           const email = e.target[2].value;
//           const message = e.target[3].value;

//           const text = `Hello, I have a new enquiry:%0A
// Name: ${name}%0A
// Phone: ${phone}%0A
// Email: ${email}%0A
// Message: ${message}`;

//           const whatsappNumber = "919347719244";

//           window.open(
//             `https://wa.me/${whatsappNumber}?text=${text}`,
//             "_blank"
//           );

//           e.target.reset();
//         }}
//       >
//         <input type="text" placeholder="Your Name" style={styles.input} required />
//         <input type="tel" placeholder="Mobile Number" style={styles.input} required />
//         <input type="email" placeholder="Email Address" style={styles.input} />
//         <textarea placeholder="Your Message" rows="4" style={styles.textarea}></textarea>

//         <button type="submit" style={styles.submitBtn}>
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// const Footer = () => {
//   return (
//     <footer id="contact" style={styles.footer}>
      
//       {/* TOP ROW (ALL IN ONE LINE) */}
//       <div style={styles.footerTop}>
//         <span>UPIN TRADING CORPORATION</span>
//         <span>📍 Hyderabad, India</span>
//         <span>📧 upintrad@123.com</span>
//         <span>📞 +91 93477 19244</span>
//       </div>

//       {/* BOTTOM ROW */}
//       <p style={styles.footerBottom}>
//         © 2026 UPIN Tradeing Corporation. All Rights Reserved.
//       </p>

//     </footer>
//   );
// };

// const styles = {
// importExportSection: {
//     padding: "50px 20px",
//     textAlign: "center",
//   },
//   sectionTitle: {
//     fontSize: "2rem",
//     marginBottom: "30px",
//   },
//   gridContainer: {
//     display: "flex",
//     justifyContent: "center",
//     gap: "20px",
//     flexWrap: "wrap",
//   },
//   importExportCard: {
//     width: "300px",
//     border: "1px solid #ddd",
//     borderRadius: "12px",
//     overflow: "hidden",
//     cursor: "pointer",
//     transition: "transform 0.3s ease, box-shadow 0.3s ease",
//     backgroundColor: "#fff",
//   },
//   imageWrapper: {
//     width: "100vh",
//     height: "200px",
//     overflow: "hidden",
//   },
//   importExportImg: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
//   cardContent: {
//     padding: "15px",
//   },
//   contactSection: {
//   padding: "60px 20px",
//   background: "#ffffff",
//   textAlign: "center",
// },

// contactForm: {
//   maxWidth: "500px",
//   margin: "0 auto",
//   display: "flex",
//   flexDirection: "column",
//   gap: "15px",
// },

// input: {
//   padding: "12px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   fontSize: "14px",
// },

// textarea: {
//   padding: "12px",
//   borderRadius: "6px",
//   border: "1px solid #ccc",
//   fontSize: "14px",
// },

// submitBtn: {
//   padding: "12px",
//   background: "#00b4d8",
//   color: "#fff",
//   border: "none",
//   borderRadius: "6px",
//   cursor: "pointer",
//   fontWeight: "bold",
// },

  
// aboutSection: {
//   padding: "15px 20px",
//   background: "#f4f8fb",
//   textAlign: "center",
// },

// aboutText: {
//   maxWidth: "800px",
//   margin: "10px auto",
//   fontSize: "16px",
//   color: "#333",
//   lineHeight: "1.6",
// },
// sliderTrack: {
//   display: "flex",
//   width: "200%", // 2 slides
//   transition: "0.6s ease-in-out",
// },
// sliderWrapper: {
//   position: "relative",
//   overflow: "hidden",
//   height: "350px",
// },
// // slide: {
// //   position: "absolute",
// //   width: "100%",
// //   display: "flex",
// //   justifyContent: "center",
// //   gap: "40px",
// //   transition: "0.6s ease",
// // },

// slide: {
//   position: "absolute",
//   width: "100%",
//   display: "flex",
//   justifyContent: "center",
//   gap: "40px",
//   transition: "0.6s ease",
//   transition: "transform 0.6s ease, opacity 0.6s ease",
//   zIndex: 1, // 👈 ADD THIS
// },

// importExportContainer: {
//   display: "flex",
//   justifyContent: "center",
//   gap: "40px",
//   flexWrap: "wrap",
//   transition: "all 0.6s ease",
//   width: "100%",
// },
// sectionTitle: {
//   fontSize: "36px",
//   marginBottom: "50px",
//   color: "#0d1b2a",
//   textAlign: "center",   // ✅ correct way
// },

// importExportContainer: {
//   display: "flex",
//   justifyContent: "center",
//   gap: "40px",
//   flexWrap: "wrap",
// },

// // importExportCard: {
// //   width: "320px",
// //   borderRadius: "15px",
// //   overflow: "hidden",
// //   background: "#fff",
// //   boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
// //   transition: "0.4s",
// //   cursor: "pointer",
  
// // },

// importExportCard: {
//   width: "100%",          // 🔥 full width on small screens
//   maxWidth: "320px",      // 🔥 limit size on large screens
//   borderRadius: "15px",
//   overflow: "hidden",
//   background: "#fff",
//   boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
//   transition: "0.4s",
//   cursor: "pointer",
//   flex: "1 1 280px",  
//   height: "45vh",  
//     // 🔥 responsive grid behavior
// },

// imageWrapper: {
//   position: "relative",
//   height: "200px",
//   overflow: "hidden",
// },

// importExportImg: {
//   width: "100%",
//   height: "85%",
//   objectFit: "cover",
//   transition: "0.5s",
// },

// overlay: {
//   position: "absolute",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "100%",
//   background: "rgba(0,0,0,0.3)",
// },

// cardContent: {
//   padding: "0px",
//   textAlign: "center",
//   marginTop: "-20px",
// },

// cardBtn: {
//   marginTop: "10px",
//   padding: "10px 20px",
//   border: "none",
//   background: "#00b4d8",
//   color: "#fff",
//   borderRadius: "5px",
//   cursor: "pointer",
// },
  
// underline: {
//   height: "2px",
//   width: "0%",
//   background: "#00b4d8",
//   position: "absolute",
//   bottom: "0",
//   left: "0",
//   transition: "0.3s ease",
// },

// menuItem: {
//   padding: "10px 15px",
//   fontSize: "16px",
//   cursor: "pointer",
//   position: "relative",
// },

//   underline: {
//   height: "2px",
//   width: "0%",
//   background: "#00b4d8",
//   position: "absolute",
//   bottom: "0",
//   left: "0",
//   transition: "0.3s ease",
// },
// subDropdown: {
//   position: "absolute",
//   top: "0",
//   left: "100%",   // 👈 attach directly (no gap)
//   marginLeft: "0px", // remove gap
//   background: "#f1f1f1",
//   borderRadius: "8px",
//   padding: "10px",
//   minWidth: "140px",
// },
  
// popup: {
//   position: "fixed",
//   top: "0",
//   left: "0",
//   width: "100%",
//   height: "100%",
//   background: "rgba(0,0,0,0.6)",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   zIndex: 9999,
// },

// popupContent: {
//   background: "#fff",
//   padding: "30px",
//   borderRadius: "10px",
//   minWidth: "300px",
//   display: "flex",            // 🔥 makes items side by side
//   justifyContent: "space-around",
//   alignItems: "center",
//   gap: "40px",
// },


// menuItem: {
//   padding: "10px",
//   fontSize: "18px",
//   cursor: "pointer",
//   position: "relative", // ✅ required
// },
// dropdown: {
//   position: "absolute",
//   top: "40px",
//   left: "50%",
//   transform: "translateX(-50%)",
//   background: "#f1f1f1",
//   borderRadius: "8px",
//   padding: "10px",
//   minWidth: "120px",
// },

// dropdownItem: {
//   padding: "8px",
//   cursor: "pointer",
// },
// dropdownItemWrapper: {
//   position: "relative",
// },

// nav: {
//   display: "flex",
//   alignItems: "center",
//   gap: "20px",
// },

// hamburger: {
//   fontSize: "32px",
//   cursor: "pointer",
//   userSelect: "none",
//   zIndex: 9999,
// //   width: "80%",
// },

// logoImg: {
//   height: "50px",
//   maxWidth: "185px",
//   objectFit: "contain",
// },

// // navOpen: {
// //   position: "absolute",
// //   top: "90px",
// //   left: 0,
// //   width: "100%",
// //   background: "#fff",
// //   flexDirection: "column",
// //   alignItems: "center",
// //   padding: "25px 0",
// //   boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
// //   animation: "slideDown 0.3s ease",
// // },

//  navOpen: { position: "absolute", top: "70px", left: 0, width: "100%", background: "#fff", flexDirection: "column", padding: "20px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" },


// app: {
//   fontFamily: "Arial, sans-serif",
//   background: "#f9fafc",
//   paddingTop: "70px",
// },
// logoImg:{
//     height: "50px",
//     width: "170px",
// },

//   header: {
//     background: "#ffffff",
//     color: "#180e0e",
//     // padding: "30px 30px",
//     padding: "12px 20px",
// boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//     marginLeft: "-8px",
//     // position: "sticky",
//     position: "fixed",
// width: "100%",

//     top: 0,
//     zIndex: 100,
//   },

// headerInner: {
//   display: "flex",
//   justifyContent: "space-between",
//   alignItems: "center",
//   width: "80%",
//   maxWidth: "1200px",
//   margin: "0 auto",
// },

//   logo: {
//     margin: 0,
//   },

// navLink: {
//   margin: "10px 0",
//   color: "black",
//   textDecoration: "none",
//   fontWeight: "bold",
//   fontSize: "16px",
// },

//   loginBtn: {
//     background: "#00b4d8",
//     border: "none",
//     color: "#fff",
//     padding: "8px 16px",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// subHeader: {
//   padding: "80px 20px",
//   background: "linear-gradient(180deg, #ffffff, #f4f8fb)",
//   textAlign: "center",
// },

// subHeaderContent: {
//   maxWidth: "800px",
//   margin: "0 auto",
//   backgroundColor: "white",
// },

//   // hero: {
//   //   height: "80vh",
//   //   position: "relative",
//   //   overflow: "hidden",
//   // },

//   // heroImg: {
//   //   position: "absolute",
//   //   width: "100%",
//   //   height: "100%",
//   //   objectFit: "cover",
//   //   transition: "1s",
//   // },
  
//   hero: {
//   height: "80vh",
//   position: "relative",
//   overflow: "hidden",
// },

// // 📱 MOBILE HEIGHT REDUCE
// heroMobile: {
//   height: "30vh",   // 👈 reduce height
// },

// heroImg: {
//   position: "absolute",
//   width: "100%",
//   height: "100%",
//   objectFit: "cover",
//   transition: "1s",
// },

// // 📱 MOBILE IMAGE FIX
// heroImgMobile: {
//   objectFit: "contain",   // 👈 no zoom
//   backgroundColor: "#000", // optional (for empty space)
// },
  
  
// heroContent: {
//   position: "absolute",
//   bottom: "100px",   // 👈 moves text to bottom
//   left: "50%",
//   transform: "translateX(-50%)",
//   textAlign: "center",
//   color: "#fff",
// },
//   heroBtn: {
//     background: "#00b4d8",
//     border: "none",
//     color: "#fff",
//     padding: "12px 25px",
//     marginTop: "15px",
//     fontSize: "16px",
//     cursor: "pointer",
//     borderRadius: "5px",
//   },

//   section: {
//     padding: "60px 30px",
//     textAlign: "center",
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
//     gap: "25px",
//     marginTop: "30px",
//   },

//   card: {
//     background: "#fff",
//     borderRadius: "10px",
//     overflow: "hidden",
//     boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//   },

//   services: {
//     background: "#0d1b2a",
//     color: "#fff",
//     padding: "60px 30px",
//     textAlign: "center",
//   },

//   serviceGrid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
//     gap: "25px",
//     marginTop: "30px",
//   },

//   serviceCard: {
//     background: "#1b263b",
//     padding: "25px",
//     borderRadius: "10px",
//   },

  
//   footer: {
//   background: "#0d1b2a",
//   color: "#fff",
//   padding: "10px 20px",   // 🔥 reduced height
//   textAlign: "center",
//   fontSize: "14px",
//   marginTop: "16px",
// },

// footerTop: {
//   display: "flex",
//   justifyContent: "center",
//   gap: "25px",
//   flexWrap: "wrap", // responsive
//   alignItems: "center",
// },

// footerBottom: {
//   marginTop: "5px",
//   fontSize: "12px",
//   opacity: 0.8,
// },
// };

// export default TradingHome;

import "./App.css";

import React, { useEffect, useState } from "react";

import ScrollToTop from "./ScrollToTop";
import { useNavigate } from "react-router-dom";

const TradingHome = () => {
  const [activeSlide, setActiveSlide] = useState(0); 
  return (
    <div style={styles.app}>
      <ScrollToTop /> 
      <Header setActiveSlide={setActiveSlide} />
      {/* <Hero />  */}
      <SubHeader /> 
      <ImportExportSection 
        activeSlide={activeSlide} 
        setActiveSlide={setActiveSlide} 
      />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

const Header = ({ setActiveSlide }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // Track which link is being hovered
  const [hoveredLink, setHoveredLink] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", type: "scroll" },
    { name: "Import", href: "#imports-exports", type: "slide", value: 1 },
    { name: "Export", href: "#imports-exports", type: "slide", value: 6 },
    { name: "About us", href: "#about", type: "scroll" },
    { name: "Contact", href: "#contact", type: "scroll" },
  ];

  return (
    <header style={styles.header}>
      <div style={styles.headerInner}>
        <img
          src={process.env.PUBLIC_URL + "/tradeinglogo.jpeg"}
          alt="Logo"
          style={styles.logoImg}
          onClick={() => (window.location.href = "#home")}
        />

        {isMobile && (
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? "✖" : "☰"}
          </div>
        )}

        {(!isMobile || menuOpen) && (
          <nav style={{ ...styles.nav, ...(isMobile ? styles.navOpen : {}) }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                onClick={() => {
                  setMenuOpen(false);
                  if (link.type === "slide") setActiveSlide(link.value);
                }}
                style={{
                  ...styles.navLink,
                  backgroundImage: "linear-gradient(red, red)",
                  backgroundSize: hoveredLink === link.name ? "100% 2px" : "0% 2px",
                  backgroundPosition: "left bottom",
                  backgroundRepeat: "no-repeat",
                  transition: "background-size 0.3s ease",
                  paddingBottom: "5px",
                  display: "inline-block"
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

// ... Rest of your components (Hero, SubHeader, etc.) remain exactly the same ...

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const images = [
    process.env.PUBLIC_URL + "/fishone.jpg",
    process.env.PUBLIC_URL + "/import.jpg",
    process.env.PUBLIC_URL + "/fishesfour.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      style={{
        ...styles.hero,
        ...(isMobile ? styles.heroMobile : {}),
      }}
    >
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt="Trading"
          style={{
            ...styles.heroImg,
            ...(isMobile ? styles.heroImgMobile : {}),
            opacity: i === index ? 1 : 0,
          }}
        />
      ))}
    </section>
  );
};

const SubHeader = () => {
  return (
    <section style={styles.subHeader}>
      <div style={styles.subHeaderContent}>
        <h1>Fresh Seafood. Trusted Global Supply.</h1>
        <p>Premium Fish • Quality Prawns • Worldwide Export</p>
      </div>
    </section>
  );
};

const ImportExportSection = () => {
  const navigate = useNavigate();
  const handleImportClick = () => navigate("/imports-exports");
  const handleExportClick = () => navigate("/imports-exports");

  return (
    <section id="imports-exports" style={styles.importExportSection}>
      <h2 style={styles.sectionTitle}>Imports & Exports</h2>
      <div style={styles.gridContainer}>
        <div style={styles.importExportCard} onClick={handleImportClick}>
          <div style={styles.imageWrapper}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/020/173/239/small/global-business-logistics-transport-import-export-and-international-trade-concept-logistics-distribution-of-containers-cargo-freight-ship-train-truck-and-plane-transportation-industry-background-photo.jpg"
              style={styles.importExportImg}
              alt="Imports"
            />
          </div>
          <div style={styles.cardContent}>
            <h3>Imports</h3>
            <p>High-quality seafood and feed sourced globally.</p>
          </div>
        </div>

        <div style={styles.importExportCard} onClick={handleExportClick}>
          <div style={styles.imageWrapper}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT75hzrt-cwrOqmIMGXWOP3aNi4RQSfHgesVA&s"
              style={styles.importExportImg}
              alt="Exports"
            />
          </div>
          <div style={styles.cardContent}>
            <h3>Exports</h3>
            <p>Trusted export services delivering worldwide freshness.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" style={styles.aboutSection}>
      <h2 style={styles.sectionTitle}>About Us</h2>
      <p style={styles.aboutText}>
        UPIN Trading Corporation is a trusted name in imports and exports...specializing in high-quality seafood, aquaculture feed, and industrial
         solutions. We are committed to delivering premium products and reliable
         services to customers across the globe.
      </p>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" style={styles.contactSection}>
      <h2 style={styles.sectionTitle}>Contact Us</h2>
      <form
        style={styles.contactForm}
        onSubmit={(e) => {
          e.preventDefault();
          const whatsappNumber = "919347719244";
          window.open(`https://wa.me/${whatsappNumber}?text=Enquiry`, "_blank");
        }}
      >
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="tel" placeholder="Mobile Number" style={styles.input} required />
        <textarea placeholder="Your Message" rows="4" style={styles.textarea}></textarea>
        <button type="submit" style={styles.submitBtn}>Send Message</button>
      </form>
    </section>
  );
};

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.footerTop}>
        <span>UPIN TRADING CORPORATION</span>
        <span>📍 Hyderabad, India</span>
        <span>📧 upintrad@123.com</span>
        <span>📞 +91 93477 19244</span>
      </div>
      <p style={styles.footerBottom}>
        © 2026 UPIN Tradeing Corporation. All Rights Reserved.
      </p>
  </footer>
);

// const styles = {
//   app: { fontFamily: "Arial, sans-serif", background: "#f9fafc", paddingTop: "70px" },
//   header: {
//     background: "#ffffff",
//     color: "#180e0e",
//     padding: "12px 20px",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
//     position: "fixed",
//     width: "100%",
//     top: 0,
//     zIndex: 100,
//   },
//   headerInner: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "80%",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   logoImg: { height: "50px", width: "170px", cursor: "pointer" },
//   nav: { display: "flex", alignItems: "center", gap: "20px" },
//   navLink: {
//     color: "black",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "16px",
//     cursor: "pointer"
//   },
//   hamburger: { fontSize: "32px", cursor: "pointer" },
//   navOpen: { 
//     position: "absolute", top: "70px", left: 0, width: "100%", 
//     background: "#fff", flexDirection: "column", padding: "20px" 
//   },
//   hero: { height: "80vh", position: "relative", overflow: "hidden" },
//   heroMobile: { height: "30vh" },
//   heroImg: { position: "absolute", width: "100%", height: "100%", objectFit: "cover", transition: "1s" },
//   heroImgMobile: { objectFit: "contain", backgroundColor: "#000" },
//   subHeader: { padding: "80px 20px", textAlign: "center" },
//   subHeaderContent: { maxWidth: "800px", margin: "0 auto" },
//   importExportSection: { padding: "50px 20px", textAlign: "center" },
//   sectionTitle: { fontSize: "2rem", marginBottom: "30px" },
//   gridContainer: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
//   importExportCard: { 
//     width: "100%", maxWidth: "320px", borderRadius: "15px", 
//     background: "#fff", boxShadow: "0 8px 25px rgba(0,0,0,0.1)", cursor: "pointer" 
//   },
//   imageWrapper: { height: "200px", overflow: "hidden" },
//   importExportImg: { width: "100%", height: "100%", objectFit: "cover" },
//   cardContent: { padding: "15px", textAlign: "center" },
//   aboutSection: { padding: "60px 20px", background: "#f4f8fb", textAlign: "center" },
//   aboutText: { maxWidth: "800px", margin: "10px auto", lineHeight: "1.6" },
//   contactSection: { padding: "60px 20px", textAlign: "center" },
//   contactForm: { maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" },
//   input: { padding: "12px", border: "1px solid #ccc" },
//   textarea: { padding: "12px", border: "1px solid #ccc" },
//   submitBtn: { padding: "12px", background: "#00b4d8", color: "#fff", fontWeight: "bold", border: "none" },
//   footer: { background: "#0d1b2a", color: "#fff", padding: "20px", textAlign: "center" },
//   footerTop: { display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap" },
//   footerBottom: { marginTop: "10px", opacity: 0.8 },
// };
// const styles = {
//   app: { 
//     fontFamily: "Arial, sans-serif", 
//     background: "linear-gradient(135deg, #f9fafc 0%, #edf2f7 100%)", // Main app background
//     paddingTop: "70px" 
//   },
//   header: {
//     background: "rgba(255, 255, 255, 0.95)",
//     color: "#180e0e",
//     padding: "12px 20px",
//     boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
//     position: "fixed",
//     width: "100%",
//     top: 0,
//     zIndex: 100,
//   },
//   headerInner: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "80%",
//     maxWidth: "1200px",
//     margin: "0 auto",
//   },
//   logoImg: { height: "50px", width: "170px", cursor: "pointer" },
//   nav: { display: "flex", alignItems: "center", gap: "20px" },
//   navLink: {
//     color: "black",
//     textDecoration: "none",
//     fontWeight: "bold",
//     fontSize: "16px",
//     cursor: "pointer"
//   },
//   hamburger: { fontSize: "32px", cursor: "pointer" },
//   navOpen: { 
//     position: "absolute", top: "70px", left: 0, width: "100%", 
//     background: "#fff", flexDirection: "column", padding: "20px" 
//   },
//   hero: { height: "80vh", position: "relative", overflow: "hidden" },
//   heroMobile: { height: "30vh" },
//   heroImg: { position: "absolute", width: "100%", height: "100%", objectFit: "cover", transition: "1s" },
//   heroImgMobile: { objectFit: "contain", backgroundColor: "#000" },
//   subHeader: { 
//     padding: "80px 20px", 
//     textAlign: "center",
//     background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)" // Light blue gradient
//   },
//   subHeaderContent: { maxWidth: "800px", margin: "0 auto" },
//   importExportSection: { 
//     padding: "50px 20px", 
//     textAlign: "center",
//     background: "linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)" // Reverse gradient
//   },
//   sectionTitle: { fontSize: "2rem", marginBottom: "30px", color: "#0d1b2a" },
//   gridContainer: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
//   importExportCard: { 
//     width: "100%", maxWidth: "320px", borderRadius: "15px", 
//     background: "#fff", boxShadow: "0 8px 25px rgba(0,0,0,0.08)", cursor: "pointer" 
//   },
//   imageWrapper: { height: "200px", overflow: "hidden" },
//   importExportImg: { width: "100%", height: "100%", objectFit: "cover" },
//   cardContent: { padding: "15px", textAlign: "center" },
//   aboutSection: { 
//     padding: "60px 20px", 
//     textAlign: "center",
//     background: "linear-gradient(135deg, #f4f8fb 0%, #e2eafc 100%)" // Soft depth gradient
//   },
//   aboutText: { maxWidth: "800px", margin: "10px auto", lineHeight: "1.6", color: "#444" },
//   contactSection: { 
//     padding: "60px 20px", 
//     textAlign: "center",
//     background: "linear-gradient(180deg, #ffffff 0%, #f9fafc 100%)" 
//   },
//   contactForm: { maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" },
//   input: { padding: "12px", border: "1px solid #e0e0e0", borderRadius: "8px" },
//   textarea: { padding: "12px", border: "1px solid #e0e0e0", borderRadius: "8px" },
//   submitBtn: { padding: "12px", background: "#00b4d8", color: "#fff", fontWeight: "bold", border: "none", borderRadius: "8px", cursor: "pointer" },
//   footer: { 
//     background: "linear-gradient(180deg, #0d1b2a 0%, #000814 100%)", // Darker premium gradient
//     color: "#fff", 
//     padding: "20px", 
//     textAlign: "center" 
//   },
//   footerTop: { display: "flex", justifyContent: "center", gap: "25px", flexWrap: "wrap" },
//   footerBottom: { marginTop: "10px", opacity: 0.6, fontSize: "12px" },
// };

const styles = {
  app: { 
    fontFamily: "'Segoe UI', Roboto, sans-serif", 
    // Soft overall page gradient
    background: "linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%)", 
    paddingTop: "70px",
    minHeight: "100vh"
  },
  header: {
    // Glassmorphism effect for the header
    background: "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(240,249,255,0.95) 100%)",
    color: "#180e0e",
    padding: "12px 20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    position: "fixed",
    width: "100%",
    top: 0,
    zIndex: 100,
    backdropFilter: "blur(5px)"
  },
  headerInner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  logoImg: { height: "50px", width: "170px", cursor: "pointer" },
  nav: { display: "flex", alignItems: "center", gap: "20px" },
  navLink: {
    color: "#1a365d",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer"
  },
  hamburger: { fontSize: "32px", cursor: "pointer", color: "#00b4d8" },
  navOpen: { 
    position: "absolute", top: "70px", left: 0, width: "100%", 
    background: "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)", 
    flexDirection: "column", padding: "20px",
    boxShadow: "0 10px 15px rgba(0,0,0,0.1)"
  },
  hero: { height: "80vh", position: "relative", overflow: "hidden", backgroundColor: "#000" },
  heroMobile: { height: "30vh" },
  heroImg: { position: "absolute", width: "100%", height: "100%", objectFit: "cover", transition: "1s" },
  heroImgMobile: { objectFit: "contain" },
  subHeader: { 
    padding: "80px 20px", 
    textAlign: "center",
    // Transition from white to a very light "seafoam" blue
    background: "linear-gradient(180deg, #ffffff 0%, #e0f2f1 100%)",
    borderBottom: "1px solid #b2dfdb"
  },
  subHeaderContent: { maxWidth: "800px", margin: "0 auto" },
  importExportSection: { 
    padding: "70px 20px", 
    textAlign: "center",
    // Deepening the blue for the product section
    background: "linear-gradient(180deg, #e0f2f1 0%, #f0f7ff 50%, #ffffff 100%)"
  },
  sectionTitle: { 
    fontSize: "2.5rem", 
    marginBottom: "40px", 
    color: "#023e8a",
    textShadow: "1px 1px 2px rgba(0,0,0,0.05)" 
  },
  gridContainer: { display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" },
  importExportCard: { 
    width: "100%", maxWidth: "340px", borderRadius: "20px", 
    background: "linear-gradient(145deg, #ffffff, #f0f4f8)", 
    boxShadow: "10px 10px 20px #d1d9e6, -10px -10px 20px #ffffff", 
    cursor: "pointer",
    overflow: "hidden"
  },
  imageWrapper: { height: "220px", overflow: "hidden" },
  importExportImg: { width: "100%", height: "100%", objectFit: "cover" },
  cardContent: { padding: "20px", textAlign: "center" },
  aboutSection: { 
    padding: "80px 20px", 
    textAlign: "center",
    // A warmer, sand-like light grey to differentiate the "About" story
    background: "linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)",
    color: "#2d3748"
  },
  aboutText: { maxWidth: "850px", margin: "15px auto", lineHeight: "1.8", fontSize: "1.1rem" },
  contactSection: { 
    padding: "80px 20px", 
    textAlign: "center",
    // Light "ice" blue to lead into the dark footer
    background: "linear-gradient(180deg, #ebedee 0%, #f1f5f9 100%)" 
  },
  contactForm: { 
    maxWidth: "550px", margin: "0 auto", display: "flex", 
    flexDirection: "column", gap: "20px", padding: "30px",
    background: "#ffffff", borderRadius: "15px", boxShadow: "0 10px 25px rgba(0,0,0,0.05)"
  },
  input: { padding: "14px", border: "1px solid #cbd5e0", borderRadius: "10px", background: "#f8fafc" },
  textarea: { padding: "14px", border: "1px solid #cbd5e0", borderRadius: "10px", background: "#f8fafc" },
  submitBtn: { 
    padding: "15px", 
    background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)", 
    color: "#fff", fontWeight: "bold", border: "none", borderRadius: "10px", 
    cursor: "pointer", transition: "transform 0.2s ease" 
  },

    footer: {
  background: "#0d1b2a",
  color: "#fff",
  padding: "10px 20px",   // 🔥 reduced height
  textAlign: "center",
  fontSize: "14px",
  marginTop: "16px",
},

footerTop: {
  display: "flex",
  justifyContent: "center",
  gap: "25px",
  flexWrap: "wrap", // responsive
  alignItems: "center",
},

footerBottom: {
  marginTop: "5px",
  fontSize: "12px",
  opacity: 0.8,
},
  // footer: { 
  //   // Strong dark blue to anchor the site
  //   background: "linear-gradient(180deg, #03045e 0%, #023e8a 100%)", 
  //   color: "#caf0f8", 
  //   padding: "40px 20px", 
  //   textAlign: "center" 
  // },
  // footerTop: { display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap", marginBottom: "20px" },
  // footerBottom: { marginTop: "20px", opacity: 0.5, fontSize: "12px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "15px" },
  
};

export default TradingHome;