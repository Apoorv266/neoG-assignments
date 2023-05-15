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
              <button className="btn0">View Details</button>
              <div className="utils-btn">
                <button className="btn1">Delete</button>
                <button className="btn2">Mark as read</button>
                <button className="btn3">Report as spam</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Inbox;
