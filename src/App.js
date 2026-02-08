import React from "react";
import 'D:/React_Frontend/add-to-cart/node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./Home";
import Cart from "./Cart";
import { CartProvider } from "react-use-cart";
function App() {
  return (
    <div className="App">
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
