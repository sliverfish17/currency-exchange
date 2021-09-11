export interface ICurrencyState {
  currencies: TCurrency[];
  isLoading: boolean;
  chosen: string | null;
}

export type TCurrency = {
  ccy: string;
  buy: number;
};

export enum CurrencyActionTypes {
  SET_ACTUAL_CURRENCY = "SET_ACTUAL_CURRENCY",
  SET_CURRENCY_LOADED = "SET_CURRENCY_LOADED",
  SET_CURRENCY_CHOSEN = "SET_CURRENCY_CHOSEN",
}

interface ISetCurrencyAction {
  type: CurrencyActionTypes.SET_ACTUAL_CURRENCY;
  payload: TCurrency[];
}

interface ICurrencyLoadingAction {
  type: CurrencyActionTypes.SET_CURRENCY_LOADED;
  payload: boolean;
}

interface ICurrencyChosenAction {
  type: CurrencyActionTypes.SET_CURRENCY_CHOSEN;
  payload: string;
}

export type CurrencyAction =
  | ISetCurrencyAction
  | ICurrencyLoadingAction
  | ICurrencyChosenAction;
