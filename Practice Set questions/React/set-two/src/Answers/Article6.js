import React, { useState } from 'react'

const Article6 = ({title, content}) => {
    const [dispcontent, setdispcontent] = useState(false)
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={()=>setdispcontent(true)}>Know More!</button>
        {dispcontent && <p>{content}</p>}
    </div>
  )
}

export default Article6