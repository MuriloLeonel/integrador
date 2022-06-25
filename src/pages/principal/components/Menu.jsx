import { Accordion, Nav } from "react-bootstrap";

export default function Menu() {
    return (
        <div className="Menu">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Lojas de Roupas</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Salão de Beleza</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Petshops</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Restaurantes</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>SkateShop</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="5">
                    <Accordion.Header>Loja de Calçados</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="6">
                    <Accordion.Header>Produtos</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="7">
                    <Accordion.Header>Outros</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link></Nav.Link>
                            <Nav.Link></Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </div>
    )
}