import "./App.css";
import { useState } from "react";
import Products from "./components/Products_section/Products";
import Header from "./components/Header_section/Header";
import Footer from "./components/Footer_sectiion/Footer";

function App() {
  // cart counting sart
  const [cartCount, setCartCount] = useState(0);

  const handleIncrement = () => {
    setCartCount(cartCount + 1);
  };

  const handleDecrement = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };
  // cart counting end
  return (
    <>
      <Header cart_count={cartCount} />
      <Products COunt_Incre={handleIncrement} COunt_Decr={handleDecrement} />
      <Footer />
    </>
  );
}

export default App;
