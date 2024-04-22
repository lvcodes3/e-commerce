import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import Store from "./pages/Store";
import Cart from "./pages/Cart";
import { Footer } from "./components/Footer";

function App() {
  const [cartQuantity, setCartQuantity] = useState<number | null>(null);

  useEffect(() => {
    // existing cart in local storage //
    if (
      localStorage.getItem("item_name") &&
      localStorage.getItem("item_quantity") &&
      localStorage.getItem("item_price")
    ) {
      let storedQuantity = localStorage.getItem("item_quantity");
      if (storedQuantity !== null) {
        setCartQuantity(parseInt(storedQuantity));
      }
    }
    // no existing cart in local storage //
    else {
      // clear //
      localStorage.removeItem("item_name");
      localStorage.removeItem("item_quantity");
      localStorage.removeItem("item_price");
    }
  }, []);

  return (
    <>
      <Router>
        <Navbar cartQuantity={cartQuantity} />
        <Routes>
          <Route
            path="/"
            element={
              <Store
                cartQuantity={cartQuantity}
                setCartQuantity={setCartQuantity}
              />
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
