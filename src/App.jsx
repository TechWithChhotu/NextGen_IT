import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout & Global Components
import RootLayout from "./components/RootLayout";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import ServiceDetail from "./pages/ServiceDetail"; // इकलौता डायनेमिक पेज
import Portfolio from "./pages/Portfolio";
import Careers from "./pages/Careers";
import FAQSection from "./pages/FAQ";
import Blog from "./pages/BlogArticles";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout />}>
          {/* Main Homepage */}
          <Route index element={<Home />} />

          {/* Dynamic Service Routes (Web Dev & App Dev दोनों इसी से चलेंगे) */}
          <Route path="service/:serviceSlug" element={<ServiceDetail />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="careers" element={<Careers />} />
          <Route path="faq" element={<FAQSection />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />

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
