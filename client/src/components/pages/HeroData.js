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
          </div>
          <p>{roles && roles.join("-")}</p>
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
        <div className="hero-data-table">
          <span className="hero-data-row">
            Attack Max: <span>{base_attack_max}</span>
          </span>
          <span className="hero-data-row">
            Attack Min: <span>{base_attack_min}</span>
          </span>
          <span className="hero-data-row">
            Attack Range: <span>{attack_range}</span>
          </span>
          <span className="hero-data-row">
            Attack Rate: <span>{attack_rate}</span>
          </span>
          <span className="hero-data-row">
            Attack Type: <span>{attack_type}</span>
          </span>
          <span className="hero-data-row">
            Primary Attr: <span>{primary_attr}</span>
          </span>
        </div>

        <div className="hero-data-table">
          <span className="hero-data-row">
            Agi: <span>{base_agi}</span>
          </span>
          <span className="hero-data-row">
            Agi Gain: <span>{agi_gain}</span>
          </span>
          <span className="hero-data-row">
            Str: <span>{base_str}</span>
          </span>
          <span className="hero-data-row">
            Str Gain: <span>{str_gain}</span>
          </span>
          <span className="hero-data-row">
            Int: <span>{base_int}</span>
          </span>
          <span className="hero-data-row">
            Int Gain: <span>{int_gain}</span>
          </span>
        </div>

        <div className="hero-data-table">
          <span className="hero-data-row">
            Armor: <span>{base_armor}</span>
          </span>
          <span className="hero-data-row">
            Health Regen: <span>{base_health_regen}</span>
          </span>
          <span className="hero-data-row">
            Mana: <span>{base_mana}</span>
          </span>
          <span className="hero-data-row">
            Mana Regen: <span>{base_mana_regen}</span>
          </span>
          <span className="hero-data-row">
            Move Speed: <span>{move_speed}</span>
          </span>
          <span className="hero-data-row">
            Projectile Speed: <span>{projectile_speed}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroData;
