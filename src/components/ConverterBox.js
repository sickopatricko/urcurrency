import ConvertLists from "./ConvertLists";
import WindowChange from "./WindowChange";

export default function Converter({ fromCurrency, toCurrency }) {
  return (
    <div id="container">
      <WindowChange />
      <ConvertLists />
    </div>
  );
}
