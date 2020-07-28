import React, { Fragment } from "react";
import Heroes from "../../components/data/heroes.json";
import Items from "../../components/data/items.json";
import { Link } from "react-router-dom";

const Radiant = ({ player }) => {
  console.log(player);

  const {
    account_id,
    personaname,
    kills,
    deaths,
    assists,
    hero_id,
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
      <tbody className="player-row">
        <tr>
          <td className="player-hero-avatar">
            <img src={heroImg} />
          </td>
          <Link to={`/players/${account_id}`}>
            <td className="player-name">{personaname}</td>
          </Link>
          <td className="player-kills">{kills}</td>
          <td className="player-deaths">{deaths}</td>
          <td className="player-assists">{assists}</td>
          <td className="player-last-hits">LH</td>
          <td className="player-denies">DN</td>
          <td className="player-gpm">GPM</td>
          <td className="player-xpm">XPM</td>
          <td className="player-dmg">DMG</td>
          <td className="player-heal">Heal</td>
          <td className="player-items">
            {itemImg.map((item) => (
              <img src={item} />
            ))}
          </td>
        </tr>
      </tbody>
    </Fragment>
  );
};

export default Radiant;
