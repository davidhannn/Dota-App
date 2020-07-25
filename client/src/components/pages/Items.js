import React, { useState, useEffect } from "react";
import Item from "./Item";

const Items = () => {
  const [items, setItems] = useState([]);
  const [secretShop, setSecretShop] = useState([]);
  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const list = await fetch("/items").then((res) => res.json());
      const allItems = list.items;
      const secretItems = allItems.filter((item) => item.secret_shop === 1);
      const recipeItems = allItems.filter((item) => item.recipe === 1);
      setSecretShop(secretItems);
      setRecipe(recipeItems);
      setItems(allItems);
    }
    fetchData();
  }, []);

  return (
    <div className="item-container">
      <h3>Secret Shop</h3>
      <div className="item-grid">
        {secretShop.map((item, id) => {
          return <Item key={id} item={item}></Item>;
        })}
      </div>
      <h3>Recipe Items</h3>
      <div className="item-grid">
        {recipe.map((item, id) => {
          return <Item key={id} item={item}></Item>;
        })}
      </div>
      <h3>All Items</h3>
      <div className="item-grid">
        {items.map((item, id) => {
          return <Item key={id} item={item}></Item>;
        })}
      </div>
    </div>
  );
};

export default Items;
