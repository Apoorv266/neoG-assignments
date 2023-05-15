import React, { useContext } from "react";
import { emailContext } from "../Contexts/EmailContext";
import "../Styles/MsgCard.css";

const Inbox = () => {
  const { emailData } = useContext(emailContext);
  return (
    <>
      {emailData.map((item) => {
        return (
          <div className="mainCard">
            <div id={item.id} className="header">
              <h3>Subject : {item.subject}</h3>
              <p>Star</p>
            </div>
            <p>{item.content}</p>
            <div className="cardBtn">
              <button>View Details</button>
              <div className="utils-btn">
                <button>Delete</button>
                <button>Mark as read</button>
                <button>Report as spam</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Inbox;
