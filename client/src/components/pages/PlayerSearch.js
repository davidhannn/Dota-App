import React, { useState, useEffect, useContext } from "react";
import dotaContext from "../../context/dotaContext";

const Players = () => {
  const DotaContext = useContext(dotaContext);
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      console.log("please enter name");
    } else {
      DotaContext.searchPlayers(text);
      setText("");
    }
  };

  const onChange = (e) => setText(e.target.value);

  return (
    <div className="search-container">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Players..."
          value={text}
          onChange={onChange}
          className="form-control"
        />
      </form>
      <h1></h1>
    </div>
  );
};

export default Players;
