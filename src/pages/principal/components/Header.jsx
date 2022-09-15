import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Dropdown, DropdownButton, InputGroup } from 'react-bootstrap';
import Logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return (
        <div className="Header">
            <Navbar className='Navbar02'>
                <Container>
                    <Navbar.Brand as={Link} to={`/`}>
                    <img/>
                        BUSNISESS PROJECT
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Form className=" Pesquisa">
                           <InputGroup>
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
                    </Navbar.Collapse>
                    <Button as={Link} to={`/login`} variant="light" className=""><i class="bi bi-person-fill" />Login</Button>
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