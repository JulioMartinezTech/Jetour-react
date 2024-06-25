import "./article-04.css";
import CHeader from "../../../components/c-header/c-header";
import CFooter from "../../../components/c-footer/c-footer";

import Banner from "../../../assets/jetour-novedades-hero-1366.webp";
import Img01 from "../../../assets/article-04_a.jpeg";
import Img02 from "../../../assets/article-04_b.jpeg";
import Img03 from "../../../assets/article-04_c.jpeg";
import Img04 from "../../../assets/article-04_d.jpeg";

export default function VNews() {
  return (
    <div className="v-article-04">
      <CHeader />
      <img src={Banner} alt="" className="v-article-04__banner" />
      <div className="v-article-04__section">
        <h2 className="v-article-04__title">
          La nueva propuesta del Grupo Martí
        </h2>
        <div className="v-article-04__thumbnail-container">
          <img
            src={process.env.PUBLIC_URL + "/Images/x70PLus-exterior2.jpg"}
            alt="dashing"
          />
        </div>
        <article className="v-article-04__article-container">
          <p>
            El <b>grupo empresarial Martí</b> continúa innovando su portafolio
            de vehículos livianos. Esta vez presentaron las credenciales de la
            marca <b>Jetour</b>.
          </p>
          <p>
            “Nos sentimos honrados de ser los representantes exclusivos de esta
            marca en el país, ofreciendo a los clientes el servicio
            personalizado que nos ha caracterizado durante 10 años, con el
            respaldo de un equipo local que se motiva por la pasión de mover
            personas”, comentó Christian Cabral, CEO del portafolio de vehículos
            y vicepresidente de Negocios de Grupo Martí.
          </p>
          <div className="v-article-04__image-container">
            <img src={Img01} alt="jetour" />
          </div>
          <div className="v-article-04__image-container">
            <img src={Img02} alt="jetour" />
          </div>
          <div className="v-article-04__image-container">
            <img src={Img03} alt="jetour" />
          </div>
          <div className="v-article-04__image-container">
            <img src={Img04} alt="jetour" />
          </div>
        </article>
        <div className="v-article-04__date-container">
          <p className="v-article-04__date">10 Julio, 2023</p>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
