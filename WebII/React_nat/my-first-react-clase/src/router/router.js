import { Routes, Route } from "react-router-dom";

import Home from "../page/Home";
import About from "../page/About";
import Contact from "../page/Contact";
import LogIn from "../page/LogIn";
import Products from "../page/Products";

export default function MyRouters() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/products" element={<Products />} />
        </Routes>
    )
}
