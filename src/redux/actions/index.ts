import * as CountryActionCreators from "./countryAction";
import * as CurrencyActionCreators from "./currencyAction";

const exportedActions = {
  ...CountryActionCreators,
  ...CurrencyActionCreators,
};

export default exportedActions;
