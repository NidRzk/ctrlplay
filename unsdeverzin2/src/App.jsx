import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Detalhes from "./pages/Detalhes";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/catalogo" element={<Catalogo />} />

        <Route path="/detalhes/:id" element={<Detalhes />} />

        <Route path="/sobre" element={<Sobre />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;