import { React, useState, Fragment, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { isAuthenticated } from './helpers';
import './App.css';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ForgotPassword from './components/auth/ForgotPassword';
import FormForgotPassword from './components/auth/FormForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import PageNotFound from './components/auth/PageNotFound'
import Client from './components/user/Client'
import Manager from './components/user/Manager'
import Livreur from './components/user/Livreur'

function App() {

  const PrivateRoute = ({ children }) => {
    return isAuthenticated()  ? (
      <Fragment>
        {children}
      </Fragment>
    ) : <Navigate to="/login" />
  }

  const PublicRoute = ({ children }) => {
    return isAuthenticated() ? <Navigate to="/client" /> : children
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth */}
        <Route path="/" element={<PublicRoute> <Login /> </PublicRoute> } />
        <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>} />
        <Route path="/register" element={<PublicRoute> <Register /> </PublicRoute>} />
        <Route path="/forgot-Password" element={<PublicRoute> <ForgotPassword /> </PublicRoute>} />
        <Route path="/form-forgot-password/:token" element={<PublicRoute> <FormForgotPassword /> </PublicRoute>} />
        <Route path="/reset-Password" element={<PrivateRoute> <ResetPassword /> </PrivateRoute>} />
        {/* User */}
        <Route path='/client' element={<PrivateRoute> <Client /> </PrivateRoute>} />
        <Route path='/manager' element={<PrivateRoute> <Manager /> </PrivateRoute>} />
        <Route path='/livreur' element={<PrivateRoute> <Livreur /> </PrivateRoute>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
