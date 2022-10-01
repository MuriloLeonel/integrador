import { useContext } from "react";
import { Table } from "react-bootstrap";
import { Context } from "../../context/ParceiroContext";

function ParceiroRow({parceiro}) {
  return (
    <tr>
      <td>{parceiro.id}</td>
      <td>{parceiro.nome}</td> 
      <td>{parceiro.cnpj}</td>
      <td>{parceiro.telefone}</td>
      <td>{parceiro.proprietario}</td>
      <td>{parceiro.cpf}</td>
    </tr>
  );
}

export default function ParceiroTabela() {
  const { parceiro } = useContext(Context);
  return (
    <div className="ParceiroTabela">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome Completo</th>
            <th>CNPJ</th>
            <th>Telefone</th>
            <th>Proprietario</th>
            <th>CPF</th>
          </tr>
        </thead>
        <tbody>
          {parceiro.map((parceiro) => <ParceiroRow parceiro={parceiro}/>)}
        </tbody>
      </Table>
    </div>
  );
}