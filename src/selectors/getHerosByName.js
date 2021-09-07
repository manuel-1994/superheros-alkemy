import { heros } from "../data/heros";

export const getHerosByName = (result) => {
  if (result === undefined) return []
  if (typeof result === "object") {
    return result.map(({ id, name, image }) => {
      return {
        id: id,
        name: name,
        image: image.url,
      };
    });
  }else{
    return heros.find(hero=> hero.name===result)
  }
};
