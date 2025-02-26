import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PrivatePage from "./components/PrivatePage/PrivatePage";

const App = () => {
    const user = useSelector((state) => state.user.user);

    <div></div>

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/private" element={user ? <PrivatePage /> : <Navigate to="/login" />} />
                <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
