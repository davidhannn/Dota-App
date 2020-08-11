import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  hero: { id, name, localized_name, agi_gain, attack_range },
}) => {
  const str = name.replace("npc_dota_hero_", "");
  const imgLink =
    "http://cdn.dota2.com/apps/dota2/images/heroes/" + str + "_lg.png";
  return (
    <Link to={`/heroes/${name}`}>
      <div className="hero-card">
        <img className="card-img-top" src={imgLink} alt="Card image cap" />
        <div class="hero-card-name">{localized_name}</div>
        {/* <div className="card-body">
        <p className="card-text">{str}</p>
      </div> */}
      </div>
    </Link>
  );
};

export default Hero;
