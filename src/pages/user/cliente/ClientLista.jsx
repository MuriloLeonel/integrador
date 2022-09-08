import { useContext, useEffect } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../context/ClientContext";
import ClienteFiltro from "../components/ClientFiltro";
import ClienteTabela from "../components/ClientTabela";

export default function ClienteLista() {
  const { list } = useContext(Context);
  useEffect(() => {
    list();
  }, []);
  return (
    <div className="ClienteLista">
      <h3>Clientes</h3>
      <ClienteFiltro />
      <Nav>
        <Nav.Item>
          <Nav.Link as={Link} to="/clients"> Novo Cliente</Nav.Link>
        </Nav.Item>
      </Nav>
      <ClienteTabela />
    </div>
  );
}