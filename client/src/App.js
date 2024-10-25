import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddProject from "./pages/AddProject";
import ProductsList from "./pages/ProductsList";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/addProject" element={<AddProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
