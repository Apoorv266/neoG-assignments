import React, { useContext } from "react";
import { emailContext } from "../Contexts/EmailContext";
import "../Styles/MsgCard.css";

const Inbox = () => {
  const { emailData, dispatch } = useContext(emailContext);
  return (
    <>
    {emailData.length === 0 && <h1 style={{width: "80vw"}}>No emails to display</h1>}
      {emailData.map((item) => {
        return (
          <div className="mainCard" key={item.mId} style={{backgroundColor:item.unread ? "#F1F6FC" :"white"}}>
            <div id={item.id} className="header">
              <h3>Subject : {item.subject}</h3>
              <p onClick={()=>dispatch({ type: "STAR", payload: item.mId })}>{!item.isStarred ? "Star": "Unstar"}</p>
            </div>
            <p>{item.content}</p>
            <div className="cardBtn">
              <button className="btn0">View Details</button>
              <div className="utils-btn">
                <button
                  className="btn1"
                  onClick={() => dispatch({ type: "DELETE", payload: item.mId })}
                >
                  Delete
                </button>
                <button className="btn2" onClick={()=>dispatch({ type: "READ", payload: item.mId })} style={{color:item.unread ? "orange": "black"}}>{item.unread ? "Mark as read" : "Mark as Unread"}</button>
                <button className="btn3" onClick={()=>dispatch({ type: "SPAM", payload: item.mId })} style={{color:item.isSpam ? "green": "black"}}>{item.isSpam ? "Marked as spam" : "Report as spam"}</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Inbox;
