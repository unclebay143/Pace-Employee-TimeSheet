import React from 'react'

const Button = props => {
  const { type, label, className, handleClick } = props;
    return (
      <button 
        onClick={handleClick}
        type={type}
        className={className}
      >
        {label}
      </button>  
    )
}


export default Button;