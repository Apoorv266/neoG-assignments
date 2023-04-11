import React, { useState } from 'react'

const ColorPicker = () => {
    const red = '#EE4B2B'
    const blue = '#89CFF0'
    const green = '#7FFFD4'

    const [obj, setobj] = useState({
        red: '',
        blue: '',
        green: ''
    })

    const handleFunc = (item, value) => {
        let newObj = {...obj, [`${item}`] : value}
        setobj(newObj)
        console.log(newObj)
    }
    return (
        <div>
            {/* {Object.keys(obj).map((item) => <div><button onClick={() => handleFunc(item, )}>{item}</button></div>)} */}
            <div>
            <button onClick={() => handleFunc("red",red )}>Red</button>
            {obj.red && <p>{obj.red}</p>}
            </div>
            <div>
            <button onClick={() => handleFunc("blue",blue )}>Blue</button>
            {obj.blue && <p>{obj.blue}</p>}
            </div>
            <div>
            <button onClick={() => handleFunc("green", green)}>Green</button>
            {obj.green && <p>{obj.green}</p>}
            </div>
        </div>
    )
}

export default ColorPicker