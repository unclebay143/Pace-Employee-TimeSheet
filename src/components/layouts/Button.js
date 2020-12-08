import React from 'react'

const Button = props => {
  const { type, label, className } = props;
    return (
      <button 
        type={type}
        className={className}
        {...props}
      >
        {label}
      </button>  
    )
}


export default Button;