import React, { useEffect, useState } from "react";

const Label9 = () => {
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/getvideo") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              videos: {
                title: "The Power of Habit",
                thumbnail: "https://picsum.photos/250/130",
                views: 1000000,
                likes: 50000,
              },
            },
          });
        } else {
          reject({
            status: 404,
            message: "Video not found.",
          });
        }
      }, 2000);
    });
  };

  const [data, setdata] = useState({});
  const [dispLabel, setdispLabel] = useState(false);

  const fetchFunc = async () => {
    const response = await fakeFetch("https://example.com/api/getvideo");
    if (response.status === 200) {
      setdata(response.data.videos);
    }
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  const handleClick = () => {
    setdata({ ...data, label: "Self Motivational" });
    setdispLabel(!dispLabel);
  };
  return (
    <div>
      {Object.keys(data).length !== 0 && (
        <div>
          <h1>Profiles</h1>
          <img src={data.thumbnail} alt="" srcset="" />
          <p>
            <strong>title : </strong>
            {data.title}
          </p>
          <p>
            <strong>views : </strong>
            {data.views} Views
          </p>
          <p>
            <strong>likes : </strong>
            {data.likes} Likes
          </p>
          {dispLabel && (
            <p>
              <strong>Label : </strong>
              {data.label}
            </p>
          )}
          {dispLabel ? (
            <button onClick={handleClick}>Hide label</button>
          ) : (
            <button onClick={handleClick}>Show label</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Label9;
