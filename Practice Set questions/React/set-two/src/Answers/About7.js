import React, { useState } from 'react'

const About7 = ({heading, name,learning}) => {
    const [dispMsg, setdispMsg] = useState(false)
  return (
    <div>
        <h1>{heading}</h1>
        <h2>{name}</h2>
        <button onClick={()=>setdispMsg(true) }>Know More...</button>
        {dispMsg && <p>{learning}</p>}
    </div>
  )
}

export default About7