import React, { useState, useEffect } from "react";
import Item from "./Item";
import ItemDetails from "../data/itemDetails";
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import { FormHelperText } from "@material-ui/core";

const HtmlToolTip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.9)",
    maxWidth: 200,
    fontSize: theme.typography.pxToRem(10),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

const Items = () => {
  const [items, setItems] = useState([]);
  const [itemImg, setItemImg] = useState([]);
  const [secretShop, setSecretShop] = useState([]);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    Object.keys(ItemDetails).map((key, i) => items.push(ItemDetails[key]));

    const itemImg = items.map((item) => `http://cdn.dota2.com` + item.img);

    setItemImg(itemImg);
    setItems(items);
  }, []);

  // const { attrib, cd, charges, cost, dname, hint, id, img, notes } =
  //   items && items;
  console.log(items);
  // console.log(itemImg);

  return (
    <div className="item-container">
      {/* <div className="item-grid"></div> */}
      {/* {itemImg.flatMap((item) =>
        item.includes("recipe") ? (
          []
        ) : (
          <img
            className="hero-ability-icon"
            src={item}
            onerror="this.style.display='none'"
          />
        )
      )} */}

      {items.flatMap((item, i) =>
        item.img.includes("recipe") ? (
          []
        ) : (
          // <Grid item>
          <HtmlToolTip
            disableFocusListener
            disableTouchListener
            title={
              <div>
                <p>{item.dname} </p>
                <p>Cost: {item.cost} </p>
              </div>
            }
          >
            <img src={`http://cdn.dota2.com` + item.img} />
          </HtmlToolTip>
          // </Grid>
        )
      )}
    </div>
  );
};

export default Items;
