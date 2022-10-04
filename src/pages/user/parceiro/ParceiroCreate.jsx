import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Logo from "../../../assets/img/Logo2.png";
import { Context } from "../context/ParceiroContext";
import { Context as EnderecoContexto } from "../context/EnderecoContext";
import { useContext, useState } from "react";
export default function ParceiroCreate() {
  const { create } = useContext(Context);
  const { createEndereco } = useContext(EnderecoContexto);

  const [nome, setNome] = useState();
  const [cnpj, setCnpj] = useState();
  const [telefone, setTelefone] = useState();
  const [proprietario, setProprietario] = useState();
  const [cpf, setCpf] = useState();

  const submit = (event) => {
    event.preventDefault();
    create(nome, cnpj, telefone, proprietario, cpf);
  };

  const [cep, setCep] = useState();
  const [cidade, setCidade] = useState();
  const [estado, setEstado] = useState();
  const [rua, setRua] = useState();
  const [bairro, setBairro] = useState();
  const [numero, setNumero] = useState();

  const submite = (event) => {
    event.preventDefault();
    createEndereco(cep, cidade, estado, rua, bairro, numero);
  };

  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center bg-light"
      onSubmit={submit}
    >
      <Col xs={6} sm={8} md={10} lg={10} className="shadow-lg">
        <Card>
          <Row className="d-flex vh-100 justify-content-center align-items-center bg-lightg g-0">
            <Col md={6}>
              <img className="img-fluid rounded-start" src={Logo} />
            </Col>
            <Col md={6}>
              <Card.Body className="p-5">
                <Row>
                  <Col className="d-flex justify-content-between">
                    <h3>Cadastro de Parceiro</h3>
                  </Col>
                </Row>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome da empresa</Form.Label>
                    <Form.Control type="Nome" placeholder="Nome Completo" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite a senha"
                    />
                  </Form.Group>
                  <Row>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicName"
                    >
                      <Form.Label>Empresa</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Nome da Empresa"
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicNumber"
                    >
                      <Form.Label>CNPJ</Form.Label>
                      <Form.Control
                        type="unique"
                        placeholder="CNPJ"
                        value={cnpj}
                        onChange={(event) => setCnpj(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicPhoneNumber"
                    >
                      <Form.Label>Telefone</Form.Label>
                      <Form.Control
                        type="phonenumber"
                        placeholder="Telefone"
                        value={telefone}
                        onChange={(event) => setTelefone(event.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicName"
                    >
                      <Form.Label>Nome Proprietario</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Nome da Empresa"
                        value={proprietario}
                        onChange={(event) =>
                          setProprietario(event.target.value)
                        }
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicNumber"
                    >
                      <Form.Label>CPF</Form.Label>
                      <Form.Control
                        type="unique"
                        placeholder="CPF"
                        value={cpf}
                        onChange={(event) => setCpf(event.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row onSubmit={submite}>
                    <Form.Text> Endereço </Form.Text>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicNumber"
                    >
                      <Form.Label>CEP</Form.Label>
                      <Form.Control
                        type="NUMBER"
                        placeholder="CEP da Empresa"
                        value={cep}
                        onChange={(event) => setCep(event.target.value)}
                      />
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicName"
                    >
                      <Form.Label>Cidade</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Cidade da Empresa"
                        value={cidade}
                        onChange={(event) => setCidade(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicName"
                    >
                      <Form.Label>Estado (SIGLA)</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Estado da Empresa"
                        value={estado}
                        onChange={(event) => setEstado(event.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Row>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicName"
                    >
                      <Form.Label>Rua</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Cidade da Empresa"
                        value={rua}
                        onChange={(event) => setRua(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicNumber"
                    >
                      <Form.Label>Bairro</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Bairro da Empresa"
                        value={bairro}
                        onChange={(event) => setBairro(event.target.value)}
                      />
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      className="mb-3"
                      controlId="formBasicName"
                    >
                      <Form.Label>Numero</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Numero da Empresa"
                        value={numero}
                        onChange={(event) => setNumero(event.target.value)}
                      />
                    </Form.Group>
                  </Row>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Lembra-me" />
                  </Form.Group>
                  <div className="d-grid gap-2">
                    <Button
                      variant="primary"
                      type="submit"
                      className="full-width"
                    >
                      Cadastrar
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Container>
  );
}
