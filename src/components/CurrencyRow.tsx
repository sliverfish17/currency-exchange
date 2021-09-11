import { useEffect, useState } from "react";
import style from "../styles/converter.module.scss";
import { TCurrency } from "../types/currency";

interface ICurrencyRowProps {
  currencies: TCurrency[];
  chosen: string | null;
  setInput: Function;
  value: string;
  setCurrency: Function;
}
const CurrencyRow: React.FC<ICurrencyRowProps> = ({
  value,
  currencies,
  chosen,
  setInput,
  setCurrency,
}) => {
  const [inputField, setInputField] = useState("");
  const [onFocus, setOnFocus] = useState(false);
  const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputField(e.target.value);
    setInput(e.target.value);
  };
  useEffect(() => {
    if (!onFocus) {
      setInputField(value);
    }
  }, [onFocus, value]);

  return (
    <div className={style.converter__form}>
      <input
        type="number"
        className={style.input}
        value={onFocus ? inputField : value}
        onChange={inputChange}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
      />
      {chosen ? (
        <select
          className={style.input__select}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option>{chosen}</option>
          {currencies
            .filter((active) => active.ccy !== chosen)
            .map((currency) => (
              <option className={style.input__options} key={currency.ccy}>
                {currency.ccy}
              </option>
            ))}
        </select>
      ) : (
        <select
          className={style.input__select}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option disabled selected>
            CUR
          </option>
          {currencies.map((currency) => (
            <option className={style.input__options} key={currency.ccy}>
              {currency.ccy}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CurrencyRow;
