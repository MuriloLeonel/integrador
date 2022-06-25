import { Col, Container, Row } from "react-bootstrap";
import Menu from "./components/Menu";
import Product from "./components/Product";

export default function HomeContent() {
    return(
        <Container>
        <Row>
          <Col md={2}>
            <Menu />
          </Col>
          <Col>
          <Product />
          </Col>
        </Row>
      </Container>
    )
}