import React from 'react'

function Input(props) {
  const {type, placeholder, func} = this.props
  return (
    <React.Fragment>
      <input type={type} placeholder={placeholder} func={func}/>
    </React.Fragment>
  )
}



export default Input;