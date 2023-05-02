import React, { useContext } from 'react'
import { pizzaContext } from './PizzaContext'

const Filters = () => {
    const { inputVal, setinputVal } = useContext(pizzaContext)
    return (
        <div>
            <h2>Filters:</h2>
            <input type='text' value={inputVal} onChange={(e)=>setinputVal(e.target.value)}/>
        </div>
    )
}

export default Filters