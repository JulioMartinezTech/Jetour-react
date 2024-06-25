import "./article-03.css";
import CHeader from "../../../components/c-header/c-header";
import CFooter from "../../../components/c-footer/c-footer";

import Banner from "../../../assets/jetour-novedades-hero-1366.webp";
import Thumbnail from "../../../assets/article-03.jpg";

export default function VNews() {
  return (
    <div className="v-article-03">
      <CHeader />
      <img src={Banner} alt="" className="v-article-03__banner" />
      <div className="v-article-03__section">
        <h2 className="v-article-03__title">
          Grupo Martí presentan marca de vehículos
        </h2>
        <div className="v-article-03__thumbnail-container">
          <img src={Thumbnail} alt="jetour" />
        </div>
        <article className="v-article-03__article-container">
          <p>
            Con la realización de un coctel en su showroom, el grupo empresarial
            Martí introdujo a su portafolio de vehículos livianos una nueva
            marca: Jetour.
          </p>
          <p>
            “Nos sentimos honrados de ser los representantes exclusivos de esta
            marca en el país, ofreciendo a los clientes el servicio
            personalizado que nos ha caracterizado durante 10 años, con el
            respaldo de un equipo local, que se motiva por la pasión de mover
            personas” comentó Christian Cabral, CEO del portafolio de vehículos
            y vicepresidente de negocio.
          </p>
          <p>
            Además, agregó que con la entrada de Jetour a su portafolio de
            vehículos, la empresa recalca su propósito de hacer sentir a los
            clientes como parte de la familia, “compromiso que se resalta a
            través de la implementación de nuevas herramientas y brindando
            diferentes ubicaciones estratégicas para la comodidad de los
            clientes”.
          </p>
          <p>
            “Jetour Auto se adhiere para construir una marca automotriz de
            carácter mundial, con tres líneas de productos y en vías de
            expansión y crecimiento continuo”, resaltó Cabral, quien mencionó
            entre los modelos disponibles de la marca el X70, X70 Plus, X90+ y
            el Dashing.
          </p>
        </article>
        <div className="v-article-03__date-container">
          <p className="v-article-03__date">7 Julio, 2023</p>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
