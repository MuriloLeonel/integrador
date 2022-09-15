import { Button, Col, Container, Form, Row } from "react-bootstrap";


export default function ParceiroCreate() {
    return (
        <div className="bg-secundary">
            <Container >
             <Form>  
                    <Col>
                        <Row>
                            <Form.Text> Cadastro de Usuario</Form.Text>
                            <Form.Group as={Col}className="mb-1" controlId="formBasicName">
                                    <Form.Label>Usuario</Form.Label>
                                    <Form.Control type="name" placeholder="Login do usuario" />
                                </Form.Group>
    
                            <Form.Group as={Col}className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Senha</Form.Label>
                                    <Form.Control type="password" placeholder="Digite a senha do seu usuario" />
                                </Form.Group>
                        </Row>
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
                                
                                <Form.Group as={Col} className="mb-3" controlId="formBasicNumber">
                                    <Form.Label>Bairro</Form.Label>
                                    <Form.Control type="name" placeholder="Bairro da Empresa" />
                                </Form.Group>
    
                                <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                    <Form.Label>Rua</Form.Label>
                                    <Form.Control type="name" placeholder="Cidade da Empresa" />
                                </Form.Group>

                        </Row>
                        <Row>
                            <Form.Group as={Col} className="mb-3" controlId="formBasicName">
                                <Form.Label>Numero</Form.Label>
                                <Form.Control type="name" placeholder="Numero da Empresa" />
                            </Form.Group>
                        </Row>
                                <Button variant="primary" type="submit">
                                    Criar
                                </Button>
                    </Col>
                </Form> 
            </Container>
        </div>
    )
}