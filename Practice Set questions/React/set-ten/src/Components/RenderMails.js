import React, { useContext } from 'react'
import { emailContext } from '../Contexts/EmailContext';
import { Link } from 'react-router-dom';

const RenderMails = ({ data }) => {
  const { dispatch } = useContext(emailContext);
  return (
    <>
      {data.map((item) => {
        return (
          <div className="mainCard" key={item.mId} style={{ backgroundColor: item.unread ? "#F1F6FC" : "white" }}>
            <div id={item.id} className="header">
              <h3>Subject : {item.subject}</h3>

              <p onClick={() => dispatch({ type: "STAR", payload: item.mId })}>{item.isStarred ? <img src={require('../img/star.png')} alt="" srcset="" width={"20px"}/> : <img src={require('../img/unstar.png')} alt="" srcset="" width={"20px"}/>}</p>
              
            </div>
            <p>{item.content}</p>

            <div className="cardBtn">
              <Link to={`/mail/id/${item.mId}`}>
              <button className="btn0">View Details</button>
              </Link>
              <div className="utils-btn">
                <button
                  className="btn1"
                  onClick={() => dispatch({ type: "DELETE", payload: item.mId })}
                >
                  Delete
                </button>


                <button className="btn2" onClick={() => dispatch({ type: "READ", payload: item.mId })} style={{ color: item.unread ? "orange" : "black" }}>{item.unread ? "Mark as read" : "Mark as Unread"}</button>


                <button className="btn3" onClick={() => dispatch({ type: "SPAM", payload: item.mId })} style={{ color: item.isSpam ? "green" : "black" }}>{item.isSpam ? "Marked as spam" : "Report as spam"}</button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  )
}

export default RenderMails