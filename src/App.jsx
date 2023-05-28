import { Route, Routes } from "react-router-dom";
import AddProduct from "./components/AddProduct";
import Login from "./components/Login";
import PaymentGateWay from "./components/PaymentGateWay";
import Layout from "./Layout";
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import Home from "./pages/Home";
import PaymentResult from "./pages/PaymentResult";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route element={<Home />} index={true} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/products" element={<Products />} />
        <Route path="/:productsCategory" element={<Category />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/payment">
          <Route path="/payment/:result" element={<PaymentResult />} />
        </Route>
      </Route>
      <Route path="/paymentgateway" element={<PaymentGateWay />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );
}

export default App;
