import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'

import './dashing.css'
import data from '../../../data/dashing.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
// import CAccordion from '../../../components/c-accordion/c-accordion'
import CScrollUp from '../../../components/c-scroll-up/c-scroll-up'
import CComparativeTable from '../../../components/c-comparative-table/c-comparative-table'

// import Banner from '../../../assets/JETOUR_JX65_cam012_grey-min-1-2.png'
// import LogoDashing from '../../../assets/dashing-1.png'
import DashingBlack from '../../../assets/dashing-black.png'
import DashingGray from '../../../assets/dashing-gray.png'
import DashingRed from '../../../assets/dashing-red.png'
import DashingBlue from '../../../assets/dashing-blue.png'
import DashingWhite from '../../../assets/dashing-white.png'
import DashingGreen from '../../../assets/dashing-green.png'
import Security1 from '../../../assets/security-1.png'
import Security2 from '../../../assets/security-2.png'
import Security3 from '../../../assets/security-3.png'
import Security4 from '../../../assets/security-4.png'

// import DashingVideo from '../../../assets/videos/dashing.mp4'

export default function VDashing() {
    const [color, setColor] = useState('black')
    return (
        <div className='v-dashing'>
            <CHeader />
            <div className='v-dashing__banner'>
                 <img src={process.env.PUBLIC_URL + "/Images/dashing-exterior4.jpg"} alt="" className='v-dashing__banner__image'/>
                 {/* <ReactPlayer url={DashingVideo} width='100%' height='auto' loop playing muted className='v-dashing__banner__video'/> */}
            </div>
            <div className='v-dashing__content-nav'>
                {/* <img src={LogoDashing} alt="" className='v-dashing__model-nav__logo'/> */}
                <div className='v-dashing__model-nav__actions'>
                    <div className='v-dashing__model-nav__nav-items'>
                        <a href="#overview"  className='v-dashing__model-nav__nav-item'>Visión general</a>
                        <a href="#details"  className='v-dashing__model-nav__nav-item'>Detalles</a>
                        <a href="#gallery"  className='v-dashing__model-nav__nav-item'>Galería</a>
                        <a href="#config"  className='v-dashing__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/dashing'} className='v-dashing__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-dashing__section__overview' id='overview'>
                <div className='v-dashing__section__overview__info-container'>
                    {color !== 'white' && <div className='v-dashing__section__overview__details-container'>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title '>Pantalla digital de: </p>
                            <h2 className='v-dashing__section__overview__detail '>15.6"</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title '>Cámara de:</p>
                            <h2 className='v-dashing__section__overview__detail '>540°</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title '>Aros</p>
                            <h2 className='v-dashing__section__overview__detail '>20"</h2>
                        </div>
                        <a href="https://platanogeek.com/dashing_720/" className='v-dashing__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/dashing'} className='v-dashing__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-dashing__section__overview__details-container'>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title text-black '>Pantalla digital de: </p>
                            <h2 className='v-dashing__section__overview__detail text-black '>15.6"</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title text-black '>Cámara de:</p>
                            <h2 className='v-dashing__section__overview__detail text-black '>540°</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title text-black '>Aros</p>
                            <h2 className='v-dashing__section__overview__detail text-black '>20"</h2>
                        </div>
                        <a href="https://platanogeek.com/dashing_720/" className='v-dashing__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/dashing'} className='v-dashing__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    <div className='v-dashing__section__overview__colors'>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-black' onClick={()=>{setColor('black')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-gray' onClick={()=>{setColor('gray')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-red' onClick={()=>{setColor('red')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-blue' onClick={()=>{setColor('blue')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-white' onClick={()=>{setColor('white')}}></div>
                        <div className='v-dashing__section__overview__color v-dashing__section__overview__color-green' onClick={()=>{setColor('green')}}></div>
                    </div>
                </div>
                { color === 'black' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-balck'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Negro</p>
                    </div>
                </div>}
                { color === 'gray' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-gray'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Gris</p>
                    </div>
                </div>}
                { color === 'red' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-red'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Rojo</p>
                    </div>
                </div>}
                { color === 'blue' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-blue'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Azul</p>
                    </div>
                </div>}
                { color === 'white' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-white'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title text-black'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text text-black'>Blanco</p>
                    </div>
                </div>}
                { color === 'green' && <div className='v-dashing__section__overview__background v-dashing__section__overview__background-green'>
                    <div className='v-dashing__section__overview__background__title-group'>
                        <h2 className='v-dashing__section__overview__background__title'>DASHING</h2>
                        <p className='v-dashing__section__overview__background__text'>Verde</p>
                    </div>
                </div>}
                {color === 'black' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingBlack} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }   
                {color === 'gray' && 
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingGray} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'red' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingRed} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'blue' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingBlue} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'white' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingWhite} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
                {color === 'green' &&
                    <div className='v-dashing__section__overview__image-container'>
                        <img src={DashingGreen} alt="" className='v-dashing__section__overview__image'/>
                    </div>
                }
            </div>
            <div className='v-dashing__section__design' id="details">
                <div className='v-dashing__section__design__info-container no-show-mobile'>
                    <div className='v-dashing__section__design__group-a'></div>
                    <div className='v-dashing__section__design__text-group'>
                        <p className='v-dashing__section__design__text'>Cargador inalámbrico</p>
                    </div>
                </div>
                <div className='v-dashing__section__design__info-container'>
                    <div className='v-dashing__section__design__text-group'>
                        {/* <h2 className='v-dashing__section__design__title'>Diseño exterior llamativo</h2> */}
                        <p className='v-dashing__section__design__text'>Pantalla digital en puertas delanteras con indicadores de temperatura exterior e interno.</p>
                    </div>
                    <div className='v-dashing__section__design__group-b'></div>
                </div>
                <div className='v-dashing__section__design__info-container no-show-mobile'>
                    <div className='v-dashing__section__design__group-c'></div>
                    <div className='v-dashing__section__design__text-group'>
                        <p className='v-dashing__section__design__text'>Con pantalla táctil e inteligente de 15.6” permite interactuar con todas sus funcionalidade</p>
                    </div>
                </div>
            </div>
            <div className='v-dashing__section-security'>
                <div className='v-dashing__section-security__content-group'>
                    <h2 className='v-dashing__section-security__content-group__title'>SEGURIDAD</h2>
                    <div className='v-dashing__section-security__content-group__items'>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security1} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>Sistema de aparcamiento panorámico de 540°</p>
                        </div>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security2} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>LDWS (Sistema de aviso de cambio involuntario de carril)</p>
                        </div>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security3} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>Sistema automático de frenado de emergencia</p>
                        </div>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security4} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>RCTA (Alerta de colisión lateral trasera)</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='v-dashing__section-slider' id="gallery">
                <CSlider title="GALERÍA INTERIOR" data={data.slider1}/>
            </div>
            {/* <div className='v-dashing__section__design'>
                <div className='v-dashing__section__design__info-container no-show-mobile'>
                    <div className='v-dashing__section__design__group-d'></div>
                    <div className='v-dashing__section__design__text-group'>
                        <p className='v-dashing__section__design__text'>El Jetour Dashing tiene un aspecto nítido traducido en su estilo aerodinámico y apariencia contemporánea.</p>
                    </div>
                </div>
                <div className='v-dashing__section__design__info-container'>
                    <div className='v-dashing__section__design__text-group'>
                        <h2 className='v-dashing__section__design__title'>DISFRUTA LA VIDA, DISFRUTA VIAJAR</h2>
                        <p className='v-dashing__section__design__text'>El Jetour Dashing tiene un aspecto nítido traducido en su estilo aerodinámico y apariencia contemporánea.</p>
                    </div>
                    <div className='v-dashing__section__design__group-e'></div>
                </div>
                <div className='v-dashing__section__design__info-container no-show-mobile'>
                    <div className='v-dashing__section__design__group-f'></div>
                    <div className='v-dashing__section__design__text-group'>
                        <p className='v-dashing__section__design__text'>Para hacer las cosas espectaculares, un techo panorámico completo le da al interior del Dashing una sensación de ligereza y amplitud.</p>
                    </div>
                </div>
            </div> */}
            <div className='v-dashing__section-slider'>
                <CSlider title="GALERÍA EXTERIOR" data={data.slider2}/>
            </div>
            {/* <div className='v-dashing__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN"/>
            </div> */}
            <CComparativeTable url="https://holajetour.do/test/#/modelos/dashing"/>
            <CScrollUp/>
            <CFooter />
        </div>
    )
}