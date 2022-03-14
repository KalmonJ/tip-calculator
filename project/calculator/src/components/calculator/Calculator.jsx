import "./style.css";
import React, { useState } from "react";
import IconDollar from "../../images/iconDollar.svg";
import IconPerson from "../../images/iconPerson.svg";

function Calculator({ calc }) {
  const [renderButtons] = useState([5, 10, 15, 25, 50]);
  const [inputNumber, setInputNumber] = useState("");
  const [inputPeople, setInputPeople] = useState("");
  const [buttonNumber, setButtonNumber] = useState("");
  const [result, setResult] = useState({finalResult:"0.00", percent:"0.00"});

  return (
    <article className="main__card">
      <section className="main__buttons" >
        <p className="paragraph">Bill</p>
        <div className="main__div--input">
          <img src={IconDollar} alt="icon of dollar" className="IconDollar"/>
          <input onChange={(event) => {
            setInputNumber(Number(event.target.value));
          }} placeholder = "0" className="inputNumber" type="number" name="insereNumero" />
        </div>
        <p>Select Tip %</p>
        <section className="button__layout">
          {renderButtons.map((item, index) => {
            return (
              <button onClick={(event) => {
                setButtonNumber(Number(event.target.value));
                
              }} className="button__main" key={index} value={item}>{item}%</button>
            )
          })}

        </section>
        <p className="NumberOfPeople">Number of People</p>
        <div className="main__div--input">
          <img src={IconPerson} alt="icon of person" className="IconPerson"/>
          <input onChange={(event) => {
            setInputPeople(Number(event.target.value));
          }} onKeyDown = {(event) => {
            if (event.key === "Enter" && event.target.value !== "0" && event.target.value !== "" ){
              setResult(calc(inputNumber, buttonNumber, inputPeople));
            }
          }} placeholder = "0" type="number" name="input" className="inputPeople" />
        </div>
      </section>
      <section className="result" >
        <div className="showResult">
          <p>Tip amount<br/> <span className="person">/ person</span></p>
          <span className="result__span">$ {Number(result.finalResult).toFixed(2)} </span>
        </div>
        <div className="showResult">
          <p>Total<br/> <span className="person">/ person</span> </p>
          <span className="result__span">$ {Number(result.percent).toFixed(2)} </span>
        </div>
        <button onClick={(event) => {
          window.location.reload(true);
        }} type="reset" className="Button__reset" >RESET</button>
      </section>
    </article>
  );
}

export default Calculator;