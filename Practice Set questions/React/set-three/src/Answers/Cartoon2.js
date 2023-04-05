import React from 'react'

const Cartoon2 = ({ cartoons }) => {
    return (
        <div>
            <ol>
                {cartoons?.map((item) => {
                    return item.magnitude > 5 ? <h1>{item.name}</h1> : null
                })}
            </ol>
        </div>
    )
}

export default Cartoon2