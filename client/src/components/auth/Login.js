import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Logout from './Logout'
// import { useForm } from 'react-hook-form'
// import { ErrorMessage } from '@hookform/error-message';

function Login() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data))
  // }

  return (
    <div className='row d-flex flex-column justify-content-center align-items-center m-0 p-0' style={{ height: '100vh' }}>
      <form className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
        <div>
          <div className='h3 text-center fw-bold fs-2'>LOGIN</div>
        </div>
        <div class="form-group">
          <label for="inputEmail4" className='mb-2'>Email</label>
          <input type="email" class="form-control shadow-none" id="inputEmail4" placeholder="Email" />
        </div>
        <div class="form-group">
          <label for="inputPassword4" className='mb-2'>Password</label>
          <input type="password" class="form-control shadow-none" id="inputPassword4" placeholder="Password" />
        </div>
        <div className='d-flex justify-content-center justify-content-around align-items-center'>
          <Link to="/forgotPassword" className='text-dark text-decoration-none'>Forgot Password</Link>
          <button type="submit" class="btn btn-dark border-0 shadow-none px-4">Login</button>
          <Link to="/register" className='text-dark text-decoration-none'>Don't Have account</Link>
        </div>
      </form >
    </div >
  )
}

export default Login