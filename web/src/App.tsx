import React, { useEffect } from "react";

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
    <div>
      <header>
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
