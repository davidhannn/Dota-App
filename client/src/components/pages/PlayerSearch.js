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
      <form onSubmit={onSubmit} className="d-flex flex-row w-75 p-3">
        <input
          type="text"
          name="text"
          placeholder="Search Players..."
          value={text}
          onChange={onChange}
          className="form-control"
        />
        <button class="btn btn-dark my-2 my-sm-0" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Players;
