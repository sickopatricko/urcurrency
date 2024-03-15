import { useEffect, useState } from "react";
import ConvertFrom from "./ConvertFrom";
import Output from "./Output";
import ConvertTo from "./ConvertTo";
import ReverseButton from "./ReverseButton";
import { Loader } from "./Loader";

export default function ConvertLists() {
  const [value, setValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("EUR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState("");
  const [rate, setRate] = useState({});
  const [flags, setFlags] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const currencyNames = Object.keys(rate);

  useEffect(() => {
    async function countryFlags() {
      const res = await fetch(`https://flagcdn.com/en/codes.json`);
      const data = await res.json();
      const flags = Object.keys(data);
      setFlags(flags);
    }
    countryFlags();
  }, []);

  useEffect(() => {
    async function getNames() {
      const res = await fetch(`https://api.frankfurter.app/latest`);
      const data = await res.json();
      console.log(data.rates);
      setRate(data.rates);
    }
    getNames();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    async function apiCall() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${value}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConverted(data.rates[toCurrency]);
      setIsLoading(false);
    }
    apiCall();
  }, [value, fromCurrency, toCurrency]);
  return (
    <>
      <div className="form">
        <label>
          <span>Amount</span>
          <input
            type="text"
            onChange={e => setValue(Number(e.target.value))}
            value={value}
            placeholder="enter some value..."
          />
        </label>
        <label>
          <span>From</span>
          <select
            value={fromCurrency}
            onChange={e => setFromCurrency(e.target.value)}
          >
            <ConvertFrom
              currencyNames={currencyNames}
              fromCurrency={fromCurrency}
              flags={flags}
            />
          </select>
        </label>

        <ReverseButton
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          setFromCurrency={setFromCurrency}
          setToCurrency={setToCurrency}
        />

        <label>
          <span>To</span>
          <select
            value={toCurrency}
            onChange={e => setToCurrency(e.target.value)}
          >
            <ConvertTo currencyNames={currencyNames} toCurrency={toCurrency} />
          </select>
        </label>
      </div>

      {value ? (
        <div className="output">
          <Output
            converted={converted}
            toCurrency={toCurrency}
            value={value}
            fromCurrency={fromCurrency}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
}
