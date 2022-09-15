import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import { Context } from "../context/ClientContext";



export default function ClientCreate() {
   const [nome, setNome] = useState();
   const [datanasc, setDatanasc] = useState();
   const [email, setEmail  ] = useState();
   const [password, setPassword] = useState();
   const { create } = useContext(Context);
    
    const submit = (event) => {
       event.preventDefault();
      create(nome, datanasc, email, password);
   }
    return (
        <div className="bg-secundary">
            <Container >
                <Row>
                    <Col>
                        <Form onSubmit={submit}>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nome</Form.Label>
                                <Form.Control type="name" placeholder="Nome Completo" value={nome} onChange={(event) => setNome(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicDate">
                                <Form.Label>Data de nascimento</Form.Label>
                                <Form.Control type="date" placeholder="Data de Nascimento" value={datanasc} onChange={(event) => setDatanasc(event.target.value)} />
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Endereço de Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control type="password" placeholder="Digite a senha" value={password} onChange={(event) => setPassword(event.target.value)}  />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Criar
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}