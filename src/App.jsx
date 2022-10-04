import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/principal/Home";
import HomeContent from "./pages/principal/HomeContent";
import ProdutoDetalhes from "./pages/principal/components/ProdutoDetalhes";
import Login from "./pages/login/Login";
import Create from "./pages/user/cliente/ClientCreate";
import Parceiro from "./pages/user/parceiro/ParceiroCreate";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "./App.css";
import PainelForm from "./pages/painel/PainelForm";
import Perfil from "./pages/perfil/Perfil";
import ParceiroContext from "../src/pages/user/context/ParceiroContext";
import EnderecoContext from "../src/pages/user/context/EnderecoContext";
import ClientContext from "./pages/user/context/ClientContext";
import Cliente from "./pages/user/cliente/Cliente";

export default function App() {
  return (
      <ParceiroContext>
        <EnderecoContext>
          <ThemeProvider
            breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
            minBreakpoint="xxs"
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Home />}>
                  <Route path="sobre" element={<ProdutoDetalhes />} />
                  <Route index element={<HomeContent />} />
                  <Route path="painel" element={<PainelForm />} />
                  <Route path="/perfil" element={<Perfil />} />
                </Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/login/create" element={<Create />}></Route>
                <Route path="/parceiro" element={<Parceiro />}></Route>
              </Routes>
            </BrowserRouter>
          </ThemeProvider>
        </EnderecoContext>
      </ParceiroContext>
  );
}
