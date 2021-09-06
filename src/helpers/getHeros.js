import axios from "axios";
export const getHeros = async (hero) => {
    const url =
      `https://superheroapi.com/api.php/4446431055379689/search/${hero}`;
    const {
      data: { results },
    } = await axios.get(url);

    return results
  };