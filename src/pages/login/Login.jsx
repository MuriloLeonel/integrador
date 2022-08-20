import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Logo from '../../assets/img/centro-peia.png'

export default function Login() {
    return (
        <div className="bg-secundary">
            <Container >
                <Row>
                    <Col></Col>
                    <Col>
                        <Form>
                            <img src={Logo} width="300px" class="mt-4" />
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Endereço de Email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite a senha" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Manter Login" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Entrar
                            </Button>
                        </Form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}