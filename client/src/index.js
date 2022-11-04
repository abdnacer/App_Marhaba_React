import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Auth
import Login from './components/auth/Login'
import Logout from './components/auth/Logout'
import Register from './components/auth/Register'
import ForgotPassword from './components/auth/ForgotPassword'
import Forgotpassword2 from './components/auth/Forgotpassword2'
import ResetPassword from './components/auth/ResetPassword'

// Css && Bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/forgotPassword2" element={<Forgotpassword2 />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
