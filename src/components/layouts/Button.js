import React from 'react'

const Button = props => {
  const { type, label, className } = props;
    return (
      <button 
        type={type}
        className={className}
        {...props}
      >
        <i className={props.icon}></i> 
        {label}
      </button>  
    )
}


export default Button;