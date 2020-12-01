import React from 'react'

function Button(props) {
  const {text, func } = props
  return (
    <React.Fragment>
      <button onClick={func}>{text}</button>
    </React.Fragment>
  )
}


export default Button;