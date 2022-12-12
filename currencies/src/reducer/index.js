const initialState = {
  currencies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CURRENCIES":
      return {
        ...state,
        currencies: action.payload,
      }
  }
};

export default reducer;
