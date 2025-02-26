import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { logout } from "../../components/userSlice/userSlice";
import { Button, Container, Alert } from "@mui/material";

const PrivatePage = () => {
    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();
    const [showMessage, setShowMessage] = useState(true); 

    useEffect(() => {
        const timer = setTimeout(() => setShowMessage(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (!user) return <Navigate to="/login" />;

    return (
        <Container maxWidth="sm">
            <h2>PrivatePage</h2>

            {showMessage && <Alert severity="success">muvafaqiyatli</Alert>}

            <Button variant="contained" color="secondary" onClick={() => dispatch(logout())}>
                Chiqish
            </Button>
        </Container>
    );
};

export default PrivatePage;
