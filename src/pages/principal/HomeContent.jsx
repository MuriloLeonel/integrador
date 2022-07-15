import { Col, Container, Row } from "react-bootstrap";
import Banner from "./components/Banner";
import Carrosel from "./components/Carrossel";
import Menu from "./components/Menu";
import Product from "./components/Product";

export default function HomeContent() {
    return(
      <div className="">
        <Container>
        <Row>
          <Col md={3}>
            <Menu />
          </Col>
          <Col>
          <Banner />
          <Carrosel />
          <Product />
          </Col>
        </Row>
      </Container>
      </div>
    )
}