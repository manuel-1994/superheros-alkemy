import React, { useState } from "react";
import { HeroList } from "../heros/HeroList";
import { SearchHero } from "./SearchHero";

export const SearchScreen = () => {
  const [heros, setHeros] = useState("");
  return (
    <div className="row">
      <SearchHero setHeros={setHeros} />
      <hr />

      {heros === "" && <p className="ms-2"><span className="bg-secondary p-2">Buscar un heroe</span></p>}

      {heros !== "" && heros.length === 0 && <p className="ms-2"><span className="bg-danger p-2">El heroe no existe</span></p>}

      {heros.length > 0 && (
        <HeroList heros={heros}/>
      )}
    </div>
  );
};
