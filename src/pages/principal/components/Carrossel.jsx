import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";

export default function Carrosel() {
    return (
        <Carousel className="w-50">
            <Carousel.Item class="d-inline">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://listenx.com.br/blog/wp-content/uploads/2020/06/layout-de-loja.jpg" />
                </Card>
            </Carousel.Item>
        </Carousel>
    )
}