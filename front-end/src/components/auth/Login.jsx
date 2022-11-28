import { React, useState } from "react";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import Input from './child_components/Input'
import Button from './child_components/Button'
import Label from './child_components/Label'
import Error from "./child_components/Error";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseURL = 'http://localhost:4044/api/auth'


function Login() {

  const [ user, setUser ] = useState({})
  const [msg, setMsg] = useState('')

  const onChange = (e) => {
    const valeur = e.target.value
    setUser({...user, [e.target.name]: valeur})
  }

  const onSubmit = (e) => {
    e.preventDefault()
    
    Axios.post(`${baseURL}/login`, user)
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

        if(res.data){
          localStorage.setItem("token", res.data.token)
          localStorage.setItem("email", res.data.email)
          localStorage.setItem("first_name", res.data.first_name)
          localStorage.setItem("last_name", res.data.last_name)
          localStorage.setItem("role", res.data.role)
        }

        const role = localStorage.getItem('role')

        if(role === 'client'){
          window.location = '/client'
        }
        else if(role === 'livreur'){
          window.location  = '/livreur'
        }
        else if(role === 'manager'){
          window.location = '/manager'
        }

      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div className='row d-flex flex-column justify-content-center align-items-center m-0 p-0' style={{ height: '100vh' }}>
      <form onSubmit={onSubmit} className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
        <div>
          <div className='h3 text-center fw-bold fs-2'>LOGIN</div>
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
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/forgot-password" className=' text-dark text-decoration-none'>Forgot Password</Link>
          <Link to="/register" className='text-dark text-decoration-none'>Don't Have account</Link>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <Button type='submit' btn='Login' />
          <ToastContainer />
        </div>
      </form>
    </div>
  )
}

export default Login