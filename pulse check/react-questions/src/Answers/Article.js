import React, { useState } from 'react'

const Article = ({title, content}) => {
    const [toggle, settoggle] = useState(false)
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=>settoggle(!toggle)}>{toggle ? "Hide": "Know more..."}</button>
        {toggle && <p>{content}</p>}
    </div>
  )
}

export default Article