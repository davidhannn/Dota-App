import React, { useEffect, useState } from "react";
import HeroNames from "../data/heroNames.json";
import HeroAbilities from "../data/heroAbilities.json";
import getImgLink from "./helper";
import AgiLogo from "../images/agi.png";
import StrLogo from "../images/str.png";
import IntLogo from "../images/int.png";

const HeroData = ({ match }) => {
  const [heroData, setHeroData] = useState([]);
  const [heroAbilities, setHeroAbilities] = useState([]);
  const [heroAbilityImg, setHeroAbilityImg] = useState([]);
  const [heroTalent, setHeroTalent] = useState([]);

  useEffect(() => {
    const keyName = match.params.id;
    Object.keys(HeroNames).findIndex((key, i) =>
      key == keyName ? heroData.push(HeroNames[key]) : null
    );
    Object.keys(HeroAbilities).findIndex((key, i) =>
      key == keyName ? heroAbilities.push(HeroAbilities[key]) : null
    );

    const heroAbilityImg = heroAbilities[0].abilities.map(
      (ability) =>
        `http://cdn.dota2.com/apps/dota2/images/abilities/${ability}_md.png`
    );

    const heroTalent = heroAbilities[0].talents;
    // console.log(heroAbilities[0].abilities);
    setHeroData(heroData[0]);
    setHeroAbilities(heroAbilities[0]);
    setHeroAbilityImg(heroAbilityImg);
    setHeroTalent(heroTalent);
    console.log(heroAbilities);
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

  console.log(heroAbilities);
  console.log(heroAbilityImg);
  console.log(heroTalent);

  return (
    <div className="hero-data-container">
      <div className="hero-data-header">
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
          <p>Roles: {roles}</p>
        </div>

        <div className="hero-data-abilities-container">
          {heroAbilityImg.flatMap((img) =>
            img.includes("generic_hidden_md") ? (
              []
            ) : (
              <img className="hero-ability-icon" src={img} />
            )
          )}
        </div>
      </div>

      <div className="hero-data-body-container">
        <div className="hero-data-stats">
          <div className="hero-data-base-stats">
            <p>Agility: {base_agi}</p>
            <p>Str: {base_str}</p>
            <p>Int: {base_int}</p>
            <p>Armor: {base_armor}</p>
            <p>Attack Max: {base_attack_max}</p>
            <p>Attack Min: {base_attack_min}</p>
            <p>Health Regen: {base_health_regen}</p>
            <p>Mana: {base_mana}</p>
            <p>Mana Regen: {base_mana_regen}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroData;
