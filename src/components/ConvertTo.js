export default function ConvertTo({ currencyNames, toCurrency }) {
  return (
    <>
      {currencyNames.map((currency, i) => (
        <option key={i} value={i === 0 ? toCurrency : currency}>
          {i === 0 ? toCurrency : currency}
        </option>
      ))}
    </>
  );
}
