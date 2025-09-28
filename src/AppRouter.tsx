import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import ProductsSection from "./components/ProductsSection";
import ScrollToTop from "./components/ScrollToTop";
export function AppRouter() {
  return <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/products" element={<ProductsSection />} />
          </Routes>
      </BrowserRouter>;
}