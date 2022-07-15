import { Button, Card, Carousel, Col, Container, Row } from "react-bootstrap";
import Loja from "../../../assets/img/loja.png"

export default function Carrosel() {
    return (
        <Carousel className="w-200">

            <Carousel.Item>
                <Row>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                </Row>
            </Carousel.Item>


            <Carousel.Item>
            <Row>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                </Row>

            </Carousel.Item>

            <Carousel.Item>
            <Row>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={Loja} class="rounded-circle w-100" /> </a>
                    </Col>
                </Row>

            </Carousel.Item>
        </Carousel>
    )
}