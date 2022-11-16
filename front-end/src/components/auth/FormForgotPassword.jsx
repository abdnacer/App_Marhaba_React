import { React, useState } from "react";
import { ReactDOM } from "react";
import { Outlet, Link, useParams } from "react-router-dom";
import Input from './child_components/Input'
import Button from './child_components/Button'
import Label from './child_components/Label'
import Error from "./child_components/Error";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:4044/api/auth'

function FormForgotPassword() {
  const {token} = useParams()
  console.log(token);

  const [user, setUser] = useState({})
  const [msg, setMsg] = useState('')

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({ ...user, [e.target.name]: valeur })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    Axios.post(`${baseURL}/form-forgot-password`, {
      ...user,
      token
    })
    .then(res => {
      // setMsg(res.data)

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

  return (
    <div className='row d-flex flex-column justify-content-center col-md-12 align-items-center m-0 p-0' style={{ height: '100vh' }}>
      <form onSubmit={onSubmit} className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
        <div>
          <div className='h3 text-center fw-bold fs-2'>Form Forgot Password</div>
        </div>
        <div className="form-group">
          <Label label='Password' />
          <Input type='password' placeholder='Password' onChange={onChange} name='password' />
          <Error id='password' />
        </div>
        <div className="form-group">
          <Label label='Confirm Password' />
          <Input type='password' placeholder='Confirm Password' onChange={onChange} name='confirm_password' />
          <Error id='confirm_password' />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <Button type='submit' btn='Register' />
          <ToastContainer />
        </div>
        <div className='d-flex justify-content-center justify-content-around align-items-center'>
          <Link to="/login" className='text-dark text-decoration-none'>You Have account</Link>
        </div>
      </form>
    </div>
  )
}

export default FormForgotPassword