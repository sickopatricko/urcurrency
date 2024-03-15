export default function ConvertFrom({ currencyNames, fromCurrency, flags }) {
  return (
    <>
      {currencyNames.map((currency, i) => (
        <option key={i} value={i === 0 ? fromCurrency : currency}>
          {/* {flags.map((flag, i) => {
            const flagName = flag.toUpperCase(); */}
          {/* })} */}
          {i === 0 ? fromCurrency : currency}
        </option>
      ))}
    </>
  );
}
