import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Proposal from "./pages/Proposal/Proposal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/proposta" element={<Proposal />} />
    </Routes>
  );
}

export default App;
