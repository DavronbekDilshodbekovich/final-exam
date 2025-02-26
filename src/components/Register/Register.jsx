import React, { useState } from "react";
import axios from "axios";
import { Container, Button } from "@mui/material";

const firebaseURL = "https://login-register-f0f00-default-rtdb.firebaseio.com/users.json";

const Register = () => {
    const [form, setForm] = useState({ email: "", password: "" });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleRegister = async () => {
        try {
            await axios.post(firebaseURL, JSON.stringify(form), {
                headers: { "Content-Type": "application/json" }
            });
            setForm({ email: "", password: "" });
        } catch (error) {
            console.error("Xatolik yuz berdi:", error);
        }
    };

    return (
        <Container maxWidth="sm">
            <h2>Royxatdan otish</h2>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Parol" value={form.password} onChange={handleChange} />
            <Button variant="contained" color="primary" onClick={handleRegister}>Royxatdan otish</Button>
        </Container>
    );
};

export default Register;
