import { useState } from "react";
import BtnSwitch from "./BtnSwitch";
import euroSign from "../assets/euro-sign.svg";
import chartLine from "../assets/chart-line.svg";

function WindowChange() {
  const btnData = [
    {
      id: 0,
      svgPath: euroSign,
      textContent: "Converter",
    },
    {
      id: 1,
      svgPath: chartLine,
      textContent: "Rates",
    },
  ];
  const [activeWindow, setWindow] = useState(null);

  return (
    <div className="window">
      {btnData.map((el, i) => (
        <BtnSwitch
          activeWindow={activeWindow}
          setWindow={setWindow}
          textContent={el.textContent}
          num={i}
          svgPath={el.svgPath}
          key={el.id}
        />
      ))}
    </div>
  );
}

export default WindowChange;
