import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton } from 'react-bootstrap';
import Logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";


export default function Header() {
    return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">
                    <Nav className="ms-auto" >
                        <Nav.Link href="#home">Empresas</Nav.Link>
                        <Nav.Link href="#pricing">Associe-se</Nav.Link>
                    </Nav>
            </Navbar>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to={`/`}>
                    <img src={Logo} width="50px" height="50px"/>
                        Abrindo Portas
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className="d-flex me-auto">
                            <FormControl
                                type="search"
                                placeholder="Procurar"
                                className="me-1"
                                aria-label="Search"
                            />
                            <Button variant="sucess"><i class="bi bi-search"></i></Button>
                        </Form>
                    </Navbar.Collapse>
                    <DropdownButton id="dropdown-basic-button" title="CONTA">
                        <Dropdown.Item as={Link} to={`/login`}>Login</Dropdown.Item>
                        <Dropdown.Item as={Link} to={`/create`}>Criar conta</Dropdown.Item>
                        <Dropdown.Item as={Link} to={`/parceiro`}>Parceiro Create</Dropdown.Item>
                        
                    </DropdownButton>
                </Container>
            </Navbar>
        </div>
    )
}