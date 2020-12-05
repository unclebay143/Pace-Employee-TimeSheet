import React from 'react'

const Button = props => {
  const { type, label, className, handleClick } = props;
    return (
      <button 
        onClick={handleClick}
        type={type}
        className={className}
        {...props}
      >
        {label}
      </button>  
    )
}


export default Button;