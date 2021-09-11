export interface ICountryState {
  country: string | null;
  isLoading: boolean;
}

export interface ICountryApiRequest {
  country: string;
}

export interface ICountryCurrency {
  Germany: "EUR";
  Italy: "EUR";
  France: "EUR";
  Netherlands: "EUR";
  Russia: "RUR";
  "United States": "USD";
  Canada: "USD";
}

export enum CountryActionTypes {
  DEFINE_COUNTRY = "DEFINE_COUNTRY",
  SET_COUNTRY_LOADING = "SET_COUNTRY_LOADING",
}

export enum CountriesAvailable {
  UKRAINE = "UKRAINE",
  RUSSIA = "RUSSIA",
  UNITED_STATES = "UNITED STATES",
}

interface IDefineCountryAction {
  type: CountryActionTypes.DEFINE_COUNTRY;
  payload: string;
}

interface ICountryLoadingAction {
  type: CountryActionTypes.SET_COUNTRY_LOADING;
  payload: boolean;
}

export type CountryAction = IDefineCountryAction | ICountryLoadingAction;
