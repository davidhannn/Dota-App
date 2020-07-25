import React, { useContext, useEffect, useState } from "react";
import dotaContext from "../../context/dotaContext";
import PlayerItem from "./PlayerItem";

const PlayerList = () => {
  const DotaContext = useContext(dotaContext);
  const { players } = DotaContext;

  console.log(players);
  //   if (loading) {
  //     return console.log(loading);
  //   } else {
  return (
    <div className="playerListStyle">
      {players.map((player) => (
        <PlayerItem key={player.account_id} player={player} />
      ))}
    </div>
  );
  //   }
};

export default PlayerList;
