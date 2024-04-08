import { useState } from 'react'
import { Link } from 'react-router-dom'

import './x90-plus.css'
import data from '../../../data/x90Plus.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
import CAccordion from '../../../components/c-accordion/c-accordion'

// import Banner from '../../../assets/x90plus.jpg'
// import LogoX90Plus from '../../../assets/X90Plus-logo.png'
import X90PlusBlack from '../../../assets/x90-plus-black.png'
import X90PlusGray from '../../../assets/x90-plus-grey.png'
import X90PlusPurple from '../../../assets/x90-plus-violet.png'
import X90PlusBlue from '../../../assets/x90-plus-blue.png'
import X90PlusWhite from '../../../assets/x90-plus-white.png'

export default function VX90Plus() {
    const [color, setColor] = useState('black')
    return (
        <div className='v-x90-plus'>
            <CHeader />
            <div className='v-x90-plus__banner'>
                 <img src={process.env.PUBLIC_URL + "/Images/x90PLus-exterior6.jpg"} alt="" className='v-x90-plus__banner__image'/>
                 <div className='v-x90-plus__banner__text-container'>
                    <p className='v-x90-plus__banner__text'>X90 PLUS</p>
                 </div>
            </div>
            <div className='v-x90-plus__content-nav'>
                {/* <img src={LogoX90Plus} alt="" className='v-x90-plus__model-nav__logo'/> */}
                <div className='v-x90-plus__model-nav__actions'>
                    <div className='v-x90-plus__model-nav__nav-items'>
                        <a href="#overview"  className='v-x90-plus__model-nav__nav-item'>Visión general</a>
                        <a href="#details"  className='v-x90-plus__model-nav__nav-item'>Detalles</a>
                        <a href="#gallery"  className='v-x90-plus__model-nav__nav-item'>Galerías</a>
                        <a href="#config"  className='v-x90-plus__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/x90-plus'} className='v-x90-plus__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-x90-plus__section__overview' id='overview'>
                <div className='v-x90-plus__section__overview__info-container'>
                    {color !== 'white' && <div className='v-x90-plus__section__overview__details-container'>
                        <div className='v-x90-plus__section__overview__details-group'>
                            <p className='v-x90-plus__section__overview__detail-title'>Motor Turbo alimentado Gasolina</p>
                            <h2 className='v-x90-plus__section__overview__detail'>1,998cc.</h2>
                        </div>
                        <div className='v-x90-plus__section__overview__details-group'>
                            <p className='v-x90-plus__section__overview__detail-title'>Cilindrada</p>
                            <h2 className='v-x90-plus__section__overview__detail'>4 Cilindros</h2>
                        </div>
                        <div className='v-x90-plus__section__overview__details-group'>
                            <p className='v-x90-plus__section__overview__detail-title'>Potencia</p>
                            <h2 className='v-x90-plus__section__overview__detail'>254HP</h2>
                        </div>
                        <a href="https://jetourglobal.com/spain/x90Plus-720" className='v-x90-plus__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/x90-plus'} className='v-x90-plus__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-x90-plus__section__overview__details-container'>
                        <div className='v-x90-plus__section__overview__details-group'>
                            <p className='v-x90-plus__section__overview__detail-title text-black'>Motor Turbo alimentado Gasolina</p>
                            <h2 className='v-x90-plus__section__overview__detail text-black'>1,998cc.</h2>
                        </div>
                        <div className='v-x90-plus__section__overview__details-group'>
                            <p className='v-x90-plus__section__overview__detail-title text-black'>Cilindrada</p>
                            <h2 className='v-x90-plus__section__overview__detail text-black'>4 Cilindros</h2>
                        </div>
                        <div className='v-x90-plus__section__overview__details-group'>
                            <p className='v-x90-plus__section__overview__detail-title text-black'>Potencia</p>
                            <h2 className='v-x90-plus__section__overview__detail text-black'>254HP</h2>
                        </div>
                        <a href="https://jetourglobal.com/spain/x90Plus-720" className='v-x90-plus__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/x90-plus'} className='v-x90-plus__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    <div className='v-x90-plus__section__overview__colors'>
                        <div className='v-x90-plus__section__overview__color v-x90-plus__section__overview__color-black' onClick={()=>{setColor('black')}}></div>
                        {/* <div className='v-x90-plus__section__overview__color v-x90-plus__section__overview__color-gray' onClick={()=>{setColor('gray')}}></div>
                        <div className='v-x90-plus__section__overview__color v-x90-plus__section__overview__color-purple' onClick={()=>{setColor('purple')}}></div> */}
                        <div className='v-x90-plus__section__overview__color v-x90-plus__section__overview__color-blue' onClick={()=>{setColor('blue')}}></div>
                        <div className='v-x90-plus__section__overview__color v-x90-plus__section__overview__color-white' onClick={()=>{setColor('white')}}></div>
                    </div>
                </div>
                { color === 'black' && <div className='v-x90-plus__section__overview__background v-x90-plus__section__overview__background-balck'>
                    <div className='v-x90-plus__section__overview__background__title-group'>
                        <h2 className='v-x90-plus__section__overview__background__title'>X90 PLUS</h2>
                        <p className='v-x90-plus__section__overview__background__text'>Negro</p>
                    </div>
                </div>}
                { color === 'gray' && <div className='v-x90-plus__section__overview__background v-x90-plus__section__overview__background-gray'>
                    <div className='v-x90-plus__section__overview__background__title-group'>
                        <h2 className='v-x90-plus__section__overview__background__title'>X90 PLUS</h2>
                        <p className='v-x90-plus__section__overview__background__text'>Gris</p>
                    </div>
                </div>}
                { color === 'purple' && <div className='v-x90-plus__section__overview__background v-x90-plus__section__overview__background-purple'>
                    <div className='v-x90-plus__section__overview__background__title-group'>
                        <h2 className='v-x90-plus__section__overview__background__title'>X90 PLUS</h2>
                        <p className='v-x90-plus__section__overview__background__text'>Morado</p>
                    </div>
                </div>}
                { color === 'blue' && <div className='v-x90-plus__section__overview__background v-x90-plus__section__overview__background-blue'>
                    <div className='v-x90-plus__section__overview__background__title-group'>
                        <h2 className='v-x90-plus__section__overview__background__title'>X90 PLUS</h2>
                        <p className='v-x90-plus__section__overview__background__text'>Azul</p>
                    </div>
                </div>}
                { color === 'white' && <div className='v-x90-plus__section__overview__background v-x90-plus__section__overview__background-white'>
                    <div className='v-x90-plus__section__overview__background__title-group'>
                        <h2 className='v-x90-plus__section__overview__background__title text-black'>X90 PLUS</h2>
                        <p className='v-x90-plus__section__overview__background__text text-black'>Blanco</p>
                    </div>
                </div>}
                {color === 'black' &&
                    <div className='v-x90-plus__section__overview__image-container'>
                        <img src={X90PlusBlack} alt="" className='v-x90-plus__section__overview__image'/>
                    </div>
                }   
                {color === 'gray' && 
                    <div className='v-x90-plus__section__overview__image-container'>
                        <img src={X90PlusGray} alt="" className='v-x90-plus__section__overview__image'/>
                    </div>
                }
                {color === 'purple' &&
                    <div className='v-x90-plus__section__overview__image-container'>
                        <img src={X90PlusPurple} alt="" className='v-x90-plus__section__overview__image'/>
                    </div>
                }
                {color === 'blue' &&
                    <div className='v-x90-plus__section__overview__image-container'>
                        <img src={X90PlusBlue} alt="" className='v-x90-plus__section__overview__image'/>
                    </div>
                }
                {color === 'white' &&
                    <div className='v-x90-plus__section__overview__image-container'>
                        <img src={X90PlusWhite} alt="" className='v-x90-plus__section__overview__image'/>
                    </div>
                }
            </div>
            <div className='v-x90-plus__section__design' id="details">
                <div className='v-x90-plus__section__design__info-container no-show-mobile'>
                    <div className='v-x90-plus__section__design__group-a'></div>
                    <div className='v-x90-plus__section__design__text-group'>
                        <p className='v-x90-plus__section__design__text'>Llantas de Aleación 20”</p>
                    </div>
                </div>
                <div className='v-x90-plus__section__design__info-container'>
                    <div className='v-x90-plus__section__design__text-group'>
                        <h2 className='v-x90-plus__section__design__title'>APARIENCIA</h2>
                        <p className='v-x90-plus__section__design__text'>Luces traseras con 236 partículas LED.</p>
                    </div>
                    <div className='v-x90-plus__section__design__group-b'></div>
                </div>
                <div className='v-x90-plus__section__design__info-container no-show-mobile'>
                    <div className='v-x90-plus__section__design__group-c'></div>
                    <div className='v-x90-plus__section__design__text-group'>
                        <p className='v-x90-plus__section__design__text'>Baúl Trasero Eléctrico.</p>
                    </div>
                </div>
            </div>
            <div className='v-x90-plus__section-slider' id="gallery">
                <CSlider title="GALERÍA INTERIOR" data={data.slider1}/>
            </div>
            <div className='v-x90-plus__section-slider'>
                <CSlider title="GALERÍA EXTERIOR" data={data.slider2}/>
            </div>
            <div className='v-x90-plus__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN"/>
            </div>
            <CFooter />
        </div>
    )
}