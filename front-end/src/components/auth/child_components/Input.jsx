import React from 'react'

function Input(props) {
  return (
    <input type={props.type} className="form-control shadow-none"  onChange={props.onChange} id="inputEmail4" placeholder={props.placeholder} name={props.name} />
  )
}

export default Input
