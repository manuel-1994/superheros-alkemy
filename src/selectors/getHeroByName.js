import { getHeros } from "../helpers/getHeros";

export const getHeroByName = async (name) => {
  const heros = await getHeros(name);
  if (heros === undefined) return [];
  return heros.map(
    ({ id, name, image, powerstats, appearance, biography, work }) => {
      return {
        id: id,
        name: name,
        image: image.url,
        powerStats: powerstats,
        appearance: {
          hairColor: appearance["hair-color"],
          eyeColor: appearance["eye-color"],
          height: appearance.height[1],
          weight: appearance.weight[1],
        },
        biography: {
          aliases: biography.aliases,
          alignment: biography.alignment,
          fullName: biography["full-name"],
        },
        work: work.base,
      };
    }
  );
};
