import React from 'react'

const Button = ({btnName,btnClass,Event}) => {
  return (
    <div>
        <button onClick={Event} className={btnClass}>{btnName}</button>
    </div>
  )
}

export default Button