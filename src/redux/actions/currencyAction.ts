import { TCurrency } from "../../types/currency";

export const setCurrency = (currency: TCurrency[]) => ({
  type: "SET_ACTUAL_CURRENCY",
  payload: currency,
});

export const setCurrencyLoaded = (isLoading: boolean) => ({
  type: "SET_CURRENCY_LOADED",
  payload: isLoading,
});

export const setCurrencyChosen = (chosen: string) => ({
  type: "SET_CURRENCY_CHOSEN",
  payload: chosen,
});
