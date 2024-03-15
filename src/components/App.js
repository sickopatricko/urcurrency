import "../index.css";
import ConverterBox from "./ConverterBox";
import NavBar from "./NavBar";
import LandingPage from "./LandingPage";

// const api = `ttps://api.frankfurter.app/latest?amount=${value}&from=${fromCurrency}&to=${toCurrency}`;

export default function App() {
  return (
    <>
      <section className="wrapper">
        <NavBar />
        <LandingPage />
      </section>
      <section className="converter-section">
        <ConverterBox />
      </section>
    </>
  );
}
