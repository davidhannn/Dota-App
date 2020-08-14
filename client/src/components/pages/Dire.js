import React, { Fragment } from "react";
import Heroes from "../../components/data/heroes.json";
import Items from "../../components/data/items.json";
import { Link } from "react-router-dom";

const Dire = ({ player }) => {
  console.log(player);

  const {
    account_id,
    personaname,
    kills,
    deaths,
    assists,
    hero_id,
    last_hits,
    denies,
    gold_per_min,
    xp_per_min,
    hero_damage,
    hero_healing,
    item_0,
    item_1,
    item_2,
    item_3,
    item_4,
    item_5,
  } = player;

  const keys = Object.keys(Heroes);
  const itemKeys = Object.keys(Items);

  console.log(hero_id);
  const heroImg = keys
    .filter((key) => Heroes[key].id == hero_id)
    .map((key) => "http://cdn.dota2.com" + Heroes[key].img);

  //   const itemImg = itemKeys.filter((key) => Items[key] === )

  const itemArr = [];
  itemArr.push(item_0, item_1, item_2, item_3, item_4, item_5);
  const itemImg = [];

  for (let i in Items) {
    for (let j = 0; j < itemArr.length; j++) {
      if (itemArr[j] == i) {
        itemImg.push(
          "http://cdn.dota2.com/apps/dota2/images/items/" +
            Items[i] +
            "_lg.png?t=1593393829403"
        );
      }
    }
  }

  console.log(itemArr);
  console.log(itemImg);
  console.log(heroImg);

  return (
    <Fragment>
      <tr className="team-table">
        <td className="team-row first">
          <img className="team-match-row-hero" src={heroImg} />
        </td>
        <td className="team-row player">
          <Link to={`/players/${account_id}`}>
            <p>{personaname}</p>
          </Link>
        </td>

        <td className="team-row kills">{kills}</td>
        <td className="team-row">{deaths}</td>
        <td className="team-row">{assists}</td>
        <td className="team-row">{last_hits}</td>
        <td className="team-row">{denies}</td>
        <td className="team-row">{gold_per_min}</td>
        <td className="team-row">{xp_per_min}</td>
        <td className="team-row">{hero_damage}</td>
        <td className="team-row">{hero_healing}</td>
        <td className="team-row items">
          {itemImg.map((item) => (
            <img className="team-match-row-item" src={item} />
          ))}
        </td>
      </tr>
    </Fragment>
  );
};

export default Dire;
