import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/principal/Home";
import HomeContent from "./pages/principal/HomeContent";
import ProdutoDetalhes from "./pages/principal/components/ProdutoDetalhes";
import Login from "./pages/login/Login";
import ThemeProvider from 'react-bootstrap/ThemeProvider'

export default function App() {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
  minBreakpoint="xxs"
>
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
</ThemeProvider>

  );
}

