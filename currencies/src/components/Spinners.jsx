import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (

    <div className="spinner-container">
      <div className="loading-spinner">
      </div>
      <p className="waitMsg">Please, wait a moment. This may take a few seconds. </p>
    </div>
  );
}