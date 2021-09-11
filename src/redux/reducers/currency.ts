import {
  CurrencyAction,
  CurrencyActionTypes,
  ICurrencyState,
} from "./../../types/currency";
const initialState: ICurrencyState = {
  currencies: [],
  isLoading: true,
  chosen: null,
};

const currencyReducer = (
  state = initialState,
  action: CurrencyAction
): ICurrencyState => {
  switch (action.type) {
    case CurrencyActionTypes.SET_ACTUAL_CURRENCY:
      return {
        ...state,
        currencies: action.payload,
      };
    case CurrencyActionTypes.SET_CURRENCY_LOADED:
      return {
        ...state,
        isLoading: action.payload,
      };
    case CurrencyActionTypes.SET_CURRENCY_CHOSEN:
      return {
        ...state,
        chosen: action.payload,
      };
    default:
      return state;
  }
};

export default currencyReducer;
