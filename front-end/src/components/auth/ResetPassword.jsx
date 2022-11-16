import { React, useState } from "react";
import { ReactDOM } from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from '../user/child_component/navBar'
import Input from './child_components/Input'
import Button from './child_components/Button'
import Label from './child_components/Label'
import Error from "./child_components/Error";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:4044/api/auth'

function ResetPassword() {
  const [user, setUser] = useState({})
  const [msg, setMsg] = useState({})

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({...user, [e.target.name]: valeur})
  }

  const onSubmit = (e) => {
    e.preventDefault()

    Axios.post(`${baseURL}/reset-password`, user)

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

  return (
    <div>
    <Navbar />

    <div className='row d-flex flex-column justify-content-center align-items-center m-0 p-0' style={{ height: '90vh' }}>
      <form onSubmit={onSubmit} className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
        <div>
          <div className='h3 text-center fw-bold fs-2'>Reset Password</div>
        </div>
        <div class="form-group">
          <Label label='Last Password' />
          <Input type='password' id='last_password' onChange={onChange} placeholder='Last Password' name='last_Password' />
          <Error id='last_password' />
        </div>
        <div class="form-group">
          <Label label='Nouveau Password' />
          <Input type='password' id='nouveau_password' onChange={onChange} placeholder='Nouveau Password' name='nouveau_password' />
          <Error id='nouveau_password' />
        </div>
        <div class="form-group">
          <Label label='Confirm Password' />
          <Input type='password' id='confirm_password' onChange={onChange} placeholder='Confirm Password' name='confirm_Password' />
          <Error id='last_password' />
        </div>
        <div className='d-flex justify-content-center'>
          <Button type='submit' btn='Update' />
          <ToastContainer />
        </div >
      </form>
    </div>
    </div>
  )
}

export default ResetPassword
