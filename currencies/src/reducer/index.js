const initialState = {
  currencies: [],
  apiData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENCIES":
      return {
        ...state,
        currencies: action.payload,
      }
    case "SET_API_DATA":
      return {
        ...state,
        apiData: action.payload,
      }
    default:
      return state
  }
};

export default reducer;
