import {React, useState} from "react";
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import Input from './child_components/Input'
import Button from './child_components/Button'
import Label from './child_components/Label'
import Error from "./child_components/Error";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:4044/api/auth'

function ForgotPassword() {
  const [user, setUser] = useState({})
  const [msg, setMsg] = useState('')

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({...user, [e.target.name]: valeur})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    Axios.post(`${baseURL}/forgot-password`, user)
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
    .catch(err => {
      console.log(err)
    })
  }

  return(
    <div className='row d-flex flex-column justify-content-center align-items-center m-0 p-0' style={{ height: '100vh' }}>
      <form onSubmit={onSubmit} className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
        <div>
          <Link to="/login" className='text-dark text-decoration-none'>
            <i class="bi bi-arrow-left-circle me-2"></i>
            Back
          </Link>
          <div className='h3 text-center fw-bold fs-2'>Forgot Password</div>
        </div>

        <div class="form-group">
          <Label label='Email' />
          <Input type='email' onChange={onChange} placeholder='Email' name='email' />
          <Error id='email' />
        </div>

        <div className='d-flex justify-content-center'>
          <Button type='submit' btn='Send' />
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}

export default ForgotPassword 