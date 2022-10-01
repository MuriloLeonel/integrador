import { Button, Card, Col, Container, Form, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/Logo2.png";

export default function Login() {
  return (
    <Container
      fluid
      className="d-flex vh-100 justify-content-center align-items-center bg-light"
    >
      <Col xs={6} sm={8} md={10} lg={10} className="shadow-lg">
        <Card>
          <Row className="d-flex vh-100 justify-content-center align-items-center bg-lightg g-0">
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
                    <h3>Cadastro de Usuario</h3>
                    <Button variant="light" as={Link} to="/" size="sm"><i class="bi bi-arrow-left"></i></Button>{'Home'}  
                  </Col>
                </Row>
                <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control
                      type="Nome"
                      placeholder="Nome Completo"
                    />
                </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Digite a senha"
                    />
                  </Form.Group>
                  <Row>
                  <Form.Group as={Col}className="mb-3" controlId="formBasicName">
                                    <Form.Label>Empresa</Form.Label>
                                    <Form.Control type="name" placeholder="Nome da Empresa" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>CNPJ</Form.Label>
                                    <Form.Control type="unique" placeholder="CNPJ" />
                                </Form.Group>
                                
                                <Form.Group as={Col}className="mb-3" controlId="formBasicPhoneNumber">
                                    <Form.Label>Telefone</Form.Label>
                                    <Form.Control type="phonenumber" placeholder="Telefone" />
                                </Form.Group>
                  </Row>
                  <Row>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>Nome Proprietario</Form.Label>
                                    <Form.Control type="name" placeholder="Nome da Empresa" />
                                </Form.Group>
    
                                <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>CPF</Form.Label>
                                    <Form.Control type="unique" placeholder="CPF" />
                                </Form.Group>
                </Row>
                <Row>
                                <Form.Text> Endereço </Form.Text>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>CEP</Form.Label>
                                    <Form.Control type="NUMBER" placeholder="CEP da Empresa" />
                                </Form.Group>
    
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>Cidade</Form.Label>
                                    <Form.Control type="name" placeholder="Cidade da Empresa" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>Estado (SIGLA)</Form.Label>
                                    <Form.Control type="name" placeholder="Estado da Empresa" />
                                </Form.Group>
                        </Row>
                        <Row>
                        <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>Rua</Form.Label>
                                    <Form.Control type="name" placeholder="Cidade da Empresa" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="name" placeholder="Bairro da Empresa" />
                                </Form.Group>
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control type="name" placeholder="Numero da Empresa" />
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