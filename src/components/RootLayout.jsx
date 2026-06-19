import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#000d24] text-white font-sans antialiased">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Dynamic Content Area (Injected via Outlet) */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* 3. Global Footer */}
      <Footer />
    </div>
  );
};

export default RootLayout;
