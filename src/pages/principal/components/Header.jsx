import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button, Row, Col } from 'react-bootstrap';


export default function Header() {
    return (
        <div className="Header">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="" >
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://brazilsoutheast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=jpg&cs=fFNQTw&docid=https%3A%2F%2Fsenacspedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!SwxhKeq67UyHIZ3zwtPeWzAh9zX80G9MtHFxNiwxa-uSQSg5uD-ERZgY4mB4gnFE%2Fitems%2F01D7TGBLOPIOUWQ3MDH5FKUSOTFDSXQOZN%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc2VuYWNzcGVkdS1teS5zaGFyZXBvaW50LmNvbUA2ZjllM2IxZS0xODA5LTQ0NGEtODFkMy04MmQ0MGE5Mjg4MTIiLCJpc3MiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAiLCJuYmYiOiIxNjU1OTQyNDAwIiwiZXhwIjoiMTY1NTk2NDAwMCIsImVuZHBvaW50dXJsIjoiR0h6Zzd2VE9YWUUxejZlRmFxcE42VzJnYlZkRDdvcnRWNnJvQ29KYjdSYz0iLCJlbmRwb2ludHVybExlbmd0aCI6IjEyMCIsImlzbG9vcGJhY2siOiJUcnVlIiwidmVyIjoiaGFzaGVkcHJvb2Z0b2tlbiIsInNpdGVpZCI6Ik1qazJNVEJqTkdJdFltRmxZUzAwWTJWa0xUZzNNakV0T1dSbU0yTXlaRE5rWlRWaSIsInNpZ25pbl9zdGF0ZSI6IltcImttc2lcIl0iLCJuYW1laWQiOiIwIy5mfG1lbWJlcnNoaXB8Z2FicmllbC5ic2lsdmE4MEBzZW5hY3NwLmVkdS5iciIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfDEwMDMyMDAxZGQxZGFmNzVAbGl2ZS5jb20iLCJzaWQiOiJhNzdkZjY1NS1mMTg5LTQ3MDktODM5Yy1lNTM5ZjRiNzhhYWYiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMyIsImlwYWRkciI6IjE3Ny4yNS40OS45MCJ9.bzVGUXhZY3lhUmV4OXJpY0poOGZLdGZJd1JWQ0VUekpVYzFXWVVEOFp6WT0&cTag=%22c%3A%7B68A943CF-836D-4A3F-AA49-D328E5783B2D%7D%2C2%22&encodeFailures=1&width=496&height=253&srcWidth=496&srcHeight=253"
                            width="50"
                            height="40"
                            className="d-inline-block align-top"
                        />{' '}
                        Abrindo Portas
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >

                            <NavDropdown title="Cidades" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">Bauru</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Pederneiras</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex me-auto">
                            <FormControl
                                type="search"
                                placeholder="Procurar"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Procurar</Button>
                        </Form>
                    </Navbar.Collapse>
                    <Button variant="outline-secondary">Login</Button>
                </Container>
            </Navbar>
        </div>
    )
}