import {  Container } from "react-bootstrap";
import Logo from '../../../assets/img/Logo2.png'

export default function Footer() {
  return (
    <div class="bg-black text-white mt-3">
      <Container>
        <div class="row">
          <div class="col-sm">
          <img className="Logo d-inline-block align-top"
              src={Logo}
              width="120"
              height="100"
              alt="React Bootstrap logo"/>
          </div>
          <div class="col-sm">
            <h6>Menu</h6>
            <a class="text-white" href="#">
              <p>Quem somos</p>
            </a>
            <a class="text-white" href="#">
              <p>Empresas associadas</p>
            </a>
            <a class="text-white" href="#">
              <p>Associe-se</p>
            </a>
          </div>
          <div class="col-sm">
            <br></br>
            <br></br>
            <h6>Redes Sociais</h6>
            <a href="#">
              <i class=" text-white bi bi-twitter me-2"></i>
            </a>
            <a href="#">
              <i class=" text-white bi bi-whatsapp me-2"></i>
            </a>
            <a href="#">
              <i class=" text-white bi bi-facebook me-2"></i>
            </a>
            <a href="#">
              <i class=" text-white bi bi-instagram me-2"></i>
            </a>
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
  );
}
