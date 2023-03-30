import React from 'react'

const DispImg = ({imageLink,caption}) => {
  return (
    <div>
      <caption>Caption: {caption}</caption>
    <img src={imageLink} alt="" srcset="" width={"500px"}/>
    </div>
  )
}

export default DispImg