import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header, Footer, PageIntro, ArrowButton } from "./components/UI";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Solutions from "./pages/Solutions";
export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <main id="main" tabIndex="-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <>
                <PageIntro
                  eyebrow="PAGE NOT FOUND"
                  title="Let’s get you growing again."
                >
                  The page you’re looking for isn’t here.
                </PageIntro>
                <div className="wrap section">
                  <ArrowButton to="/products">Explore our products</ArrowButton>
                </div>
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
