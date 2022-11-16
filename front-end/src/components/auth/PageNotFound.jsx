import React from 'react'
import { Outlet, Link,useNavigate} from "react-router-dom";
import Image from '../../assets/3747371.jpg'



function PageNotFound() {
  const navigate =useNavigate()
  return (
    <div>
      <div>
        <div className='mt-2 ms-2'>
          <button onClick={() => navigate(-1)} className='border-none bg-dark text-white rounded px-3 py-1 text-decoration-none'>Go back</button>
        </div>
        <img className='w-100' style={{ height: '90vh'}} src={Image} alt="" />
      </div>
    </div>
  )
}

export default PageNotFound
