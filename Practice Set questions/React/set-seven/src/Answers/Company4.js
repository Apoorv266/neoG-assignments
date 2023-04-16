import React, { useEffect, useState } from 'react'

const Company4 = () => {
    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === "https://example.com/api/users") {
                    resolve({
                        status: 200,
                        message: "Success",
                        data: [
                            { name: "John Doe", email: "john@example.com", website: "example.com", company: "ABC Inc" },
                            { name: "Jane Doe", email: "jane@example.com", website: "example.com", company: "XYZ Corp" },
                            { name: "Bob Smith", email: "bob@example.com", website: "example.com", company: "ABC Inc" },
                            { name: "Alice Brown", email: "alice@example.com", website: "example.com", company: "ACME Corp" },
                            { name: "Charlie Green", email: "charlie@example.com", website: "example.com", company: "XYZ Corp" },
                        ]
                    });
                } else {
                    reject({
                        status: 404,
                        message: "Users list not found."
                    });
                }
            }, 2000);
        });
    };

    const [data, setdata] = useState([])

    const [selectedComp, setselectedComp] = useState(null);


    const filteredItems =
        selectedComp === null
            ? data
            : data.filter((item) => item.company === selectedComp);
            

    const fetchFunc = async () => {
        const response = await fakeFetch("https://example.com/api/users")
        if (response.status === 200) {
            setdata(response.data)
        }
    }

    useEffect(() => {
        fetchFunc()
    }, [])

    const handlechange = (e) => {
        e.target.value === "All" ? setselectedComp(null) : setselectedComp(e.target.value)
    };
    return (
        <div>
            <div>
                <h3>Filter by Company : </h3>
                <select onChange={handlechange}>
                    <option value="All">All</option>
                    {data.map((item) => {
                        return (
                            <option value={item.company}>{item.company}</option>
                        )
                    })}
                </select>
            </div>

            <ol>
                {filteredItems.map((item, index) => {
                    return (
                        <>
                            <li key={index}>
                                <p>Name : {item.name}</p>
                                <p>Email : {item.email}</p>
                                <p>Company: {item.company}</p>
                                <hr />
                            </li>
                        </>
                    )
                })}
            </ol>
            {filteredItems.length === 0 && <h1>No Matching with this company</h1>}

        </div>
    )
}

export default Company4