import React, { useState } from 'react'

const Heroes1 = ({characters}) => {
    const [data, setdata] = useState([])

    function heroesFunc() {
        setdata(characters.heroes)
    }
    function villainFunc() {
        setdata(characters.villains)
    }
  return (
    <>
    <div>Heroes1</div>
    <button onClick={heroesFunc}>Show Heroes</button>
    <button onClick={villainFunc}>Show Villains</button>
    <ol>
        {data.map((item) =>{
            return <li>
                <h3>{item.name}</h3>
                <p>POWERS:{item.powers}</p>
                <p>COSTUME : {item.costume}</p></li>
        })}
    </ol>
    </>
  )
}

export default Heroes1