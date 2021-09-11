import { useEffect, useState } from "react";
import { useActions } from "../hooks/useTypedAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

import style from "../styles/converter.module.scss";
import { getCountryData, getCurrency } from "../utils/api";
import CurrencyRow from "./CurrencyRow";

const Converter: React.FC = () => {
  const { defineCountry, setCountryLoaded, setCurrency, setCurrencyLoaded } =
    useActions();

  const { currencies, chosen } = useTypedSelector((state) => state.currency);

  useEffect(() => {
    getCountryData().then((info) => {
      if (info) {
        defineCountry(info);
        setCountryLoaded(false);
      }
    });
    getCurrency().then((data) => {
      if (data) setCurrency(data.map((currencies) => currencies));
      setCurrencyLoaded(false);
    });
  }, []);

  useEffect(() => {
    if (chosen) {
      setCount((prev) => {
        return { ...prev, firstCurrency: chosen, secondCurrency: chosen };
      });
    }
  }, [chosen]);

  const [count, setCount] = useState({
    firstCurrency: "",
    secondCurrency: "",
  });

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const exchangeCurrency = (
    firstCurrency: string,
    secondCurrency: string,
    value: string
  ) => {
    const currencyToUah = currencies.find(
      (currency) => currency.ccy === firstCurrency
    );
    const currencyFromUah = currencies.find(
      (currency) => currency.ccy === secondCurrency
    );
    if (currencyToUah && currencyFromUah) {
      const exchangedCurrency = (
        (+value * +currencyToUah.buy) /
        +currencyFromUah.buy
      ).toFixed(2);

      return exchangedCurrency;
    }
    return value;
  };

  useEffect(() => {
    const exchangedCurrency = exchangeCurrency(
      count.firstCurrency,
      count.secondCurrency,
      firstInput
    );
    setSecondInput(exchangedCurrency);
  }, [firstInput, count.firstCurrency]);

  useEffect(() => {
    const exchangedCurrency = exchangeCurrency(
      count.secondCurrency,
      count.firstCurrency,
      secondInput
    );
    setFirstInput(exchangedCurrency);
  }, [secondInput, count.secondCurrency]);

  const setFirstCurrency = (value: string) => {
    setCount((prev) => {
      return { ...prev, firstCurrency: value };
    });
  };

  const setSecondCurrency = (value: string) => {
    setCount((prev) => {
      return { ...prev, secondCurrency: value };
    });
  };

  return (
    <div className={style.converter}>
      <div className={style.converter__container}>
        Convert from
        <CurrencyRow
          setCurrency={setFirstCurrency}
          value={firstInput}
          currencies={currencies}
          chosen={chosen}
          setInput={setFirstInput}
        />
        To
        <CurrencyRow
          setCurrency={setSecondCurrency}
          value={secondInput}
          currencies={currencies}
          chosen={chosen}
          setInput={setSecondInput}
        />
      </div>
    </div>
  );
};

export default Converter;
