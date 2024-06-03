import { useState } from "react";
import "./App.css";
import AppR from "./AppR";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppR />
    </>
  );
}

export default App;
