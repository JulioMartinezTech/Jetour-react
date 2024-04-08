import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'

import './dashing.css'
import data from '../../../data/dashing.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
import CAccordion from '../../../components/c-accordion/c-accordion'

// import Banner from '../../../assets/JETOUR_JX65_cam012_grey-min-1-2.png'
// import LogoDashing from '../../../assets/dashing-1.png'
import DashingBlack from '../../../assets/dashing-black.png'
import DashingGray from '../../../assets/dashing-gray.png'
import DashingRed from '../../../assets/dashing-red.png'
import DashingBlue from '../../../assets/dashing-blue.png'
import DashingWhite from '../../../assets/dashing-white.png'
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
                 <div className='v-dashing__banner__text-container'>
                    <p className='v-dashing__banner__text'>DASHING</p>
                 </div>
                 {/* <ReactPlayer url={DashingVideo} width='100%' height='auto' loop playing muted className='v-dashing__banner__video'/> */}
            </div>
            <div className='v-dashing__content-nav'>
                {/* <img src={LogoDashing} alt="" className='v-dashing__model-nav__logo'/> */}
                <div className='v-dashing__model-nav__actions'>
                    <div className='v-dashing__model-nav__nav-items'>
                        <a href="#overview"  className='v-dashing__model-nav__nav-item'>Visión general</a>
                        <a href="#details"  className='v-dashing__model-nav__nav-item'>Detalles</a>
                        <a href="#gallery"  className='v-dashing__model-nav__nav-item'>Galerías</a>
                        <a href="#config"  className='v-dashing__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/dashing'} className='v-dashing__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-dashing__section__overview' id='overview'>
                <div className='v-dashing__section__overview__info-container'>
                    {color !== 'white' && <div className='v-dashing__section__overview__details-container'>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title '>Motor</p>
                            <h2 className='v-dashing__section__overview__detail '>1,498cc</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title '>Cilindrada</p>
                            <h2 className='v-dashing__section__overview__detail '>4 Cilindros</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title '>Potencia</p>
                            <h2 className='v-dashing__section__overview__detail '>150HP</h2>
                        </div>
                        <a href="https://platanogeek.com/dashing_720/" className='v-dashing__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/dashing'} className='v-dashing__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-dashing__section__overview__details-container'>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title text-black '>Motor</p>
                            <h2 className='v-dashing__section__overview__detail text-black '>1,498cc</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title text-black '>Cilindrada</p>
                            <h2 className='v-dashing__section__overview__detail text-black '>4 Cilindros</h2>
                        </div>
                        <div className='v-dashing__section__overview__details-group'>
                            <p className='v-dashing__section__overview__detail-title text-black '>Potencia</p>
                            <h2 className='v-dashing__section__overview__detail text-black '>150HP</h2>
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
            </div>
            <div className='v-dashing__section__design' id="details">
                <div className='v-dashing__section__design__info-container no-show-mobile'>
                    <div className='v-dashing__section__design__group-a'></div>
                    <div className='v-dashing__section__design__text-group'>
                        <p className='v-dashing__section__design__text'>El asiento y la posición de conducción perfecta se traducen a través de un asiento de diseño deportivo</p>
                    </div>
                </div>
                <div className='v-dashing__section__design__info-container'>
                    <div className='v-dashing__section__design__text-group'>
                        <h2 className='v-dashing__section__design__title'>Diseño exterior llamativo</h2>
                        <p className='v-dashing__section__design__text'>El Jetour Dashing tiene un aspecto nítido traducido en su estilo aerodinámico y apariencia contemporánea.</p>
                    </div>
                    <div className='v-dashing__section__design__group-b'></div>
                </div>
                <div className='v-dashing__section__design__info-container no-show-mobile'>
                    <div className='v-dashing__section__design__group-c'></div>
                    <div className='v-dashing__section__design__text-group'>
                        <p className='v-dashing__section__design__text'>La pantalla táctil inteligente de 15,6 pulgadas integra todas las funciones en una interfaz clara y fácil de usar.</p>
                    </div>
                </div>
            </div>
            <div className='v-dashing__section-security'>
                <div className='v-dashing__section-security__content-group'>
                    <h2 className='v-dashing__section-security__content-group__title'>SEGURIDAD</h2>
                    <div className='v-dashing__section-security__content-group__items'>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security1} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>540° panoramic parking assist system</p>
                        </div>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security2} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>LDWS (Lane Departure Warning System)</p>
                        </div>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security3} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>Automatic emergency braking system</p>
                        </div>
                        <div className='v-dashing__section-security__content-group__item'>
                            <img src={Security4} alt="" className='v-dashing__section-security__content-group__item__image'/>
                            <p className='v-dashing__section-security__content-group__item__text'>RCTA (Rear Side Collision Alert)</p>
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
            <div className='v-dashing__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN"/>
            </div>
            <CFooter />
        </div>
    )
}