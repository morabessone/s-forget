import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

const Landing = () => {

  return (
    <div className={style.background}>
      <div className={style.txtContainer}>
        <p className={style.txt}>WELCOME TO</p>
        <p className={style.currency}>CURRENCY FX</p>
        <br></br>
        <Link exact to = "/currencies">
        <button className={style.btn}>START</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
