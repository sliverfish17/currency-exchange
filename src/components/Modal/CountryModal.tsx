import Portal from "./Portal";
import style from "../../styles/modal.module.scss";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useTypedAction";

interface ICountryModalProps {
  outsideClick: React.MouseEventHandler<HTMLDivElement>;
  active: boolean;
  country: string | null;
}

const CountryModal: React.FC<ICountryModalProps> = ({
  active,
  outsideClick,
  country,
}) => {
  const { isLoading: IsLoadingCountry } = useTypedSelector(
    (state) => state.country
  );
  const { isLoading: isLoadingCurrency, currencies } = useTypedSelector(
    (state) => state.currency
  );

  const { setCurrencyChosen } = useActions();

  const countryCurrency = {
    Germany: "EUR",
    Italy: "EUR",
    France: "EUR",
    Netherlands: "EUR",
    Russia: "RUR",
    "United States": "USD",
  };

  const availableCountries = (country: string | null) => {
    if (
      country !== "Germany" &&
      country !== "Italy" &&
      country !== "France" &&
      country !== "Netherlands" &&
      country !== "Russia" &&
      country !== "United States"
    ) {
      return (
        <div>
          <div className={style.modal__content_title}>
            Your country was defind as {country}. Unfortunately for now this
            country currency is not available, please pick one currency from
            below.
          </div>
          <div className={style.modal__content_btn_wrap}>
            {currencies.map((currency) => (
              <button
                onClick={() => setCurrencyChosen(currency.ccy)}
                key={currency.ccy}
                className={style.modal__content_button}
              >
                {currency.ccy}
              </button>
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <>
          <span className={style.modal__content_title}>
            Your country was defined as {country}, do you want to set{" "}
            {countryCurrency[country]} as your default currency?
          </span>
          <div>
            <button
              className={style.modal__content_button}
              onClick={() => setCurrencyChosen(countryCurrency[country])}
            >
              Yes
            </button>
            <button className={style.modal__content_button}>No</button>
          </div>
        </>
      );
    }
  };

  return (
    <Portal>
      <div className={active ? style.modal : ""} onClick={outsideClick}>
        <div className={active ? style.modal__content : ""}>
          {IsLoadingCountry || isLoadingCurrency ? (
            <div className={style.loader}></div>
          ) : (
            <div className={style.modal__content_container}>
              {availableCountries(country)}
            </div>
          )}
        </div>
      </div>
    </Portal>
  );
};

export default CountryModal;
