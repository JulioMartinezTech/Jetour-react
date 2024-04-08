import { useState } from 'react'
import { Link } from 'react-router-dom'

import './t2.css'
import data from '../../../data/t2.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
import CAccordion from '../../../components/c-accordion/c-accordion'

import Banner from '../../../assets/t2-banner.jpg'
// import LogoT2 from '../../../assets/t2-logo.svg'
import T2Silver from '../../../assets/t2-silver-snowcar.png'
import T2Gray from '../../../assets/t2-Highway-Graycar.png'
import T2Black from '../../../assets/t2-Night-Blackcar.png'
import T2Orange from '../../../assets/t2-Sun-Orangecar.png'
import T2Sand from '../../../assets/t2-Sandcar.png'
import T2Cyan from '../../../assets/t2-Misty-Cyancar.png'
import T2Green from '../../../assets/t2-Lime-Greencar.png'
import Style1 from '../../../assets/t2-style1.png'
import Style2 from '../../../assets/t2-style2.png'
import Style3 from '../../../assets/t2-style3.png'
import Style4 from '../../../assets/t2-style4.png'


export default function VT2() {
    const [color, setColor] = useState('black')
    return (
        <div className='v-t2'>
            <CHeader />
            <div className='v-t2__banner'>
                 <img src={Banner} alt="" className='v-t2__banner__image'/>
            </div>
            <div className='v-t2__content-nav'>
                {/* <img src={LogoT2} alt="" className='v-t2__model-nav__logo'/> */}
                {/* <h2 className='v-t2__model-nav__title'>T2</h2> */}
                <div className='v-t2__model-nav__actions'>
                    <div className='v-t2__model-nav__nav-items'>
                        <a href="#overview"  className='v-t2__model-nav__nav-item'>Visión general</a>
                        <a href="#details"  className='v-t2__model-nav__nav-item'>Detalles</a>
                        <a href="#gallery"  className='v-t2__model-nav__nav-item'>Galerías</a>
                        <a href="#config"  className='v-t2__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/t2'} className='v-t2__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-t2__section__overview' id='overview'>
                <div className='v-t2__section__overview__info-container'>
                    {color !== 'white' && <div className='v-t2__section__overview__details-container'>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title'>Motor Turbo Gasolina</p>
                            <h2 className='v-t2__section__overview__detail'>1,998cc.</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title'>Cilindrada</p>
                            <h2 className='v-t2__section__overview__detail'>4 Cilindros</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title'>Potencia</p>
                            <h2 className='v-t2__section__overview__detail'>250HP</h2>
                        </div>
                        <a href="https://jetourglobal.com/pages/360/T2.html" className='v-t2__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/t2'} className='v-t2__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-t2__section__overview__details-container'>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title text-black'>Motor Turbo Gasolina</p>
                            <h2 className='v-t2__section__overview__detail text-black'>1,998cc.</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title text-black'>Cilindrada</p>
                            <h2 className='v-t2__section__overview__detail text-black'>4 Cilindros</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title text-black'>Potencia</p>
                            <h2 className='v-t2__section__overview__detail text-black'>250HP</h2>
                        </div>
                        <a href="https://jetourglobal.com/pages/360/T2.html" className='v-t2__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/t2'} className='v-t2__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {/* Cuadros selector de colores */}
                    <div className='v-t2__section__overview__colors'>
                        <div className='v-t2__section__overview__color v-t2__section__overview__color-silver' onClick={()=>{setColor('silver')}}></div>
                        <div className='v-t2__section__overview__color v-t2__section__overview__color-gray' onClick={()=>{setColor('gray')}}></div>
                        <div className='v-t2__section__overview__color v-t2__section__overview__color-black' onClick={()=>{setColor('black')}}></div>
                        {/* <div className='v-t2__section__overview__color v-t2__section__overview__color-orange' onClick={()=>{setColor('orange')}}></div> */}
                        <div className='v-t2__section__overview__color v-t2__section__overview__color-sand' onClick={()=>{setColor('sand')}}></div>
                        <div className='v-t2__section__overview__color v-t2__section__overview__color-cyan' onClick={()=>{setColor('cyan')}}></div>
                        {/* <div className='v-t2__section__overview__color v-t2__section__overview__color-green' onClick={()=>{setColor('green')}}></div> */}
                    </div>
                </div>
                {/* fondo para cada color */}
                { color === 'silver' && <div className='v-t2__section__overview__background v-t2__section__overview__background-silver'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>PLATEADO</p>
                    </div>
                </div>}
                { color === 'gray' && <div className='v-t2__section__overview__background v-t2__section__overview__background-gray'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>GRIS</p>
                    </div>
                </div>}
                { color === 'black' && <div className='v-t2__section__overview__background v-t2__section__overview__background-balck'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>NEGRO</p>
                    </div>
                </div>}
                { color === 'orange' && <div className='v-t2__section__overview__background v-t2__section__overview__background-orange'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>NARANJA</p>
                    </div>
                </div>}
                { color === 'sand' && <div className='v-t2__section__overview__background v-t2__section__overview__background-sand'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>ARENA</p>
                    </div>
                </div>}
                { color === 'cyan' && <div className='v-t2__section__overview__background v-t2__section__overview__background-cyan'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>CIAN</p>
                    </div>
                </div>}
                { color === 'green' && <div className='v-t2__section__overview__background v-t2__section__overview__background-green'>
                    <div className='v-t2__section__overview__background__title-group'>
                        <h2 className='v-t2__section__overview__background__title'>T2</h2>
                        <p className='v-t2__section__overview__background__text'>VERDE</p>
                    </div>
                </div>}
                {/* imagenes de los vehiculos */}
                {color === 'silver' &&
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Silver} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }
                {color === 'gray' && 
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Gray} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }
                {color === 'black' &&
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Black} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }   
                {color === 'orange' &&
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Orange} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }
                {color === 'sand' &&
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Sand} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }
                {color === 'cyan' &&
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Cyan} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }
                {color === 'green' &&
                    <div className='v-t2__section__overview__image-container'>
                        <img src={T2Green} alt="" className='v-t2__section__overview__image'/>
                    </div>
                }
            </div>
            <div className='v-t2__section__design' id="details">
                <div className='v-t2__section__design__info-container no-show-mobile'>
                    <div className='v-t2__section__design__group-a'></div>
                    <div className='v-t2__section__design__text-group'>
                        <p className='v-t2__section__design__text'>Diseñado para quienes buscan emociones fuertes, este motor 2.0T de 5 puertas y 4 cilindros.</p>
                    </div>
                </div>
                <div className='v-t2__section__design__info-container'>
                    <div className='v-t2__section__design__text-group'>
                        <h2 className='v-t2__section__design__title'>Tu experiencia definitiva en un suv 4X4</h2>
                        <p className='v-t2__section__design__text'>Presentamos el SUV Jetour T2 4X4, donde el espíritu de aventura se combina con el lujo moderno.</p>
                    </div>
                    <div className='v-t2__section__design__group-b'></div>
                </div>
                <div className='v-t2__section__design__info-container no-show-mobile'>
                    <div className='v-t2__section__design__group-c'></div>
                    <div className='v-t2__section__design__text-group'>
                        <p className='v-t2__section__design__text'>Redefine la conducción al aire libre con su capacidad robusta y su estética refinada.</p>
                    </div>
                </div>
            </div>
            <div className='v-t2__section-style'>
                <div className='v-t2__section-style__content-group'>
                    <h2 className='v-t2__section-style__content-group__title'>ESTILO INCONDICIONAL</h2>
                    <div className='v-t2__section-style__content-group__items'>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style1} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Cuerpo de acero de alta resistencia y diseño robusto</p>
                        </div>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style2} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Skylight</p>
                        </div>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style3} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Puerta trasera ampliable</p>
                        </div>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style4} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Puerta eléctrica mágica</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='v-t2__section-slider' id="gallery">
                <CSlider title="GALERÍA INTERIOR" data={data.slider1}/>
            </div>
            <div className='v-t2__section__design' id="details">
                <div className='v-t2__section__design__info-container no-show-mobile'>
                    <div className='v-t2__section__design__group-d'></div>
                    <div className='v-t2__section__design__text-group'>
                        <p className='v-t2__section__design__text'>Además, los ángulos de aproximación de 39°, rampa de 25° y salida de 30° te ayudan a afrontar todo tipo de condiciones de terreno difíciles.</p>
                    </div>
                </div>
                <div className='v-t2__section__design__info-container'>
                    <div className='v-t2__section__design__text-group'>
                        <h2 className='v-t2__section__design__title'>TERRENOS DOMINANTES</h2>
                        <p className='v-t2__section__design__text'>El Jetour T2 mide una impresionante longitud de 4785 mm, una distancia entre ejes de 2800 mm y ofrece interiores espaciosos para una experiencia de viaje placentera.</p>
                    </div>
                    <div className='v-t2__section__design__group-e'></div>
                </div>
                <div className='v-t2__section__design__info-container no-show-mobile'>
                    <div className='v-t2__section__design__group-f'></div>
                    <div className='v-t2__section__design__text-group'>
                        <p className='v-t2__section__design__text'>Su motor 2.0 Turbo de 4 cilindros ofrece un potente par de 390 Nm a través de una transmisión DCT de 7 velocidades, lo que garantiza una conducción suave y eficiente sin importar el terreno.</p>
                    </div>
                </div>
            </div>
            <div className='v-t2__section-slider'>
                <CSlider title="GALERÍA EXTERIOR" data={data.slider2}/>
            </div>
            <div className='v-t2__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN"/>
            </div>
            <CFooter />
        </div>
    )
}