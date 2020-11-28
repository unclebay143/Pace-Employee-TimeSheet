import React from 'react'

function Button(props) {
  const {text, func } = this.props
  return (
    <React.Fragment>
      <button func={func}>{text}</button>
    </React.Fragment>
  )
}


export default Button;