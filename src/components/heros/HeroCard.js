import React from "react";
import "./Heros.css";
export const HeroCard = ({
  id,
  name,
  image,
  powerStats,
  appearance,
  biography,
  work,
}) => {
  return (
    <div className="card mb-3 mx-auto mx-lg-2 " style={{ width: 240 }}>
      {image && (
        <img
          src={image}
          className="card-img-top"
          alt={name}
          style={{ maxHeight: 272 }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <button className="btn btn-primary">Añadir</button>
      </div>
    </div>
  );
};
