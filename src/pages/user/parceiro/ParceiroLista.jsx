import { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/ParceiroContext";
import { ParceiroFiltro } from "../parceiro/components/ParceiroFiltro";
import { ParceiroTabela } from "../parceiro/components/ParceiroTabela";

export default function ParceiroLista() {
  const { list } = useContext(Context);
  useEffect(() => {
    list();
  }, []);
  return (
    <div className="ParceiroLista">
      <h3>Clientes</h3>
      <ParceiroFiltro />
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/parceiro">
            {" "}
            Novo Parceiro
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <ParceiroTabela />
    </div>
  );
}
