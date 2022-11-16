import {React, useState} from 'react'
import Image from '../../../assets/moto.png'
import { Outlet, Link } from "react-router-dom";
import Axios from 'axios';

const baseURL = 'http://localhost:4044/api/auth'


const role = localStorage.getItem('role')
const first_name = localStorage.getItem('first_name')
const last_name = localStorage.getItem('last_name')

function logout() {
  Axios.get(`${baseURL}/logout`)
    .then((res) => {
      if (res.data) {
        localStorage.clear()
        window.location = '/login'
      }
    })
    .catch(err =>
      console.log(err)
    )
}


function navBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light bg-dark">
        <div className="container-fluid ">
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            {/* <a className="navbar-brand mt-2 mt-lg-0" href="#"> */}
            <div className='d-flex align-items-center  justify-content-center '>
              <img src={Image} style={{ height: '50px', color: 'white' }} className='mb-2' alt="image" />
              <div className='text-white mx-3 fw-bolder'>MARHABA</div>
            </div>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="../manager" className='nav-link text-white text-dark text-decoration-none'>Dashboard</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">Projects</a>
              </li>
            </ul>

            <div class="dropdown">
              <a class="btn btn-light px-3 shadow-none dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                {first_name + ' ' + last_name}
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">

                <li>
                  <Link to={`../${role}`} className='dropdown-item text-dark text-decoration-none'>{role}</Link>
                  <Link to="/reset-Password" className='dropdown-item text-dark text-decoration-none'>Reset Password</Link>
                  <button onClick={logout} className='dropdown-item text-dark text-decoration-none'>Logout</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default navBar
