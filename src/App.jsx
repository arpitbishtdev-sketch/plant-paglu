import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { useEffect, useState } from "react";
import PageLoader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EnquiryPage from "./pages/EnquiryPage";
import HealthyPlants from "./pages/HealthyPlants";
import StallPage from "./pages/StallPage";
import PersonalGuidance from "./pages/pg";
import ProductDetail from "./components/ProductDetail";
import AboutPage from "./pages/About";
import SearchPage from "./pages/SearchPage";

import { ToastContainer } from "react-toastify";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setLoading(true);
    setReveal(false);

    const t1 = setTimeout(() => setReveal(true), 1600);
    const t2 = setTimeout(() => setLoading(false), 2600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location]);

  return (
    <>
      {loading && <PageLoader reveal={reveal} />}

      <div className="page-wrapper">
        <ScrollToTop />
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/enquiry" element={<EnquiryPage />} />
          <Route path="/healthy-plants" element={<HealthyPlants />} />
          <Route path="/stall" element={<StallPage />} />
          <Route path="/personal-guidance" element={<PersonalGuidance />} />
          <Route path="/shop" element={<SearchPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar
        />
      </div>
    </>
  );
}

export default App;
