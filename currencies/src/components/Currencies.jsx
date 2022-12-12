import React from "react";
import { useState } from "react";
import LoadingSpinner from "./Spinners";
import style from "./Currencies.module.css";
import { useEffect } from "react";

const Currencies = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [currencies, setCurrencies] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  useEffect(
    () => {
      setIsLoading(true);
      handleFetch();
    },
    // eslint-disable-next-line
    []
  );

  const handleFetch = () => {
    // setIsLoading(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbwtO1FhMxE_ajmNTsYTf2euPF4ZgLB1E_OlUeHXHFqr3LkqeFtb0AfYCaua_WazvF24/exec?endpoint=deals/currency&api_token=pat-na1-bef1be8f-9a4f-46db-bfd4-35889d271526"
    )
      .then((respose) => respose.json())
      .then((respose) => {
        setCurrencies(respose.data);
        console.log("at fetch".currencies);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch currencies");
        setIsLoading(false);
      });
  };

  let renderDetail = (
    // console.log(currencies)
    <div className={style.background}>
        <div className={style.txtContainer}>
      <p className={style.selectCurrency} >Select a currency</p>
      <select className={style.select}>
        <option value="" disabled>
          Currency
        </option>
        {currencies.length > 1
          ? currencies.map((c) => {
              return <option value={c}>{c}</option>;
            })
          : null}
      </select>
      <button className={style.continueBtn}>Continue</button>
      </div>
    </div>
  );

  return (
    <div className={style.background}>
      <div className={style.txtContainer}>
        {isLoading ? <LoadingSpinner /> : renderDetail}
        {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    </div>
  );
};

export default Currencies;
