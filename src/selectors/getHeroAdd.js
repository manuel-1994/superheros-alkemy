import { heros } from "../data/heros";

export const getHeroAdd = (hero) => {
  const { alignment } = hero;

  if (heros.length === 0) return heros.push(hero);
  if (heros.length >= 6) return alert("Tu equipo está completo");
  if (heros.find(({ id }) => id === hero.id))
    return alert("El heroe debe ser diferente");
  switch (alignment) {
    case "good":
      const herosGood = heros.filter(
        ({ alignment }) => alignment === "good"
      );
      herosGood.length < 3
        ? heros.push(hero)
        : alert("Solo puedes tener 3 heroes buenos en tu equipo");
      break;
    case "bad":
      const herosBad = heros.filter(
        ({ alignment }) => alignment === "bad"
      );
      herosBad.length < 3
        ? heros.push(hero)
        : alert("Solo puedes tener 3 heroes malos en tu equipo");
      break;
    default:
      return heros.push(hero);
  }
};
