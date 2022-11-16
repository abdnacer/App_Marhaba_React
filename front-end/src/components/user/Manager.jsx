import { React, useState } from 'react'
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from './child_component/navBar'
import Input from '../auth/child_components/Input'
import Button from '../auth/child_components/Button'
import Label from '../auth/child_components/Label'
import Error from "../auth/child_components/Error";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const baseURL = 'http://localhost:4044/api/auth'

function Manager() {

  const [user, setUser] = useState({})
  const [msg, setMsg] = useState('')

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({ ...user, [e.target.name]: valeur })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    Axios.post(`${baseURL}/registerLivreur`, user)
    .then(res => {
      setMsg(res.data)

      toast.warn('🦄 '+ res.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    })
  }

  return (
    <div>
      <Navbar />

      <div className='row d-flex flex-column justify-content-center align-items-center m-0 p-0' style={{ height: '90vh' }}>
        <form onSubmit={onSubmit} className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
          <div>
            <div className='h3 text-center fw-bold fs-2'>Add Livreur</div>
          </div>
          <div class="form-group">
            <Label label='First Name' />
            <Input type='text' placeholder='First Name' name='first_name' onChange={onChange} />
            <Error id='first_name' />
          </div>
          <div class="form-group">
            <Label label='Last_Name' />
            <Input type='text' placeholder='Last Name' name='last_name' onChange={onChange} />
            <Error id='last_name' />
          </div>
          <div class="form-group">
            <Label label='Email' />
            <Input type='email' placeholder='Email' name='email' onChange={onChange} />
            <Error id='email' />
          </div>
          <div class="form-group">
            <Label label='Password' />
            <Input type='password' placeholder='Password' name='password' onChange={onChange} />
            <Error id='password' />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <Button type='submit' btn='Register' />
            <ToastContainer />
          </div>
        </form>
      </div>
    </div >
  )
}

export default Manager
