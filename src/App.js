import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import BookingPage from "./screens/BookingPage/BookingPage";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./screens/About/About";
import Login from "./screens/Login/Login";
import OrderOnline from "./screens/OrderOnline/OrderOnline";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/bookingPage" element={<BookingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/orderOnline" element={<OrderOnline />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
