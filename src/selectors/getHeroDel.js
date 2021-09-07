import { heros } from "../data/heros";

export const getHeroDel = (hero) => {
    heros.pop(hero);
    return heros
};
