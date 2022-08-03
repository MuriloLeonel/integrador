import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
    return (
        <div class="p-5 bg-dark text-white">
            <Container>
                <Row>
                    <Col>
                        <h5>Siga a gente:</h5>
                        <h3><i class="me-5 bi bi-facebook" /> <i class="bi bi-instagram" /></h3>
                        <br />
                        <h3><i class="me-5 bi bi-whatsapp" /> <i class="bi bi-twitter" /></h3>
                    </Col>
                    <Col>
                    <p>Abrindo portas
                    </p>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}