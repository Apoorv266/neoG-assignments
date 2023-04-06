import React, { useState } from 'react'

const Books6 = ({ books }) => {
    const [genre, setgenre] = useState(null)

    const filteredData = genre === null ? books : books.filter((item) => item.genre === genre)

    return (
        <div>
            <button onClick={() => setgenre(null)}>All genres</button>
            <button onClick={() => setgenre("Classic")}>Classic</button>
            <button onClick={() => setgenre("Dystopian")}>Dystopian</button>
            <button onClick={() => setgenre("Young Adult")}>Young Adult</button>
            {filteredData.map((item) => {
                return (
                    <>
                        <div key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.author}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Books6