import React from "react";
import { Redirect, useParams } from "react-router";
import { getHerosByName, getInfo } from "../../selectors";

export const HeroScreen = ({history}) => {
  const { heroId } = useParams();
  const hero = getHerosByName(heroId);

  if (!hero) {
    return <Redirect to="./home" />;
  }
  const { name, image, info } = hero;

  const inf = getInfo(info);

  const handleReturn = () => {
    history.goBack()
  }
  return (
    <div className="row mx-auto">
      <div className="col-8 col-md-4 mx-auto">
        <img
          className="img-thumbnail "
          src={image}
          alt={name}
        />
      </div>
      <div className="col-8 mx-auto">
        <h3>{name}</h3>
        <ul className="row">
          {inf.map((data) => (
            <li key={data.data}>
              {data.data} :{" "}
              {typeof data.value === "string"
                ? data.value
                : data.value.map((aliases) => <p key={aliases}>[{aliases}]</p>)}
            </li>
          ))}
          <button className="btn btn-light mt-4 col-md-4" onClick={handleReturn}>return</button>
        </ul>
      </div>
    </div>
  );
};
