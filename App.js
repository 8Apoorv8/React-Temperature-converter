import React, { useState } from "react";
import "./App.css";
function App() {
  // let celcius=document.getElementById("cel");
  // let farahenite=document.getElementById("frah");

  // celcius.addEventListener("input",function(e)
  // {
  //   let c=e.target.value;
  //   let f=(c*(9/5))+32;
  //   farahenite=f;
  // })

  let [cel,setCel]=useState('');
  let [fra,setFra]=useState('');

  let celius=(e)=>
  {
    // to get current value of the input field
    let currV=e.target.value;
    // formula used for conversion
    let f=(currV*(9/5))+32;
    // use to set converted farhnite value to its input field
    setFra(f);
    // use to set current input value to input field itslef
    setCel(currV);

  }
  let frahnite=(e)=>
  {
    let currfV=e.target.value;
    let c=(currfV-32)*(5/9);
    setCel(c)
    setFra(currfV)
  }



  return (
    <>
      <div className="Main">
        <div>Temp Converter</div>
        <div className="Converter">
          <div className="celcuis">
            <input className="inputData" onInput={celius} type="number" placeholder="Celcius" value={cel}/>
          </div>
          <div className="frahnite">
            <input className="inputData" onInput={frahnite} type="number" placeholder="frahnite" value={fra} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
