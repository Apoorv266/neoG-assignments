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

    const handleFunc = (item) => {
        let newObj = obj
        for (const key in newObj) {
            if (item === "red") {
                newObj[key] = red
            }else if (item === "blue") {
                newObj[key] = blue
            }
            else if (item === "green") {
                newObj[key] = green
            }
        }
        // setobj(newObj)
        console.log(newObj)
    }
    return (
        <div>
            {Object.keys(obj).map((item) => <div><button onClick={() => handleFunc(item)}>{item}</button></div>)}
            {obj.red && <p>{obj.red}</p>}
            {<p></p>}
            {<p></p>}
        </div>
    )
}

export default ColorPicker