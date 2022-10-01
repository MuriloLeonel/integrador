import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Logo from "../../../assets/img/Logo2.png";
import { Context} from "../context/ClientContext"
import { useContext, useState } from "react";

export default function ClientsCrate() {

  const { create } = useContext(Context);
  const [nome, setNome] = useState();
  const [datanasc, setDatanasc] = useState();
  const [email, setEmail  ] = useState();
  const [password, setPassword] = useState();
  
    const submit = (event) => {
     event.preventDefault();
    create(nome, datanasc, email, password);
    }
  return (
    <Container
    fluid
    className="d-flex vh-100 justify-content-center align-items-center bg-light" onSubmit={submit}
  >
    <Col xs={6} sm={8} md={10} lg={8} className="shadow-lg">
      <Card>
        <Row className="g-0">
          <Col md={6}>
            <img
              className="img-fluid rounded-start"
              src={Logo}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="p-5">
              <Row>
                <Col className="d-flex justify-content-between">
                  <h3>Cadastro Usuario</h3>
                </Col>
              </Row>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Label>Nome</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="Nome Completo" value ={nome} onChange={(event) => setNome(event.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDate">
                      <Form.Label>Data de nascimento</Form.Label>
                      <Form.Control type="date" placeholder="Data de Nascimento" value ={datanasc} onChange={(event) => setDatanasc(event.target.value)} />
                  </Form.Group>
                 <Form.Group className="mb-3" controlId="formBasicEmail"/>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="Email"
                    placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}  
                  />
               <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Senha</Form.Label>
                   <Form.Control type="password" placeholder="Digite a senha" value={password} onChange={(event) => setPassword(event.target.value)}  />
                   </Form.Group>
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
