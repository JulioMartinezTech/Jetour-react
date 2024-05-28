import './news.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'
import CNewsCard from '../../components/c-news-card/c-news-card'
import ReactPlayer from 'react-player'
import CScrollUp from '../../components/c-scroll-up/c-scroll-up'

import T2Video from '../../assets/videos/video-t2.mp4'
// import PostImage1 from '../../assets/article-05.webp'
import PostImage2 from '../../assets/article-03.jpg'
import PostImage3 from '../../assets/article-02.jpg'

export default function VNews() {
    return(
        <div className='v-news'>
            <div className='v-news__header'>
                <CHeader />
            </div>
            <ReactPlayer url={T2Video} width='100%' height='auto' playing muted/>
            <div className='v-news__section'>
                <h2 className='v-news__title'>NOVEDADES SOBRE JETOUR</h2>
                <p className='v-news__subtitle'>Todo lo que tienes que saber sobre nuestra marca y vehículos</p>
                <div className='v-news__posts'>
                    <CNewsCard image={process.env.PUBLIC_URL + "/Images/dashing-exterior5.jpg"} title="LIDOM y Grupo Martí firman alianza" text='La Liga de Béisbol Profesional de República Dominicana (LIDOM) y el Grupo Martí, a través de su marca Letour, firmaron una alianza de patrocinio de cara a la premiación MVP de la Semana del campeonato de béisbol invernal 2023-2024' date='17.10.23' url='/novedades/lidom-grupo-marti-firma-alianza'/>
                    <CNewsCard image={process.env.PUBLIC_URL + "/Images/x70PLus-exterior2.jpg"} title="La nueva propuesta del Grupo Martí" text='Su nueva marca de vehículos livianos' date='10.07.23' url='/novedades/nueva-propuesta-grupo-marti'/>
                    <CNewsCard image={PostImage2} title="Grupo Martí presentan marca de vehículos" text='El grupo empresarial Martí introdujo a su portafolio de vehículos livianos una nueva marca' date='07.07.23' url='/novedades/grupo-marti-presentan-marca-vehiculo'/>
                    <CNewsCard image={PostImage3} title="Presentan Jetour" text='Una marca de vehículos que se encuentra entre los tres grupos automotrices más importantes de China' date='06.07.23' url='/novedades/la-novedad-grupo-marti'/>
                    <CNewsCard image={process.env.PUBLIC_URL + "/Images/x90PLus-exterior4.jpg"} title="MARTÍ presenta a Jetour" text='Los vehículos de Jetour son comercializados con mantenimiento preventivo básico incluido y cinco años o 150,000 kilómetros de garantía' date='05.07.23' url='/novedades/marti-presenta-jetour'/>
                </div>
            </div>
            <CScrollUp/>
            <CFooter />
        </div>
    )
}