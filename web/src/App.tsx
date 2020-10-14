import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const baseUrl = process.env.REACT_APP_API_HOST || "/";

function App() {
  useEffect(() => {
    const test = async () => {
      const res = await fetch(`${baseUrl}api/`);
      const text = await res.text();
      console.log(text);
    };

    try {
      test();
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
