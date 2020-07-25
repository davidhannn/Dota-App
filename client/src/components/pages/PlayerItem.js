import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PlayerItem = ({
  player: { account_id, personaname, avatarfull, last_match_time, similarity },
}) => {
  return (
    <div className="player-box">
      <div className="avatar-container">
        <img src={avatarfull} />
      </div>
      <div className="account-name-container">
        <div className="account-name">{personaname}</div>
      </div>
      <div className="btn-container">
        <Link to={`/players/${account_id}`}>
          <Button variant="light">Profile</Button>
        </Link>
      </div>
    </div>
  );
};

export default PlayerItem;
