import React, { useContext } from "react";
import { emailContext } from "../Contexts/EmailContext";

const Filters = () => {
  const { checkBox, setCheckBox } = useContext(emailContext);
  return (
    <div style={{ border: "0.1px solid #DDDDDC", padding: "10px" }} className="filter-main">
      <label>
        <input
          type="checkbox"
          checked={checkBox.box1}
          onChange={() =>
            setCheckBox((prevState) => ({
              ...prevState,
              box1: !prevState.box1,
            }))
          }
        />
        Show unread messages
      </label>{" "}


      <label>
        <input
          type="checkbox"
          checked={checkBox.box2}
          onChange={() =>
            setCheckBox((prevState) => ({
              ...prevState,
              box2: !prevState.box2,
            }))
          }
        />
        Show Read messages
      </label>{" "}

      <label>
        <input
          type="checkbox"
          checked={checkBox.box3}
          onChange={() =>
            setCheckBox((prevState) => ({
              ...prevState,
              box3: !prevState.box3,
            }))
          }
        />
        Show Starred messages
      </label>
    </div>
  );
};

export default Filters;
