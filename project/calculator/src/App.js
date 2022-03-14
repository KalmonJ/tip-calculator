import React from "react";
import Calculator from "./components/calculator/Calculator";
import Logo from "./images/logo.svg";

function App() {
  return (
    <section className="main">
      <img className="main__logo" src= {Logo} alt = "logo"/>
      <Calculator calc = {calculateAll}/>
    </section>
  );
}


function calculateAll(value, percentage, numberPeople) {

  const percent = (value * percentage) / 100;
  const finalResult = percent / numberPeople;

  return {percent:percent, finalResult:finalResult};

}

export default App;
