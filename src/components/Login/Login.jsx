import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../components/userSlice/userSlice";
import { Container, Button, Alert } from "@mui/material";

const firebaseURL = "https://login-register-f0f00-default-rtdb.firebaseio.com/users.json";

const Login = () => {
    const [form, setForm] = useState({ email: "", password: "" });
    const [alert, setAlert] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleLogin = async () => {
        try {
            const { data } = await axios.get(firebaseURL);
            if (!data) return;

            const users = Object.values(data);
            const user = users.find((u) => u.email === form.email && u.password === form.password);

            if (user) {
                dispatch(setUser(user)); 
                setAlert({ type: "success", message: "seccess login" });

                setTimeout(() => {
                    setAlert(null);
                    
                    setTimeout(() => navigate("/private"), 1000);
                    
                }, 1000);
            } else {
                setAlert({ type: "error", message: "Xato: Email yoki parol notogri x" });
                setTimeout(() => setAlert(null), 1000);
            }
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
            setAlert({ type: "error", message: "Server xatosi! Iltimos, keyinroq urinib koring." });
            setTimeout(() => setAlert(null), 1000);
        }
    };

    return (
        <Container maxWidth="sm">
            <h2>Kirish</h2>

            {alert && <Alert severity={alert.type}>{alert.message}</Alert>}

            <input type="email" name="email" placeholder="Email" onChange={handleChange} />
            <input type="password" name="password" placeholder="Parol" onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={handleLogin}>
                Kirish
            </Button>
        </Container>
    );
};

export default Login;
