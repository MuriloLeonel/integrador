        import { Col, Container, Row, Carousel, Button } from "react-bootstrap";
        import Loja from '../../../assets/img/exemplo.jpg';
        import Tenis from '../../../assets/img/tenis.jpg';
        import Rating from 'react-rating';


        export default function ProdutoDetalhes() {
            return (
                <Container>

                    <Row>
                    <Col className="mt-5">
                    <Button variant="light" size="sm"><i class="bi bi-arrow-left"></i></Button>{' '}  
                    <h2>Detalhes</h2>
                            <h5>Loja Exemplo</h5>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae odio dicta<br /> illo cum vero quae
                                amet alias mollitia accusamus magnam, nulla expedita<br /> cumque voluptates fuga nemo harum illum
                                corporis similique.</p>
                        </Col>
                        <Col className="mt-5">
                            <img src={Loja} width="600" />

                            <Rating
                                emptySymbol={<i class="bi bi-star"></i>}
                                fullSymbol={<i class="bi bi-star-fill"></i>}
                            />
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <h5>Nossos Produtos</h5>
                        <Carousel className="w-150">
                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75 " /> </a>
                                    </Col>
                                </Row>
                            </Carousel.Item>


                            <Carousel.Item>
                                <Row>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                    <Col>
                                        <a href="#"><img src={Tenis} class="rounded-circle w-75" /> </a>
                                    </Col>
                                </Row>

                            </Carousel.Item>
                        </Carousel>
                        <div class=" w-50 mb-4 mt-4">
                            <label for="exampleFormControlTextarea1" class="form-label">Comentários</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Comente Aqui"></textarea>
                        </div>
                    </Row>
                </Container>
            )
        }