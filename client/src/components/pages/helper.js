export default function getImgLink(name) {
  const str = name.replace("npc_dota_hero_", "");
  const imgLink =
    "http://cdn.dota2.com/apps/dota2/images/heroes/" + str + "_lg.png";
  return imgLink;
}
