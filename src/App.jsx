import { Route, Routes, Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import AboutPage from "./pages/about/AboutPage";
import ContactPage from "./pages/contact/ContactPage";
import Navbar from "./components/navbar/Navbar";

function NotFound() {
  const { theme } = useSelector((store) => store.global);

  return (
    <div className={`notFound ${theme}`}>
      <h1>۴۰۴</h1>
      <p>صفحه‌ای که دنبالش هستید پیدا نشد.</p>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
}

function App() {
  const { theme } = useSelector((store) => store.global);

  // toggle در اولین رندر هم اجرا می‌شد و کلاس dark را بی‌دلیل اضافه می‌کرد.
  // اینجا کلاس را مستقیماً از روی مقدار theme ست می‌کنیم.
  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* یک Toaster برای کل اپ — نه یکی به‌ازای هر کارت */}
      <Toaster position="top-center" />
    </>
  );
}

export default App;
