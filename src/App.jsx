import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/principal/Home";
import HomeContent from "./pages/principal/HomeContent";
import ProdutoDetalhes from "./pages/principal/components/ProdutoDetalhes";
import Login from "./pages/login/Login";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path="sobre" element={<ProdutoDetalhes />} />
        <Route index element={<HomeContent />} />
        </Route>
        <Route path="/login" element={<Login />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

