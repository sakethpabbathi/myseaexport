// import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ExportsPage from "./ExportsPage";
// import FeedPage from "./FeedPage";
// import HCPPage from "./HCPPage";
// import ImportsPage from "./ImportsPage";
// import React from "react";
// import TradingHome from "./TradingHome";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<TradingHome />} />
//         <Route path="/imports" element={<ImportsPage />} />
//         <Route path="/feed" element={<FeedPage />} />
//         <Route path="/hcp" element={<HCPPage />} />
//         <Route path="/exports" element={<ExportsPage />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";

import ExportsPage from "./ExportsPage";
import FeedPage from "./FeedPage";
import HCPPage from "./HCPPage";
import ImportsPage from "./ImportsPage";
import React from "react";
import TradingHome from "./TradingHome";

function App() {
  return (
    <BrowserRouter basename="/myseaexport"> {/* ✅ IMPORTANT */}
      <Routes>
        <Route path="/" element={<TradingHome />} />
        <Route path="/imports" element={<ImportsPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/hcp" element={<HCPPage />} />
        <Route path="/exports" element={<ExportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;