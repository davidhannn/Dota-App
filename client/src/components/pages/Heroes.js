import React, { useEffect, useState, useContext } from "react";
// import dotaContext from "../../context/dotaContext";
import Hero from "../layout/Hero";
import heroData from "../data/heroes.json";

const Heroes = () => {
  // const DotaContext = useContext(dotaContext);
  // const [heroes, setHeroes] = useState([]);
  // DotaContext.getHeroes(setHeroes);

  // const keys = Object.keys(heroData);
  const heroes = [];
  console.log(heroData);

  Object.keys(heroData).map((key, i) => {
    heroes[i] = heroData[key];
  });

  console.log(heroes);

  // useEffect(() => {
  //   async function fetchData() {
  //     const list = await fetch("/heroes").then((res) => res.json());
  //     console.log(list);
  //     setHeroes(list.heroes);
  //   }
  //   fetchData();
  // }, []);

  // if (!heroes) {
  //   return null;
  // }
  return (
    <div className="hero-grid">
      {heroes.map((hero, i) => (
        <Hero hero={hero} key={i} />
      ))}
    </div>
  );
};

export default Heroes;
