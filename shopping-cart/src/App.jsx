import { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';
import ProductListPage from "./pages/productList";
import ProductDetailsPage from "./pages/productDetails";
import CartListPage from "./pages/cartList";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/productList" element={<ProductListPage />} />
        <Route path="/productDetails/:id" element={<ProductDetailsPage />} />
        <Route path="/cartList" element={<CartListPage />} />

      </Routes>

    </Fragment>
  );
}

export default App
