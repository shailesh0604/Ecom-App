import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Collections from "./pages/Collections";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import UserProfile from "./pages/UserProfile";
import FooterSection from "./components/FooterSection";
import SearchBar from "./components/SearchBar";
import AffliateProgram from "./pages/AffliateProgram";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/login" element={<Login />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/affiliate" element={<AffliateProgram />} />
        </Routes>
        <FooterSection />
      </div>
    </>
  );
}

export default App;
