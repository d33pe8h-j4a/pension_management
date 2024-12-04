// src/components/Auth/Login.tsx
import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import Captcha from "../util components/Captcha";
// import Captcha from "./Captcha";

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleLogin = () => {
        // API call for login functionality
    };

    return (
        <Paper
            elevation={3}
            sx={{ Width: "16rem", mt: 1, p: 4, borderRadius: 3 }}
        >
            <Typography variant="h4" gutterBottom align="center">
                Login
            </Typography>
            <TextField
                label="Email"
                variant="outlined"
                fullWidth
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            {/* Captcha Component */}
            <Captcha />
            <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
                onClick={handleLogin}
            >
                Login
            </Button>
        </Paper>
    );
};

export default Login;
