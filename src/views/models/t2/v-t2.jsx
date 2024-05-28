import { useState } from 'react'
import { Link } from 'react-router-dom'

import './t2.css'
import data from '../../../data/t2.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
import CAccordion from '../../../components/c-accordion/c-accordion'
import CScrollUp from '../../../components/c-scroll-up/c-scroll-up'

import Banner from '../../../assets/t2-banner.png'
// import LogoT2 from '../../../assets/t2-logo.svg'
import T2Silver from '../../../assets/t2-silver-snowcar.png'
import T2Gray from '../../../assets/t2-Highway-Graycar.png'
import T2Black from '../../../assets/t2-Night-Blackcar.png'
import T2Orange from '../../../assets/t2-Sun-Orangecar.png'
import T2Sand from '../../../assets/t2-Sandcar.png'
import T2Cyan from '../../../assets/t2-Misty-Cyancar.png'
import T2Green from '../../../assets/t2-Lime-Greencar.png'
import Style1 from '../../../assets/t2-feature1.jpg'
import Style2 from '../../../assets/t2-style2.png'
import Style3 from '../../../assets/t2-feature3.jpg'
import Style4 from '../../../assets/t2-feature4.jpg'


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
                        <a href="#gallery"  className='v-t2__model-nav__nav-item'>Galería</a>
                        <a href="#config"  className='v-t2__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/t2'} className='v-t2__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-t2__section__overview' id='overview'>
                <div className='v-t2__section__overview__info-container'>
                    {color !== 'white' && <div className='v-t2__section__overview__details-container'>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title'>Tracción</p>
                            <h2 className='v-t2__section__overview__detail'>4WD</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title'>Pantalla digital de:</p>
                            <h2 className='v-t2__section__overview__detail'>15.6”</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title'>Aros</p>
                            <h2 className='v-t2__section__overview__detail'>20”</h2>
                        </div>
                        <a href="https://jetourglobal.com/pages/360/T2.html" className='v-t2__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/t2'} className='v-t2__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-t2__section__overview__details-container'>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title text-black'>Tracción</p>
                            <h2 className='v-t2__section__overview__detail text-black'>4WD</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title text-black'>Pantalla digital de: </p>
                            <h2 className='v-t2__section__overview__detail text-black'>15.6”</h2>
                        </div>
                        <div className='v-t2__section__overview__details-group'>
                            <p className='v-t2__section__overview__detail-title text-black'>Aros</p>
                            <h2 className='v-t2__section__overview__detail text-black'>20”</h2>
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
                        <p className='v-t2__section__design__text'>Tracción en las 4 ruedas.</p>
                    </div>
                </div>
                <div className='v-t2__section__design__info-container'>
                    <div className='v-t2__section__design__text-group'>
                        {/* <h2 className='v-t2__section__design__title'>Tu experiencia definitiva en un suv 4X4</h2> */}
                        <p className='v-t2__section__design__text'>X mode: selector de terrenos</p>
                    </div>
                    <div className='v-t2__section__design__group-b'></div>
                </div>
                <div className='v-t2__section__design__info-container no-show-mobile'>
                    <div className='v-t2__section__design__group-c'></div>
                    <div className='v-t2__section__design__text-group'>
                        <p className='v-t2__section__design__text'>Pantalla digital de 15.6”</p>
                    </div>
                </div>
            </div>
            <div className='v-t2__section-style'>
                <div className='v-t2__section-style__content-group'>
                    {/* <h2 className='v-t2__section-style__content-group__title'>SUV de Aventura Extrema</h2> */}
                    <div className='v-t2__section-style__content-group__items'>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style1} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Rack de equipaje</p>
                        </div>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style2} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Techo panorámico</p>
                        </div>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style3} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Luces ambientales</p>
                        </div>
                        <div className='v-t2__section-style__content-group__item'>
                            <img src={Style4} alt="" className='v-t2__section-style__content-group__item__image'/>
                            <p className='v-t2__section-style__content-group__item__text'>Compuerta electromagnética</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='v-t2__section-slider' id="gallery">
                <CSlider title="GALERÍA INTERIOR" data={data.slider1}/>
            </div>
            <div className='v-t2__section-slider'>
                <CSlider title="GALERÍA EXTERIOR" data={data.slider2}/>
            </div>
            <div className='v-t2__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN" url="https://holajetour.do/test/#/modelos/t2"/>
            </div>
            <CScrollUp/>
            <CFooter />
        </div>
    )
}