// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
