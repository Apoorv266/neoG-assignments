import React, { useEffect, useState } from "react";

const Video = () => {
  const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (url === "https://example.com/api/videos") {
          resolve({
            status: 200,
            message: "Success",
            data: {
              videos: [
                {
                  title: "The Power of Habit",
                  thumbnail: "https://picsum.photos/200/130",
                  views: 1000000,
                  likes: 50000,
                },
                {
                  title: "How to Code in JavaScript",
                  thumbnail: "https://picsum.photos/200/135",
                  views: 500000,
                  likes: 25000,
                },
                {
                  title: "10 Minute Yoga for Beginners",
                  thumbnail: "https://picsum.photos/200/131",
                  views: 250000,
                  likes: 15000,
                },
                {
                  title: "Introduction to Machine Learning",
                  thumbnail: "https://picsum.photos/200/132",
                  views: 100000,
                  likes: 10000,
                },
                {
                  title: "The Science of Cooking",
                  thumbnail: "https://picsum.photos/200/133",
                  views: 75000,
                  likes: 5000,
                },
                {
                  title: "The Art of Public Speaking",
                  thumbnail: "https://picsum.photos/200/134",
                  views: 50000,
                  likes: 2500,
                },
              ],
            },
          });
        } else {
          reject({
            status: 404,
            message: "Videos not found.",
          });
        }
      }, 2000);
    });
  };

  const [data, setdata] = useState([]);
  const callFetch = async () => {
    const response = await fakeFetch("https://example.com/api/videos");
    setdata(response.data.videos);
  };
  useEffect(() => {
    callFetch();
  }, []);

  const handleClick = (currIndex) => {
    let array = data.map((item, index) =>
      index === currIndex ? { ...item, label: "motivational" } : item
    );
    setdata(array);
  };

  return (
    <div>
      {data.map((item, index) => {
        return (
          <div>
            <h1>{item.title}</h1>
            <img src={item.thumbnail} alt="" srcset="" />
            <p>Views :{item.views}</p>
            <p>Likes : {item.likes}</p>
            {item.label && <p>Label : {item.label}</p>}
            <button onClick={() => handleClick(index)}>Add label</button>
          </div>
        );
      })}
    </div>
  );
};

export default Video;
