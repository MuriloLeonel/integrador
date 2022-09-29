import { useContext, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../principal/components/Footer";
import Header from "../principal/components/Header";


export default function PainelForm() {
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();

  const submit = (event) => {
    event.preventDefault();



    //navigate("/admin/produtos");
  };

  return (
    <>
       <Container >
      <Row className="mt-5"><h3>Cadastrar Produto</h3></Row>
      <Row md={2} >
      <Form onSubmit={submit}>
        <Form.Group className="mb-3">
          <Form.Label>Título</Form.Label>
          <Form.Control placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Descrição</Form.Label>
          <Form.Control placeholder="Descrição" value={description} onChange={(event) => setDescription(event.target.value)} />
        </Form.Group>
        <Row className="mb-3">  
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Categoria</Form.Label>
          <Form.Select  laceholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)}   defaultValue="Choose...">
            <option></option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
        <Form.Label>Imagem Produto</Form.Label>
          <Form.Control type="file"  />
        </Form.Group>
      </Row>
   
    
        <Button variant="primary" type="submit">
          Cadastrar
        </Button>
      </Form>
      </Row>
      </Container>
    </>
   
  );
}