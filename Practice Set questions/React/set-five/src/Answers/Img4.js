import React, { useEffect, useState } from "react";

const Img4 = ({ title, width }) => {
  const [data, setdata] = useState({});
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/user") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              name: "Saroj",
              image:
                "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg",
              likes: 500,
              comments: 10,
            },
          });
        } else {
          reject({
            status: 404,
            message: "user data not found.",
          });
        }
      }, 2000);
    });
  };

  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/user");
    if (response.status === 200) {
      setdata(response.data);
    }
  };
  useEffect(() => {
    fetchFunc();
  }, []);

  return (
    <div>
      <img src={data.image} alt="" srcset="" width={width}/>
      <p>Name : {data.name}</p>
      <p>Like : {data.likes}</p>
      <p>Comment : {data.comments}</p>
    </div>
  );
};

export default Img4;
