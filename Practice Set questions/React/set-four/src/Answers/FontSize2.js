import React, { useState } from 'react'

const FontSize2 = () => {
    const [size, setsize] = useState(18)
  return (
    <div>
        <h1 style={{fontSize: `${size}px`}}>Welcome</h1>
        <button onClick={()=>setsize(size + 1)}>+</button>
        <button onClick={()=>setsize(size - 1)}>-</button>
    </div>
  )
}

export default FontSize2