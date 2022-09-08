import { Carousel, Col, Row } from "react-bootstrap";
import nike from "../../../assets/img/nike.png"
import calvinklein from "../../../assets/img/calvinklein.jpg"
import cavalera from "../../../assets/img/cavalera.png"
import adidas from "../../../assets/img/adidas.jpg"
import lacoste from "../../../assets/img/lacoste.jpg"
import puma from "../../../assets/img/puma.png"
import reserva from "../../../assets/img/reserva.png"
import yamaha from "../../../assets/img/yamaha.png"
import './App.css'


export default function Carrosel() {
    return (
        <Carousel className="w-200">

            <Carousel.Item>
                <Row>
                    <Col>
                    <a href="#"><img src={nike} className="Nike" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={calvinklein} class="rounded-squares w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={cavalera} class="rounded-square w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={yamaha} class="rounded-square w-100" /> </a>
                    </Col>
                </Row>
            </Carousel.Item>


            <Carousel.Item>
            <Row>
                    <Col>
                    <a href="#"><img src={adidas} class="rounded-square w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={lacoste} class="rounded-square w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={puma} class="rounded-square w-100" /> </a>
                    </Col>
                    <Col>
                    <a href="#"><img src={reserva} class="rounded-square w-100" /> </a>
                    </Col>
                </Row>

            </Carousel.Item>
        </Carousel>
    )
}