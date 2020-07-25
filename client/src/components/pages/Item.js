import React from "react";
import { Card, Button } from "react-bootstrap";

const Item = ({ item: { name, cost, secret_shop, side_shop, recipe } }) => {
  const str = name.replace("item_", "");
  const imgLink =
    "http://cdn.dota2.com/apps/dota2/images/items/" + str + "_lg.png";
  return (
    <div className="item-card">
      <img className="card-img-top" src={imgLink} alt="Not Found" />
      {/* <div className="card-body">
      <p className="card-text">{str}</p>
    </div> */}
    </div>
  );
};

export default Item;
