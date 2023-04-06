import React, { useState } from 'react'

const Game7 = () => {
    const [lives, setlives] = useState(3)
    
    const handleFunc = () =>{
        if (lives > 0) {
            setlives(lives - 1)
        }
    }
  return (
    <div>
        <h1>Current lives : {lives}</h1>
        {lives > 0 && <button onClick={handleFunc}>Loose a life !</button>}
        {lives === 0 && <h3>Game Over !</h3>}
    </div>
  )
}

export default Game7