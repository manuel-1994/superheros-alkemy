import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export const LoginScreen = () => {
  return (
    <div className="wrapper">
      <div className="login">
        <article className="login__content">
          <h2 className="login__title">ALKEMY</h2>
          <form className="login__form">
            <label className="login__form__label" htmlFor="username">
              Username
            </label>
            <input id="username" className="login__form__input" type="text" />
            <label className="login__form__label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              className="login__form__input"
              type="password"
            />
            <Link className="login__form__input btn" to="/">
              Sign Up
            </Link>
          </form>
        </article>
      </div>
    </div>
  );
};
