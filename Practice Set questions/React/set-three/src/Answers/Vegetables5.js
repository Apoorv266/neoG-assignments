import React from 'react'

const Vegetables5 = ({vegetables}) => {
  return (
    <div>
    <ol>
        {vegetables?.map((item) => {
            if (item.pickDate === "2023-03-30") {
                return (
                    <h1>{item.name} - {item.pickDate}</h1>
                )
            }
        })}
    </ol>
</div>
  )
}

export default Vegetables5