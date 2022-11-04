import Logout from './Logout'
// import { useForm } from 'react-hook-form'
// import { ErrorMessage } from '@hookform/error-message';

function ResetPassword() {
  // const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data))
  // }

  return (
    <div className='row d-flex flex-column justify-content-center align-items-center m-0 p-0' style={{ height: '100vh' }}>
      <form className='col-4 d-flex flex-column justify-content-center gap-3 border p-5 rounded shadow'>
        <div>
          <div className='h3 text-center fw-bold fs-2'>Reset Password</div>
        </div>
        <div class="form-group">
          <label for="inputEmail4" className='mb-2'>Last Password</label>
          <input type="password" class="form-control shadow-none" id="inputEmail4" placeholder="Last Password" />
        </div>
        <div class="form-group">
          <label for="inputEmail4" className='mb-2'>Nouveau Password</label>
          <input type="password" class="form-control shadow-none" id="inputEmail4" placeholder="Nouveau Password" />
        </div>
        <div class="form-group">
          <label for="inputEmail4" className='mb-2'>Last Password</label>
          <input type="password" class="form-control shadow-none" id="inputEmail4" placeholder="Last Password" />
        </div>
        <div className='d-flex justify-content-center'>
          <button type="submit" class="btn btn-dark border-0 shadow-none px-4">Send</button>
        </div >
      </form >
    </div >
  )
}

export default ResetPassword