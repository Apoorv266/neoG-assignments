import React from 'react'

const DispImg1 = ({url, height, width}) => {
  return (
    <div>
        <img src={url} alt="" srcset="" width={width} height={height}/>
    </div>
  )
}

export default DispImg1