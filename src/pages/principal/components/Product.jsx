import { Button, Card, Carousel, Col, Container, Figure, Row } from "react-bootstrap";

export default function Product() {
    return (
        <Container>

            <Row>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                        <Card.Body>
                            <Card.Title>Loja 1</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Consultar loja</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                        <Card.Body>
                            <Card.Title>Loja 2</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Consultar loja</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                        <Card.Body>
                            <Card.Title>Loja 3</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Consultar loja</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                        <Card.Body>
                            <Card.Title>Loja 4</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Consultar loja</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}