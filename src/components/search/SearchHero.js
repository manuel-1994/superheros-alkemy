import React from "react";
import { useState } from "react/cjs/react.development";
import { getApiHero } from "../../helpers/getApiHero";

export const SearchHero = ({ setHeros }) => {
 
  const [inputValue, setinputValue] = useState("");
  const handleInputChange = (e) => {
    setinputValue(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if(inputValue==="") return setHeros(inputValue)
    getApiHero(inputValue).then(heros=> setHeros(heros))
  };

  return (
    <>
      <h2 className=" text-center text-sm-start">Buscar Heroe</h2>
      <form onSubmit={handleSearch}>
        <input
          className="ms-2"
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
