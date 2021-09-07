export const getHeroByid = (hero) => {
  console.log(typeof hero);
  if (hero === undefined) return [];

  const { id, name, image, powerstats, appearance, biography, work } = hero;
  return {
    id: id,
    name: name,
    image: image.url,
    powerStats: powerstats,
    alignment: biography.alignment,
    info: {
      fullName: biography["full-name"],
      aliases: biography.aliases,
      weight: appearance.weight[1],
      height: appearance.height[1],
      eyeColor: appearance["eye-color"],
      hairColor: appearance["hair-color"],
      work: work.base,
    },
  };
};
