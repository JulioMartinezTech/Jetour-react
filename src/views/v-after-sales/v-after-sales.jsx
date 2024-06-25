import "./after-sales.css";
import CHeader from "../../components/c-header/c-header";
import CFooter from "../../components/c-footer/c-footer";
import CScrollUp from "../../components/c-scroll-up/c-scroll-up";

export default function VAfterSales() {
  return (
    <div>
      <CHeader />
      <div className="v-after-sales__section-banner">
        <div className="v-after-sales__section-banner-mask"></div>
      </div>
      <div className="v-after-sales__section-services"></div>
      <div className="v-after-sales__section-action">
        <h2 className="v-after-sales__section-action__title">
          ATENCIÓN EN LÍNEA
        </h2>
        <div className="v-after-sales__section-action__container">
          <div className="v-after-sales__section-action__text-group">
            <p className="v-after-sales__section-action__text">
              Agenda tu próxima cita de servicio en el siguiente botón
            </p>
            <a
              href="https://citas.moviti.do/"
              className="v-after-sales__section-action__button"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      </div>
      <CScrollUp />
      <CFooter />
    </div>
  );
}
