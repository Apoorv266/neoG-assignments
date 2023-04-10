import React, { useEffect, useState } from 'react'

const Movies3 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === "https://example.com/api/movies") {
                    resolve({
                        status: 200,
                        message: "Success",
                        data: [
                            { title: "The Dark Knight", year: 2008, rating: 9.0 },
                            { title: "Inception", year: 2009, rating: 8.8 },
                            { title: "Interstellar", year: 2010, rating: 8.6 },
                            { title: "Tenet", year: 2009, rating: 7.5 },
                            { title: "Real Steal", year: 2007, rating: 7.5 },
                        ],
                    });
                } else {
                    reject({
                        status: 404,
                        message: "Movies list not found.",
                    });
                }
            }, 2000);
        });
    };

    const [data, setdata] = useState([])
    const [selectedYear, setselectedYear] = useState(null);
    const filteredItems =
    selectedYear === null
        ? data
        : data.filter((item) => item.year === parseInt(selectedYear));

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
        e.target.value === "All" ? setselectedYear(null) : setselectedYear(e.target.value)
    };
    return (
        <div>
            <h1>Movies</h1>
            <div>
                <h3>Filter by year : </h3>
                <select onChange={handlechange}>
                    <option value="All">All</option>
                    <option value="2005">2005</option>
                    <option value="2006">2006</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                </select>
            </div>
            {filteredItems.map((item, index) => {
                return (
                    <>
                    <div key={index}>
                        <p>Name : {item.title}</p>
                        <p>Year : {item.year}</p>
                        <p>Ratings: {item.rating}</p>
                        <hr />
                        </div>
                    </>
                )
            })}
            
            {filteredItems.length === 0 && <h1>No movie in this year </h1>} 
        </div>
    )
}

export default Movies3