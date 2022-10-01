import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../../context/ClientContext";

function ClientRow({client}) {
  return (
    <tr>
      <td>{client.id}</td>
      <td>{client.nome}</td> 
      <td>{client.datanasc}</td>
      <td>{client.email}</td>
      <td>{client.password}</td>
    </tr>
  );
}

export default function ClienteTabela() {
  const { clients } = useContext(Context);
  return (
    <div className="ClienteTabela">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome Completo</th>
            <th>Data de Nascimento</th>
            <th>E-mail</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => <ClientRow client={client}/>)}
        </tbody>
      </Table>
    </div>
  );
}