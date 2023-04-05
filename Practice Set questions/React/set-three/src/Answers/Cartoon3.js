import React from 'react'

const Cartoon3 = ({cartoons}) => {
  return (
    <div>
    <ol>
        {cartoons?.map((item) => {
            if (item.magnitude % 2 === 0) {
                return (
                    <h1>{item.name}</h1>
                )
            }

        })}
    </ol>
</div>
  )
}

export default Cartoon3