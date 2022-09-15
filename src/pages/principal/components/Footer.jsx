import { Col, Container, Row } from "react-bootstrap";


export default function Footer() {
    return (
        <div class="bg-black text-white mt-">
            <Container>
            <div class="row">
                <div class="col-sm">
                <h6>Menu</h6>   
                    <a href="#"><p>Quem somos</p></a>
                    <a href="#"><p>Empresas associadas</p></a>
                    <a href="#"><p>Associe-se</p></a>
                </div>
                <div class="col-sm"> 
                <br></br>   
                <br></br>   
                <h6>Redes Sociais</h6>
                    <a href="#"><i class="bi bi-twitter me-2"></i></a>
                    <a href="#"><i class="bi bi-whatsapp me-2"></i></a>
                    <a href="#"><i class="bi bi-facebook me-2"></i></a>
                    <a href="#"><i class="bi bi-instagram me-2"></i></a>
                </div>
                <div class="col-sm">
                <br></br>   
                <br></br>       
                <h6>Contato</h6>
                    <i class="bi bi-telephone-fill"> 14 998804-6768</i>
                </div>
                 </div>
        </Container>
        </div>
    )
}