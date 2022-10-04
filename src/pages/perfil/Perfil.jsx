import { Accordion, Button, Card, Col, Container, Row } from "react-bootstrap";
import tenis from "../../assets/img/tenis.jpg";
import camisa from "../../assets/img/tenis.jpg";
import oculos from "../../assets/img/tenis.jpg";
import m4 from "../../assets/img/tenis.jpg";
import Logo from "../../assets/img/Logo1.png";

export default function Perfil() {
  return (
    <>
      <img
        className="Logo d-inline-block align-top"
        src={Logo}
        width="200"
        height="180"
        alt="React Bootstrap logo"
      />
      <h1 className="Text">Veja Nossos Produtos</h1>
      <Accordion className="Descrição" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Descrição</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Container className="Cards">
        <div class="w-75 p-4 h-25">
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={tenis} />
                <Card.Body>
                  <Card.Title>Loja 1</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Img variant="top" src={camisa} />
                <Card.Body>
                  <Card.Title>Loja 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={oculos} />
                <Card.Body>
                  <Card.Title>Loja 2</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-3">
                <Card.Img variant="top" src={m4} />
                <Card.Body>
                  <Card.Title>Loja 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Img variant="top" src={tenis} />
                <Card.Body>
                  <Card.Title>Loja 3</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card className="mt-3 mb-5">
                <Card.Img variant="top" src={tenis} />
                <Card.Body>
                  <Card.Title>Loja 4</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
