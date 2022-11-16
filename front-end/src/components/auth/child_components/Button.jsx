import React from 'react'

function Button(props) {
  return (
    <button type={props.type} class="btn btn-dark border-0 shadow-none px-4">{props.btn}</button>
  )
}

export default Button
