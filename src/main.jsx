import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Players, Vtc } from "./pages";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Players" element={<Players />} />
        <Route path="/Players/:pid" element={<Players />} />
        <Route path="/vtc" element={<Vtc />} />
      </Routes>
    </BrowserRouter>
   
);
