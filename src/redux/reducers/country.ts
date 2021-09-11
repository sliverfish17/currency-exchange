import {
  CountryAction,
  CountryActionTypes,
  ICountryState,
} from "./../../types/country";
const initialState: ICountryState = {
  country: "",
  isLoading: true,
};

const countryReducer = (state = initialState, action: CountryAction) => {
  switch (action.type) {
    case CountryActionTypes.DEFINE_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };
    case CountryActionTypes.SET_COUNTRY_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default countryReducer;
