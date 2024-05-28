// import { ReactSVG } from 'react-svg';
// import { Link } from 'react-router-dom';

import './after-sales.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'
import CScrollUp from '../../components/c-scroll-up/c-scroll-up'

// import ServiceImg01 from '../../assets/pdi-image.png'
// import ServiceImg02 from '../../assets/colisiones-image.png'
// import ServiceImg03 from '../../assets/Preventivo-image.png'
// import ServiceImg04 from '../../assets/correctivo-image.png'
// import Service1 from '../../assets/pdi-icon.svg'
// import Service2 from '../../assets/colisiones-icon.svg'
// import Service3 from '../../assets/preventivo-icon.svg'
// import Service4 from '../../assets/correctivo-icon.svg'
// import LogoWhite from '../../assets/logo-white.svg'
// import LogoBlack from '../../assets/logo-black.svg'
// import WhatsAppIcon from '../../assets/whatsapp-icon.svg'

export default function VAfterSales() {
    return(
        <div>
            <CHeader />
            <div className='v-after-sales__section-banner'>
                <div className='v-after-sales__section-banner-mask'></div>
            </div>
            <div className='v-after-sales__section-services'>
                {/* <h2 className='v-after-sales__section-services__title'>SERVICIO DE POSTVENTA</h2> */}
                {/* <p className='v-after-sales__section-services__subtitle'>SEGURIDAD Y CALIDAD</p> */}
                {/* <div className='v-after-sales__section-services__items'>
                    <div className='v-after-sales__section-services__item'>
                        <img src={ServiceImg01} alt="pdi" className='v-after-sales__section-services__item__image'/>
                        <h3 className='v-after-sales__section-services__item__title'>PDI</h3>
                        <p className='v-after-sales__section-benefits__details__text'>Antes de la entrega de cada vehículo realizamos una revisión integral técnico-cualitativa para darle garantía de su correcto funcionamiento.</p>
                        <div className='v-after-sales__section-services__item__icon-container'>
                            <ReactSVG src={Service1} className='v-after-sales__section-services__item__icon'/>
                        </div>
                    </div>
                    <div className='v-after-sales__section-services__item'>
                        <img src={ServiceImg02} alt="colisiones" className='v-after-sales__section-services__item__image'/>
                        <h3 className='v-after-sales__section-services__item__title'>SERVICIO DE COLISIONES</h3>
                        <ul className='v-after-sales__section-services__item__list'>
                            <li className='v-after-sales__section-services__item__list-text'>Inspección pre-entrega</li>
                            <li className='v-after-sales__section-services__item__list-text'>Revisión técnica y cualitativa.</li>
                            <li className='v-after-sales__section-services__item__list-text'>Total garantía de funcionamiento</li>
                        </ul>
                        <div className='v-after-sales__section-services__item__icon-container'>
                            <ReactSVG src={Service2} className='v-after-sales__section-services__item__icon'/>
                        </div>
                    </div>
                    <div className='v-after-sales__section-services__item'>
                        <img src={ServiceImg03} alt="mantenimiento-preventivo" className='v-after-sales__section-services__item__image'/>
                        <h3 className='v-after-sales__section-services__item__title'>MANTENIMIENTO PREVENTIVO</h3>
                        <ul className='v-after-sales__section-services__item__list'>
                            <li className='v-after-sales__section-services__item__list-text'>Inspección pre-entrega</li>
                            <li className='v-after-sales__section-services__item__list-text'>Revisión técnica y cualitativa.</li>
                            <li className='v-after-sales__section-services__item__list-text'>Total garantía de funcionamiento</li>
                        </ul>
                        <div className='v-after-sales__section-services__item__icon-container'>
                            <ReactSVG src={Service3} className='v-after-sales__section-services__item__icon'/>
                        </div>
                    </div>
                    <div className='v-after-sales__section-services__item '>
                        <img src={ServiceImg04} alt="mantenimiento-correctivo" className='v-after-sales__section-services__item__image'/>
                        <h3 className='v-after-sales__section-services__item__title'>MANTENIMIENTO CORRECTIVO</h3>
                        <ul className='v-after-sales__section-services__item__list'>
                            <li className='v-after-sales__section-services__item__list-text'>Inspección pre-entrega</li>
                            <li className='v-after-sales__section-services__item__list-text'>Revisión técnica y cualitativa.</li>
                            <li className='v-after-sales__section-services__item__list-text'>Total garantía de funcionamiento</li>
                        </ul>
                        <div className='v-after-sales__section-services__item__icon-container'>
                            <ReactSVG src={Service4} className='v-after-sales__section-services__item__icon'/>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className='v-after-sales__section-action'>
                <h2 className='v-after-sales__section-action__title'>ATENCIÓN EN LÍNEA</h2>
                <div className='v-after-sales__section-action__container'>
                    <div className='v-after-sales__section-action__text-group'>
                        <p className='v-after-sales__section-action__text'>Agenda tu próxima cita de servicio en el siguiente botón</p>
                        <a href='https://citas.moviti.do/' className='v-after-sales__section-action__button'>Agenda tu cita</a>
                    </div>
                    {/* <div className='v-after-sales__section-action__text-group'>
                        <p className='v-after-sales__section-action__text'>Visita el showroom más cercano y cotiza tus repuestos</p>
                        <Link to={'/concesionarios'} className='v-after-sales__section-action__button'>Encuentra el más cercano</Link>
                    </div> */}
                </div>
            </div>
            {/* <div className='v-after-sales__section-benefits'> */}
                {/* <h2 className='v-after-sales__section-benefits__title'>DISFRUTA</h2>
                <ReactSVG src={LogoBlack} className='v-after-sales__section-benefits__logo'/> */}
                {/* <div className='v-after-sales__section-benefits__subtitles'>
                    <p className='v-after-sales__section-benefits__subtitle'>- Repuestos originales</p>
                    <p className='v-after-sales__section-benefits__subtitle'>- Cotizaciones sin cargo</p>
                    <p className='v-after-sales__section-benefits__subtitle'>- Precios competitivos</p>
                </div> */}
                {/* <div className='v-after-sales__section-benefits__cards'>
                    <div className='v-after-sales__section-benefits__details'>
                        <div className='v-after-sales__section-benefits__details__text-group'>
                            <img src={ServiceImg01} alt="mantenimiento-preventivo" className='v-after-sales__section-services__item__image'/>
                            <h2 className='v-after-sales__section-benefits__details__title'>PDI (INSPECCIÓN PRE-ENTREGA)</h2>
                            <p className='v-after-sales__section-benefits__details__text'>Antes de la entrega de cada vehículo realizamos una revisión integral técnico-cualitativa para darle garantía de su correcto funcionamiento.</p>
                        </div>
                    </div>
                    <div className='v-after-sales__section-benefits__details'>
                        <div className='v-after-sales__section-benefits__details__text-group'>
                            <img src={ServiceImg02} alt="mantenimiento-correctivo" className='v-after-sales__section-services__item__image'/>
                            <h2 className='v-after-sales__section-benefits__details__title'>SERVICIO DE COLISIONES</h2>
                            <p className='v-after-sales__section-benefits__details__text'>Tenemos convenios con las mejores compañias de seguros para brindarles la mejor experiencia. Las piezas dañadas se reemplazan por repuestos originales y nuestros especialistas realizan un trabajo artesanal sobre la chapa y pintura.</p>
                        </div>
                    </div>
                    <div className='v-after-sales__section-benefits__details'>
                        <div className='v-after-sales__section-benefits__details__text-group'>
                            <img src={ServiceImg03} alt="mantenimiento-correctivo" className='v-after-sales__section-services__item__image'/>
                            <h2 className='v-after-sales__section-benefits__details__title'>MANTENIMIENTO PREVENTIVO</h2>
                            <p className='v-after-sales__section-benefits__details__text'>Los autos requieren de mantenimiento preventivo para que funcionen de forma óptima y se reduzcan las posibilidades de que se presenten problemas.</p>
                        </div>
                    </div>
                    <div className='v-after-sales__section-benefits__details'>
                        <div className='v-after-sales__section-benefits__details__text-group'>
                            <img src={ServiceImg04} alt="mantenimiento-correctivo" className='v-after-sales__section-services__item__image'/>
                            <h2 className='v-after-sales__section-benefits__details__title'>MANTENIMIENTO CORRECTIVO</h2>
                            <p className='v-after-sales__section-benefits__details__text'>Este tipo de mantenimiento consiste en inspeccionar todos los componentes del vehículo para ver si hay alguna falla que requiera ser corregida. Durante el mantenimiento correctivo, se pueden realizar diversas reparaciones, como cambiar el aceite, el filtro de aire, el filtro de combustible, el buje de la rueda, el amortiguador, etc.</p>
                        </div>
                    </div>
                </div> */}
            {/* </div> */}
            {/* <div className='v-after-sales__section-call-center'> */}
                {/* <ReactSVG src={LogoWhite} className='v-after-sales__section-call-center__logo'/>
                <h2 className='v-after-sales__section-call-center__title'>CALL CENTER</h2>
                <div className='v-after-sales__section-call-center__text-group'>
                    <p className='v-after-sales__section-call-center__text'>¿Alguna duda?</p>
                    <p className='v-after-sales__section-call-center__text'>¿Desea asesoría o gestionar una cita online?</p>
                    <p className='v-after-sales__section-call-center__text'>¡No dude en llamarnos!</p>
                </div>
                <p className='v-after-sales__section-call-center__number'>809-889-9087</p> */}
                {/* <Link to={"/contacto"} className='v-after-sales__section-call-center__button'>Contáctanos</Link> */}
            {/* </div> */}
            {/* <a href="https://api.whatsapp.com/send/?phone=18098899087" className='v-after-sales__whatsapp-icon__container'>
                <img src={WhatsAppIcon} className='v-after-sales__whatsapp-icon' alt="whatsapp" />
            </a> */}
            <CScrollUp/>
            <CFooter />
        </div>
    )
}