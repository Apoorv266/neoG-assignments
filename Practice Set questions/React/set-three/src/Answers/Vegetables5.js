import React from 'react'

const Vegetables5 = ({vegetables}) => {
  return (
    <div>
    <ol>
        {vegetables?.map((item) => {
            return item.pickDate === "2023-03-30" ?<h1>{item.name} - {item.pickDate}</h1> : null
        })}
    </ol>
</div>
  )
}

export default Vegetables5