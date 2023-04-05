import React from 'react'

const Cartoon3 = ({cartoons}) => {
  return (
    <div>
    <ol>
        {cartoons?.map((item) => {
            return item.magnitude % 2 === 0 ? <h1>{item.name}</h1> :""
        })}
    </ol>
</div>
  )
}

export default Cartoon3