import React from "react";
import { useState } from "react";
import LoadingSpinner from "./Spinners";
import style from "./Currencies.module.css";
import { useEffect } from "react";
import Table from "./Table";
import { useNavigate } from "react-router-dom";

const Currencies = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [currencies, setCurrencies] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [selectedCurrency, setSelectedCurrency] = useState("");

  const navigate = useNavigate();

  useEffect(
    () => {
      setIsLoading(true);
      handleFetch();
    },
    // eslint-disable-next-line
    []
  );

  const handleFetch = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwtO1FhMxE_ajmNTsYTf2euPF4ZgLB1E_OlUeHXHFqr3LkqeFtb0AfYCaua_WazvF24/exec?endpoint=deals/currency&api_token=pat-na1-bef1be8f-9a4f-46db-bfd4-35889d271526"
    )
      .then((respose) => respose.json())
      .then((respose) => {
        setCurrencies(respose.data);
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage("Unable to fetch currencies");
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    setSelectedCurrency(e.target.value);
    console.log(selectedCurrency);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('entre')
    fetch(
      `https://script.google.com/macros/s/AKfycbwtO1FhMxE_ajmNTsYTf2euPF4ZgLB1E_OlUeHXHFqr3LkqeFtb0AfYCaua_WazvF24/exec?endpoint=deals/update&currency=${selectedCurrency}&api_token=pat-na1-bef1be8f-9a4f-46db-bfd4-35889d271526`
    )
      .then((respose) => respose.json())
      .then((respose) => {
        // ACA MANDAR LA RESP POR PROP
        console.log(respose.data);
        <Table data={respose.data} />;
        navigate('/table');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  let renderDetail = (
    <div className={style.background}>
      <div className={style.txtContainer}>
        <p className={style.selectCurrency}>Select a currency</p>
        <select
          className={style.select}
          value={selectedCurrency}
          onChange={handleChange}
        >
          <option value="" disabled>
            Currency
          </option>
          {currencies.length > 1
            ? currencies.map((c) => {
                return <option value={c}>{c}</option>;
              })
            : null}
        </select>
        <button className={style.continueBtn} onClick={handleSubmit}>Continue</button>
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
