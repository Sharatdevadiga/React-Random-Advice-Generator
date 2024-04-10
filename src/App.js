import "./styles.css";
import { useState, useEffect } from "react";

export default function App() {
  const [advice, setAdvice] = useState("Click the button to get advice");
  const [count, setCount] = useState(-1)

  async function getAdvice(){
    let res = await fetch('https://api.adviceslip.com/advice')
    let data = await res.json()
    setAdvice(data.slip.advice)
    setCount(c => c+1)
    console.log(data)
  }

  useEffect(function(){
    getAdvice()
  },[])

  // components
  function GetAdviceButton(){
    return (
      <button onClick={getAdvice}>Get advice</button>
    )
  }

  function Message(){
    return(
      <div>
        <p>You got <strong>{count}</strong> piece of advice</p>
      </div>
    )
  }


  return (
    <div className="App container">
      <GetAdviceButton/>
      <div className="advice">
        <h2>{advice}</h2>
      </div>
      <Message/>
    </div>
  );
}
