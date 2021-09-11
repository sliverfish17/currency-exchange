export const defineCountry = (country: string) => ({
  type: "DEFINE_COUNTRY",
  payload: country,
});

export const setCountryLoaded = (isLoading: boolean) => ({
  type: "SET_COUNTRY_LOADING",
  payload: isLoading,
});
