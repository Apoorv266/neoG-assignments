import React from 'react'

const buttonStyle = ({backgroundColor,color, borderRadius, padding}) => {
  return (
<button style={{backgroundColor : backgroundColor, color : color, borderRadius: borderRadius, padding: padding}}>Start</button>
  )
}

export default buttonStyle