import React, { Fragment } from "react";
import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";

const Home = () => {
  return (
    <Fragment>
      <PlayerSearch />
      <PlayerList />
    </Fragment>
  );
};

export default Home;
