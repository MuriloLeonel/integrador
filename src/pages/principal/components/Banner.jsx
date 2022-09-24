
import Carousel from 'react-bootstrap/Carousel';
import Img2 from '../../../assets/img/calcados.png';
import Img3 from '../../../assets/img/ferramentas.png';
import Img1 from '../../../assets/img/BannerProdut.png';

export default function Banner() {
    return(
    <div className="Banner">
        <Carousel>
      <Carousel.Item>
        <img src={Img1}className="mt-3 img-fluid"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img2} className="mt-3  img-fluid"/>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Img3} className="mt-3 img-fluid"/>  
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    )
}