import React, { useContext } from 'react'
import { pizzaContext } from './PizzaContext'

const Filters = () => {
  const { inputVal, setinputVal,
    //  handleBox1, handleBox2,
    handleCheckboxInput,
      handleSort1, handleSort2 } = useContext(pizzaContext)
  return (
    <div>
      <h2>Filters:</h2>
      <input type='text' value={inputVal} onChange={(e) => setinputVal(e.target.value)} />


      <input
        type="checkbox"
        onChange={()=> handleCheckboxInput("is_vegetarian")}
      />
      <span
      >
        Veg
      </span>


      <input
        type="checkbox"
        onChange={()=> handleCheckboxInput("is_spicy")}
      />
      <span
      >
        Spicy
      </span>


      <input id="low" name={"test"} type="radio" onChange={handleSort1} />
      <label htmlFor="low">Sort (low to high)</label>

      <input id="high" name={"test"} type="radio" onChange={handleSort2} />
      <label htmlFor="high">Sort (high to low)</label>
    </div>
  )
}

export default Filters