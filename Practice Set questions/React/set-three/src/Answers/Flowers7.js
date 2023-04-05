import React from 'react'

const Flowers7 = ({ bouquet }) => {
    return (
        <div>
            <ol>
                {bouquet?.map((item) => {
                    if (item.price > 2000) {
                        return item.flowers.map((item) => {
                            return <li>{item}</li>
                        })
                    }else{
                        return null
                    }
                })}
            </ol>
        </div>
    )
}

export default Flowers7