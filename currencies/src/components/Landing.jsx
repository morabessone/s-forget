import React from "react";
import style from "./Landing.module.css";

const Landing = () => {
  return (
    <div className={style.background}>
      <h2 className={style.txt}>Welcome to Currency FX</h2>
      <button className={style.btn}>START</button>
    </div>
  );
};

export default Landing;
