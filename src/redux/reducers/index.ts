import { combineReducers } from "redux";
import currencyReducer from "./currency";
import countryReducer from "./country";

export const rootReducer = combineReducers({
  currency: currencyReducer,
  country: countryReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
