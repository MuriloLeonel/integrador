import { Col, Container, Row } from "react-bootstrap";
import Logo from "../../../assets/img/logo.png";

export default function Footer() {
    return (
        <div class="bg-black text-white mt-5">
            <Container>
                <Row>
                    <Col md={5}>
                        <img src={Logo} width="200" /> 
                    </Col>
                    <Col className="p-2">
                    <h6>Menu</h6>
                    <a href="#"><p>Quem somos</p></a>
                    <a href="#"><p>Empresas associadas</p></a>
                    <a href="#"><p>Associe-se</p></a>
                    </Col>
                    <Col className="p-5">
                    <h6>Redes Sociais</h6>
                    <a href="#"><i class="bi bi-twitter me-2"></i></a>
                    <a href="#"><i class="bi bi-whatsapp me-2"></i></a>
                    <a href="#"><i class="bi bi-facebook me-2"></i></a>
                    <a href="#"><i class="bi bi-instagram me-2"></i></a>
                    </Col>
                    <Col className="p-5">
                    <h6>Contato</h6>
                    <i class="bi bi-telephone-fill"> 14 998804-6768</i>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}