import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import ImportsExportsPage from "./Imports-ExportsPage";
import React from "react";

function App() {
  return (
    <BrowserRouter basename="/myseaexport">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/imports-exports" element={<ImportsExportsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;