import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container mt-5 border b-1 border-white p-5">
        <Weather />
        <footer className="mt-5 text-muted text-center">
          <a
            href="https://github.com/vsenapathi/weather-react"
            target="_blank"
            title="Github Repository "
          >
            Open Source Code
          </a>{" "}
          by Vathsalya Senapathi
        </footer>
      </div>
    </div>
  );
}

export default App;
