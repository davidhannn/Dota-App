import React from "react";
import Heroes from "../data/heroes.json";
// Function to retrieve Hero ID from player's recent match API call and create the Hero Img
// for (let i = 0; i < keys.length; i++) {
//   const key = keys[i];
//   for (let j = 0; j < matches.length; j++) {
//     if (hero_id === Heroes[key].id) {
//       const url = "http://cdn.dota2.com" + Heroes[key].img;
//       matches[j]["hero_name"] = Heroes[key].localized_name;
//       matches[j]["heroImgLink"] = url;
//     }
//   }
// }
// const getHeroImg = (id, HeroId) => {
//   const keys = Object.keys(Heroes);
//   id.filter((id) => )
// }

const MostPlayedHero = ({
  hero: {
    hero_id,
    games,
    win,
    with_games,
    with_win,
    against_games,
    against_win,
  },
}) => {
  return (
    <tbody>
      <tr>
        <td>{hero_id}</td>
        <td>{games}</td>
        <td>{(win / games).toFixed(2)}</td>
      </tr>
    </tbody>
  );
};

export default MostPlayedHero;
