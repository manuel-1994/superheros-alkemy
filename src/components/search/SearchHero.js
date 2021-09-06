import React from "react";
import { useState } from "react/cjs/react.development";
import { getHeroByName } from "../../selectors/getHeroByName";

export const SearchHero = ({ setHeros }) => {
 
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    if(inputValue==="") return setHeros(inputValue)
    getHeroByName(inputValue).then(heros=> setHeros(heros))
  };

  return (
    <>
      <h2>Buscar Heroe</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name='inputValue'
          value={inputValue}
          autoComplete="on"
          onChange={handleInputChange}
        />
        <button>buscar</button>
      </form>
    </>
  );
};
