import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import Logo from "../../../assets/img/Logo2.png";
import { Link } from "react-router-dom";

export default function ClientsCrate() {
  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center bg-light"
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
                      placeholder="Nome Completo"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicDate">
                        <Form.Label>Data de nascimento</Form.Label>
                        <Form.Control type="date" placeholder="Data de Nascimento"/>
                    </Form.Group>
                   <Form.Group className="mb-3" controlId="formBasicEmail"/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="Email"
                      placeholder="Email"
                    />
                 <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                     <Form.Control type="password" placeholder="Digite a senha" />
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