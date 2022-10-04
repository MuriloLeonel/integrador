import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Logo from "../../assets/img/Logo2.png";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center bg-light"
    >
      <Col xs={6} sm={8} md={10} lg={8} className="shadow-lg">
        <Card>
          <Row className="g-0">
            <Col md={6}>
              <Button variant="light" as={Link} to="/" size="sm">
                <i class="bi bi-arrow-left"></i>
              </Button>
              {"Home"}
              <img className="img-fluid rounded-start" src={Logo} alt="" />
            </Col>
            <Col md={6}>
              <Card.Body className="p-5">
                <Row>
                  <Col className="d-flex justify-content-between">
                    <h3>Entrar</h3>
                  </Col>
                </Row>
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Endereço de Email"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite a senha"
                    />
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
                      Entrar
                    </Button>
                    <Button as={Link} to={`/login/create`}>
                      Cadastrar
                    </Button>
                    <div className=" d-grid gap-2">
                      <Button variant="link">
                        Esqueceu a Senha? Clique Aqui
                      </Button>
                    </div>
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
