import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout & Global Components
import RootLayout from "./components/RootLayout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail"; // इकलौता डायनेमिक पेज

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Main Homepage */}
          <Route index element={<Home />} />

          {/* Dynamic Service Routes (Web Dev & App Dev दोनों इसी से चलेंगे) */}
          <Route path="services/:serviceSlug" element={<ServiceDetail />} />

          {/* 404 Route */}
          <Route
            path="*"
            element={
              <div className="text-center py-32">
                <h1 className="text-5xl font-black text-blue-500">404</h1>
                <p className="text-slate-400 text-sm mt-2">Page not found.</p>
              </div>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
