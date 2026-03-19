import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  const getQuote = async () => {
    try {
      const response = await fetch("https://motivational-spark-api.vercel.app/api/quotes/random");
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      setQuote("Failed");
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div>
      <h1>Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={getQuote}>New Quote</button>
    </div>
  );
}

export default App;