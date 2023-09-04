import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
    return (
      <HelmetProvider>
        <BrowserRouter>
            <div className="flex flex-col min-h-screen">
                <Navbar cartItems={12} />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/shop" element={<ShoppingPage />} />
                    <Route path="product/:slug" element={<ProductPage />} />
                    <Route path="*" element={<div>ridi</div>} />
                </Routes>
                <Footer light={false} />
            </div>
        </BrowserRouter>
      </HelmetProvider>
    );
}
