import { Button, Card, Carousel, Col, Container, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import tenis from "../../../assets/img/Pumatenis.png"
import oculos from "../../../assets/img/oculos.png"
import camisa from "../../../assets/img/blunt.png"
import m4 from "../../../assets/img/m4.png"



export default function Product() {
    return (


        <Row className="mt-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src={tenis} />
                    <Card.Body>
                        <Card.Title>Loja 1</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button as={Link} to={`/sobre`} variant="primary">Consultar loja</Button>
                    </Card.Body>
                </Card>
                <Card className="mt-3">
                    <Card.Img variant="top" src={camisa} />
                    <Card.Body>
                        <Card.Title>Loja 4</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button as={Link} to={`/sobre`} variant="primary">Consultar loja</Button>
                    </Card.Body>
                    
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={oculos} />
                    <Card.Body>
                        <Card.Title>Loja 2</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button as={Link} to={`/sobre`} variant="primary">Consultar loja</Button>
                    </Card.Body>
                </Card>
                <Card className="mt-3">
                    <Card.Img variant="top" src={m4} />
                    <Card.Body>
                        <Card.Title>Loja 4</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button as={Link} to={`/sobre`} variant="primary">Consultar loja</Button>
                    </Card.Body>
                    
                </Card>
            </Col>
            <Col>
                <Card>
                    <Card.Img variant="top" src={tenis} />
                    <Card.Body>
                        <Card.Title>Loja 3</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button as={Link} to={`/sobre`} variant="primary">Consultar loja</Button>
                    </Card.Body>
                </Card>
                <Card className="mt-3 mb-5">
                    <Card.Img variant="top" src={tenis} />
                    <Card.Body>
                        <Card.Title>Loja 4</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button as={Link} to={`/sobre`} variant="primary">Consultar loja</Button>
                    </Card.Body>
                    
                </Card>
            </Col>
        </Row>

    );
}