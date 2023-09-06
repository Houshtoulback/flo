import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import LandingPage from "./pages/LandingPage";
import ShoppingPage from "./pages/ShoppingPage";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import { Store } from "./Store";
import { useContext } from "react";

export default function App() {
    const { state } = useContext(Store);
    const { cart } = state;
    return (
        <HelmetProvider>
            <BrowserRouter>
                <div className="flex flex-col min-h-screen">
                    <Navbar cartItems={cart.cartItems.length} />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/shop" element={<ShoppingPage />} />
                        <Route path="product/:slug" element={<ProductPage />} />
                        <Route path="*" element={<CartPage />} />
                    </Routes>
                    <Footer light={false} />
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}
