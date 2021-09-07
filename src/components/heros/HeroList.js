import React from "react";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ heros, setTeam }) => {
  return (
    <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-4 mx-0 ">
        {heros.map((hero) => (
          <HeroCard key={hero.id} hero={hero} setTeam={setTeam}/>
        ))}
    </div>
  );
};
