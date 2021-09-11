import axios from "axios";
import { ICountryApiRequest } from "../types/country";
import { TCurrency } from "../types/currency";

export const getCountryData = async () => {
  try {
    const res = await axios
      .get("https://geolocation-db.com/json/")
      .then((res) =>
        axios.get<ICountryApiRequest>(`http://ip-api.com/json/${res.data.IPv4}`)
      );
    console.log(res);

    return res.data.country;
  } catch (error) {
    console.log(error);
  }
};

export const getCurrency = async () => {
  try {
    const response = axios
      .get<TCurrency[]>(
        "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5"
      )
      .then((response) => response.data.slice(0, 3));
    return response;
  } catch (error) {
    console.log(error);
  }
};
