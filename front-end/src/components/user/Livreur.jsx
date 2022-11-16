import React from 'react'
import Image from '../../assets/moto.png'
import { ReactDOM } from "react";
import Navbar from './child_component/navBar'
import { Outlet, Link } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import axios from 'axios';


function Manager() {

  return (
    <div>
      <Navbar />
      
    </div >
  )
}

export default Manager
