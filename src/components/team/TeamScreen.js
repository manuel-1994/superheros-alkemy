import React from "react";
import { useState} from "react/cjs/react.development";
import { heros } from "../../data/heros";
import { HeroList } from "../heros/HeroList";

export const TeamScreen = () => {
  const [team, setTeam] = useState(heros)

  return (
    <div>
      <h2 className="text-center text-sm-start" >Equipo de heroes</h2>
      <hr />
      <HeroList heros={team} setTeam={setTeam}/>
    </div>
  );
};
