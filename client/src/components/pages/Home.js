import React, { Fragment } from "react";
import PlayerSearch from "./PlayerSearch";
import PlayerList from "./PlayerList";

const Home = () => {
  return (
    <Fragment>
      <h1 className="home-header">Search player by Steam ID</h1>
      <PlayerSearch />
      <PlayerList />
    </Fragment>
  );
};

export default Home;
