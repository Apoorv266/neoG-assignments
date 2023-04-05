import React from 'react'

const Cartoon4 = ({cartoons}) => {
    return (
        <div>
        <ol>
            {cartoons?.map((item) => {
                return item.superpower === 'Intelligence' ?<h1>{item.name} - {item.superpower} - {item.magnitude}</h1> : null
    
            })}
        </ol>
    </div>
      )
}

export default Cartoon4