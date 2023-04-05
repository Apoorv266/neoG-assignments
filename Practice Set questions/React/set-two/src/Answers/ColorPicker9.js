import React, { useState } from 'react'

const ColorPicker9 = ({redCol, blueCol, greenCol}) => {
    const [red, setred] = useState(false)
    const [blue, setblue] = useState(false)
    const [green, setgreen] = useState(false)
    return (
        <>
            <button onClick={()=>setred(true)}>Red color</button>
            {red && <p>{redCol}</p>}
            <button onClick={()=>setblue(true)}>blue color</button>
            {blue&& <p>{blueCol}</p>}
            <button onClick={()=>setgreen(true)}>green color</button>
            {green && <p>{greenCol}</p>}
        </>
    )
}

export default ColorPicker9