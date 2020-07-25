import React, { useEffect, useState, useContext } from "react";
// import dotaContext from "../../context/dotaContext";
import Hero from "../layout/Hero";

const Heroes = () => {
  // const DotaContext = useContext(dotaContext);
  const [heroes, setHeroes] = useState([]);
  // DotaContext.getHeroes(setHeroes);

  console.log(heroes);

  useEffect(() => {
    async function fetchData() {
      const list = await fetch("/heroes").then((res) => res.json());
      console.log(list);
      setHeroes(list.heroes);
    }
    fetchData();
  }, []);

  if (!heroes) {
    return null;
  }
  return (
    <div className="hero-grid">
      {heroes.map((hero, id) => {
        return <Hero key={id} hero={hero}></Hero>;
      })}
    </div>
  );
};

export default Heroes;
