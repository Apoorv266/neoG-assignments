import React, { useEffect, useState } from 'react'
// Create a counter with a button, on refresh we should retain the recent count!

let parsedData = parseInt(localStorage.getItem("value") || 0);
const Count = () => {
  const [count, setcount] = useState(parsedData)

  useEffect(() => {
    localStorage.setItem("value", count)
  }, [count])


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 1)}>Increase Count</button>
    </div>
  )
}

export default Count