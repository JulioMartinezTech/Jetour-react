import "./article-05.css";
import CHeader from "../../../components/c-header/c-header";
import CFooter from "../../../components/c-footer/c-footer";

import Banner from "../../../assets/jetour-novedades-hero-1366.webp";
import Thumbnail from "../../../assets/article-05.webp";
import Image from "../../../assets/article-05_a.webp";

export default function VNews() {
  return (
    <div className="v-article-05">
      <CHeader />
      <img src={Banner} alt="" className="v-article-05__banner" />
      <div className="v-article-05__section">
        <h2 className="v-article-05__title">
          LIDOM y Grupo Martí firman alianza
        </h2>
        <div className="v-article-05__thumbnail-container">
          <img src={Thumbnail} alt="x90+" />
        </div>
        <article className="v-article-05__article-container">
          <p>
            <b>Santo Domingo.</b>-La Liga de Béisbol Profesional de República
            Dominicana (LIDOM) y el Grupo Martí, a través de su marca Letour,
            firmaron una alianza de patrocinio de cara a la premiación MVP de la
            Semana del campeonato de béisbol invernal 2023-2024, que arranca
            este próximo jueves.
          </p>
          <p>
            Durante una actividad celebrada en la mañana de este martes, Vitelio
            Mejía Ortiz, presidente de LIDOM, y el señor Carlos Martí Besonias,
            presidente del Consejo del Grupo Martí, rubricaron un acuerdo de
            patrocinio que otorgará una yipeta modelo Dashing 2024 al ganador
            del premio al Jugador Más Valioso.
          </p>
          <div className="v-article-05__thumbnail-container">
            <img src={Image} alt="jetour" />
          </div>
          <p>
            En la actividad de firma, efectuada en el showroom de la marca
            Jetour en el Evaristo Morales, también participaron Christian Cabral
            y Danilo Bobadilla, vicepresidentes de negocios y de proyectos del
            referido grupo. “La liga ha crecido mucho y hemos podido desarrollar
            una liga fuerte, sólida y profesional y ese crecimiento ha tenido
            mucho que ver con el Grupo Martí”, dijo Mejía Ortiz. “Cuando
            llegamos a la liga, que era una liga con necesidades de desarrollo y
            de crecimiento, ya el Grupo Martí estaba y era un sostén
            fundamental. Valoramos el apoyo del grupo desde siempre”, agregó.
          </p>
          <p>
            El acuerdo también contempla que Jetour patrocine el crew de
            árbitros de LIDOM. “Ya tenemos casi ocho años siendo un aliado
            estratégico de LIDOM y qué mejor marca que con Tropigas, que es el
            gas de los dominicanos”, apuntó Cabral. “En esta ocasión, para la
            temporada 2023-24, Grupo Martí afianza su apoyo a la pelota junto a
            la marca Jetour. No sólo estaremos apoyando a la liga, sino también
            a los jugadores”, aseguró el ejecutivo.
          </p>
          <p>
            El nuevo Dashing viene equipado con lo más novedoso en tecnología
            desde su exterior, iluminación, acceso a la cabina, suspensión,
            ambiente interior deportivo, audio, confort, manejo, potencia y
            seguridad.
          </p>
          <p>
            El campeonato de 2023-2024 está dedicado al cronista deportivo
            Onfalia Morillo y se jugará en opción a la Copa Banreservas.
          </p>
        </article>
        <div className="v-article-05__date-container">
          <p className="v-article-05__date">17 Octubre, 2023</p>
        </div>
      </div>
      <CFooter />
    </div>
  );
}
