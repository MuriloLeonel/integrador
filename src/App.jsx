import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/principal/Home";
import HomeContent from "./pages/principal/HomeContent";
import ProdutoDetalhes from "./pages/principal/components/ProdutoDetalhes";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="sobre" element={<ProdutoDetalhes />} />
        <Route index element={<HomeContent />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

