import { useState, useEffect } from "react";

export default function Output({ converted, toCurrency, fromCurrency }) {
  const valueOfOne = 1;
  const [convertedToOne, setConvertedToOne] = useState(null);
  useEffect(() => {
    async function apiCall() {
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${valueOfOne}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedToOne(data.rates[toCurrency]);
    }
    apiCall();
  }, [fromCurrency, toCurrency, valueOfOne]);
  return (
    <>
      <h2>
        {converted} {toCurrency}
      </h2>
      <p>
        1 {fromCurrency} = {convertedToOne} {toCurrency}
      </p>
    </>
  );
}
