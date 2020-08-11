import React, { useEffect, useState } from "react";
import HeroNames from "../data/heroNames.json";
import getImgLink from "./helper";
import AgiLogo from "../images/agi.png";
import StrLogo from "../images/str.png";
import IntLogo from "../images/int.png";

const HeroData = ({ match }) => {
  const [heroData, setHeroData] = useState([]);
  useEffect(() => {
    // Object.keys(HeroNames).filter((key, i) =>
    //   HeroNames == match.params.id
    //     ? console.log(HeroNames[key].primary_attri)
    //     : null
    // );
    // const heroData = [];
    const keyName = match.params.id;
    Object.keys(HeroNames).findIndex((key, i) =>
      key == keyName ? heroData.push(HeroNames[key]) : null
    );
    setHeroData(heroData[0]);
    console.log(heroData);
  }, []);

  const {
    agi_gain,
    attack_range,
    attack_rate,
    attack_type,
    base_agi,
    base_armor,
    base_attack_max,
    base_attack_min,
    base_health_regen,
    base_int,
    base_mana,
    base_mana_regen,
    base_mr,
    base_str,
    icon,
    id,
    img,
    int_gain,
    localized_name,
    name,
    move_speed,
    primary_attr,
    projectile_speed,
    roles,
    str_gain,
    turn_rate,
  } = heroData && heroData;

  console.log(name);
  return (
    <div className="hero-data-container">
      <div className="hero-data-image">
        <img src={`http://cdn.dota2.com` + img} />
      </div>
      <div className="hero-data-info">
        <h4>{localized_name}</h4>
        <div className="hero-data-primary-attr">
          {primary_attr == "agi" ? (
            <img src={AgiLogo} />
          ) : primary_attr == "str" ? (
            <img src={StrLogo} />
          ) : primary_attr == "int" ? (
            <img src={IntLogo} />
          ) : null}
          {primary_attr}
        </div>
        <p>{roles}</p>
      </div>
      <p>{attack_range}</p>
      <p>{attack_type}</p>
    </div>
  );
};

export default HeroData;
