import React, { useContext } from "react";
import { emailContext } from "../Contexts/EmailContext";
import "../Styles/MsgCard.css";
import RenderMails from "./RenderMails";

const Inbox = () => {
  const { filteredData } = useContext(emailContext);
  let inboxArray = filteredData.filter(item => !item.isDlt)
  let unreadMsg = inboxArray.filter(item => item.unread)
  return (
    <>
      <h2>Unread: {unreadMsg.length}</h2>
      {inboxArray.length === 0 && <h1 style={{ width: "80vw" }}>No emails to display</h1>}
      <RenderMails data={inboxArray} />
    </>
  );
};

export default Inbox;
