import React from "react";
import { Link } from "react-router-dom";
import { getApiHero } from "../../helpers/getApiHero";
import { getHeroAdd, getHeroDel, getInfo } from "../../selectors";
import "./Heros.css";
export const HeroCard = ({ hero, setTeam }) => {
  /* destructuración de hero */
  const { id, name, image, powerStats} = hero;

  /*selector que transforma el objeto powerStats a array de objetos */
  const stats = getInfo(powerStats);

  /* función para agregar herore al equipo */
  const handleAdd = (e) => {
    getApiHero(parseInt(id)).then((hero) => getHeroAdd(hero));
  };
  /* función para eliminar herore al equipo */
  const handleDelete = (e) => {
    setTeam([...getHeroDel(hero)]);
  };


  return (
    <div className="card mb-3 mx-auto mx-lg-2 " style={{ width: 290 }}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ maxHeight: 300 }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        {!powerStats ? (
          <button onClick={handleAdd} className="btn btn-primary">
            Añadir
          </button>
        ) : (
          <>
            {
              <ul>
                {stats.map((stat) => (
                  <li key={stat.data}>
                    {stat.data}: {stat.value}
                  </li>
                ))}
              </ul>
            }
            <Link to={`./hero/${name}`}>
              detalles
            </Link>

            <button onClick={handleDelete} className="btn btn-danger">
              eliminar
            </button>
          </>
        )}
      </div>
    </div>
  );
};
