import { Accordion, Nav } from "react-bootstrap";


export default function Menu() {
    return (
        <div className="Menu">
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Categorias</Accordion.Header>
                    <Accordion.Body>
                        <Nav className="flex-column">
                            <Nav.Link>Restaurantes</Nav.Link>
                            <Nav.Link>Lojas de Roupas</Nav.Link>
                            <Nav.Link>PetShops</Nav.Link>
                            <Nav.Link>Salão de Beleza</Nav.Link>
                            <Nav.Link>Loja de Calçados</Nav.Link>
                            <Nav.Link>SkateShop</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Produtos</Accordion.Header>
                    <Accordion.Body>
                        <Nav defaultActiveKey="/clientes" className="flex-column">
                            <Nav.Link>Mais Acessados</Nav.Link>
                            <Nav.Link>Promoções</Nav.Link>
                            <Nav.Link>Mais bem avaliados</Nav.Link>
                        </Nav>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}