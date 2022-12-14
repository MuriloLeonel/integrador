import {Navbar, Container,Nav,NavDropdown, Form, FormControl, Button, InputGroup} from "react-bootstrap";
import Logo from "../../../assets/img/Banners.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <div className="Header">
      <Navbar className="Navbar02" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={`/`}>
            <img
              className="Logo d-inline-block align-top"
              src={Logo}
              width="150"
              height="90"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="Pesquisa mx-auto col col-md-4">
              <InputGroup className="">
                <FormControl
                  type="search"
                  placeholder="Procurar"
                  className="me-1"
                  aria-label="Search"
                />
                <Button variant="secondary" id="button-addon1">
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </Button>
              </InputGroup>
            </Form>
            <Nav>
            <Nav.Link as={Link} to={`/login`}>
            <i class="bi bi-person-fill" />
                Login
            </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
