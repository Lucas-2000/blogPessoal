import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "../pages/Create";
import Home from "../pages/Home";

export default function MainRoutes() {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
        </Routes>
    )
}