import React from "react";

const Hero = ({ hero: { id, name } }) => {
  const str = name.replace("npc_dota_hero_", "");
  const imgLink =
    "http://cdn.dota2.com/apps/dota2/images/heroes/" + str + "_lg.png";
  return (
    <div className="hero-card">
      <img className="card-img-top" src={imgLink} alt="Card image cap" />
      {/* <div className="card-body">
        <p className="card-text">{str}</p>
      </div> */}
    </div>
  );
};

export default Hero;
