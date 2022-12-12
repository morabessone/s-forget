import axios from "axios";

export function getCurrencies() {

    const token = 'pat-na1-bef1be8f-9a4f-46db-bfd4-35889d271526'
  return async function (dispatch) {
    const currencies = await axios.get(
      `https://script.google.com/macros/s/AKfycbwtO1FhMxE_ajmNTsYTf2euPF4ZgLB1E_OlUeHXHFqr3LkqeFtb0AfYCaua_WazvF24/exec?endpoint=deals/currency&api_token=${token}`
    );
    dispatch({
      type: "GET_CURRENCIES",
      payload: currencies.data,
    });
  };
}
