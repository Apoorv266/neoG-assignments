import React, { useEffect, useState } from 'react'

const Genre6 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === "https://example.com/api/movies") {
                    resolve({
                        status: 200,
                        message: "Success",
                        data: [
                            {
                                title: "The Godfather",
                                year: 1972,
                                genre: "Crime"
                            },
                            {
                                title: "The Shawshank Redemption",
                                year: 1994,
                                genre: "Drama"
                            },
                            {
                                title: "The Dark Knight",
                                year: 2008,
                                genre: "Action"
                            },
                            {
                                title: "Forrest Gump",
                                year: 1994,
                                genre: "Comedy"
                            },
                            {
                                title: "The Matrix",
                                year: 1999,
                                genre: "Science Fiction"
                            },
                            {
                                title: "Jurassic Park",
                                year: 1993,
                                genre: "Science Fiction"
                            },
                            {
                                title: "Star Wars: Episode IV - A New Hope",
                                year: 1977,
                                genre: "Science Fiction"
                            },
                            {
                                title: "The Terminator",
                                year: 1984,
                                genre: "Action"
                            },
                            {
                                title: "Die Hard",
                                year: 1988,
                                genre: "Action"
                            },
                            {
                                title: "Pulp Fiction",
                                year: 1994,
                                genre: "Crime"
                            }
                        ]
                    });
                } else {
                    reject({
                        status: 404,
                        message: "Movies list not found."
                    });
                }
            }, 2000);
        });
    };

    const [data, setdata] = useState([])
    const [selectedGenre, setselectedGenre] = useState(null);
    const filteredItems =
        selectedGenre === null
            ? data
            : data.filter((item) => item.genre === selectedGenre);

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/movies")
        if (response.status === 200) {
            setdata(response.data)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    const handlechange = (e) => {
        e.target.value === "All" ? setselectedGenre(null) : setselectedGenre(e.target.value)
    };
    return (
        <div>
            <h1>Movies</h1>
            <div>
                <h3>Filter by year : </h3>
                <select onChange={handlechange}>
                    <option value="All">All</option>
                    <option value="Crime">Crime</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                </select>
            </div>
            {filteredItems.map((item, index) => {
                return (
                    <>
                        <div key={index}>
                            <p>Name : {item.title}</p>
                            <p>Year : {item.year}</p>
                            <p>Genre: {item.genre}</p>
                            <hr />
                        </div>
                    </>
                )
            })}

            {filteredItems.length === 0 && <h1>No movie of this genre </h1>}
        </div>
    )
}

export default Genre6