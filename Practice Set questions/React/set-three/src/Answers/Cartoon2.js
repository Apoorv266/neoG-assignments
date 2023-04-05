import React from 'react'

const Cartoon2 = ({ cartoons }) => {
    return (
        <div>
            <ol>
                {cartoons?.map((item) => {
                    if (item.magnitude > 5) {
                        return (
                            <h1>{item.name}</h1>
                        )
                    }

                })}
            </ol>
        </div>
    )
}

export default Cartoon2