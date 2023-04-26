import React, { useEffect, useState } from "react";
import { fakeFetch } from "./FakeFetch";

const FollowUser = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState({});

  const fetchFunc = async () => {
    try {
      setloading(true);
      const response = await fakeFetch("https://example.com/api/users");
      if (response.status === 200) {
        setdata(response.data);
      }
    } catch (e) {
      seterrorMsg(e);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchFunc();
  }, []);

  const followFunc = (currIndex) => {
    let newArr = data.map((item, index) =>
      index === currIndex ? { ...item, likes: ++item.likes } : item
    );
    setdata(newArr);
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {data.map((item, index) => {
            return (
              <div key={index}>
                <img src={item.image} alt="" srcset="" width={"200px"} />
                <p>Name: {item.name}</p>
                <p>Like : {item.likes}</p>
                <p>Comment : {item.comments}</p>
                <button onClick={() => followFunc(index)}>
                  Like {item.name}
                </button>
                <hr />
              </div>
            );
          })}
        </div>
      )}

      {Object.keys(errorMsg).length !== 0 && (
        <div>
          <h1>404 error</h1>
          {errorMsg.message}
        </div>
      )}
    </div>
  );
};

export default FollowUser;
