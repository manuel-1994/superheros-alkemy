import axios from "axios";
import { getHeroByid, getHerosByName } from "../selectors";


export const getApiHero = async (value) => {
  let url;
  if (typeof value === "number") {
    url = `https://superheroapi.com/api.php/4446431055379689/${value}`;
    const { data } = await axios.get(url);
    return getHeroByid(data)
  } else {
    url = `https://superheroapi.com/api.php/4446431055379689/search/${value}`;
    const {
      data: { results },
    } = await axios.get(url);
    return getHerosByName(results)
  }
};
