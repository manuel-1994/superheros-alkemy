import React, { useState } from "react";
import { HeroList } from "../heros/HeroList";
import { SearchHero } from "./SearchHero";

export const SearchScreen = () => {
  const [heros, setHeros] = useState("");
  return (
    <div>
      <SearchHero setHeros={setHeros} />
      <hr />

      {heros === "" && <p>Buscar un heroe</p>}

      {heros !== "" && heros.length === 0 && <p>El heroe no existe</p>}

      {heros.length > 0 && (
        <HeroList heros={heros}/>
      )}
    </div>
  );
};
