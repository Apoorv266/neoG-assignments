import React from 'react'

const Cartoon4 = ({cartoons}) => {
    return (
        <div>
        <ol>
            {cartoons?.map((item) => {
                if (item.superpower === 'Intelligence') {
                    return (
                        <h1>{item.name} - {item.superpower} - {item.magnitude}</h1>
                    )
                }
    
            })}
        </ol>
    </div>
      )
}

export default Cartoon4