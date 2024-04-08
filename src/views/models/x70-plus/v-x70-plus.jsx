import { useState } from 'react'
import { Link } from 'react-router-dom'
// import ReactPlayer from 'react-player'

import './x70-plus.css'
import data from '../../../data/x70Plus.json'
import CHeader from '../../../components/c-header/c-header'
import CFooter from '../../../components/c-footer/c-footer'
import CSlider from '../../../components/c-slider/c-slider'
import CAccordion from '../../../components/c-accordion/c-accordion'

// import Banner from '../../../assets/x70-plus.jpeg'
// import LogoX70Plus from '../../../assets/X70Plus-1.png'
import X70PLusBlack from '../../../assets/x70-plus-black.png'
import X70PLusGray from '../../../assets/x70-plus-gray.png'
import X70PLusRed from '../../../assets/x70-plus-red.png'
import X70PLusBlue from '../../../assets/x70-plus-blue.png'
import X70PLusWhite from '../../../assets/x70-plus-white.png'
import X70PlusPurple from '../../../assets/x70-plus-purple.png'
// import X70PlusVideoHD from '../../../assets/videos/The-second-generation-X70-HD.mp4'
export default function VX70Plus() {
    const [color, setColor] = useState('black')
    return (
        <div className='v-x70-plus'>
            <CHeader />
            <div className='v-x70-plus__banner'>
                 <img src={process.env.PUBLIC_URL + "/Images/x70PLus-exterior6.jpg"} alt="" className='v-x70-plus__banner__image'/>
                 <div className='v-x70-plus__banner__text-container'>
                    <p className='v-x70-plus__banner__text'>X70 PLUS</p>
                 </div>
            </div>
            <div className='v-x70-plus__content-nav'>
                {/* <img src={LogoX70Plus} alt="" className='v-x70-plus__model-nav__logo'/> */}
                <div className='v-x70-plus__model-nav__actions'>
                    <div className='v-x70-plus__model-nav__nav-items'>
                        <a href="#overview"  className='v-x70-plus__model-nav__nav-item'>Visión general</a>
                        <a href="#details"  className='v-x70-plus__model-nav__nav-item'>Detalles</a>
                        <a href="#gallery"  className='v-x70-plus__model-nav__nav-item'>Galerías</a>
                        <a href="#config"  className='v-x70-plus__model-nav__nav-item'>Configuración</a>
                    </div>
                    <Link to={'/cotizar/x70-plus'} className='v-x70-plus__model-nav__button'>Cotizar ahora</Link>
                </div>
            </div>
            <div className='v-x70-plus__section__overview' id='overview'>
                <div className='v-x70-plus__section__overview__info-container'>
                    {color !== 'white' && <div className='v-x70-plus__section__overview__details-container'>
                        <div className='v-x70-plus__section__overview__details-group'>
                            <p className='v-x70-plus__section__overview__detail-title'>Motor</p>
                            <h2 className='v-x70-plus__section__overview__detail'>1,590cc. Gasolina</h2>
                        </div>
                        <div className='v-x70-plus__section__overview__details-group'>
                            <p className='v-x70-plus__section__overview__detail-title'>Cilindrada</p>
                            <h2 className='v-x70-plus__section__overview__detail'>4 Cilindros</h2>
                        </div>
                        <div className='v-x70-plus__section__overview__details-group'>
                            <p className='v-x70-plus__section__overview__detail-title'>Potencia</p>
                            <h2 className='v-x70-plus__section__overview__detail'>197HP</h2>
                        </div>
                        <a href="http://platanogeek.com/x70plus_720/" className='v-x70-plus__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/x70-plus'} className='v-x70-plus__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    {color === 'white' && <div className='v-x70-plus__section__overview__details-container'>
                        <div className='v-x70-plus__section__overview__details-group'>
                            <p className='v-x70-plus__section__overview__detail-title text-black'>Motor</p>
                            <h2 className='v-x70-plus__section__overview__detail text-black'>1,590cc. Gasolina</h2>
                        </div>
                        <div className='v-x70-plus__section__overview__details-group'>
                            <p className='v-x70-plus__section__overview__detail-title text-black'>Cilindrada</p>
                            <h2 className='v-x70-plus__section__overview__detail text-black'>4 Cilindros</h2>
                        </div>
                        <div className='v-x70-plus__section__overview__details-group'>
                            <p className='v-x70-plus__section__overview__detail-title text-black'>Potencia</p>
                            <h2 className='v-x70-plus__section__overview__detail text-black'>197HP</h2>
                        </div>
                        <a href="http://platanogeek.com/x70plus_720/" className='v-x70-plus__section__overview__3d-button'>Visualizador 3D</a>
                        <Link to={'/cotizar/x70-plus'} className='v-x70-plus__model-nav__button__black'>Cotizar ahora</Link>
                    </div>}
                    <div className='v-x70-plus__section__overview__colors'>
                        <div className='v-x70-plus__section__overview__color v-x70-plus__section__overview__color-black' onClick={()=>{setColor('black')}}></div>
                        {/* <div className='v-x70-plus__section__overview__color v-x70-plus__section__overview__color-gray' onClick={()=>{setColor('gray')}}></div> */}
                        <div className='v-x70-plus__section__overview__color v-x70-plus__section__overview__color-red' onClick={()=>{setColor('red')}}></div>
                        <div className='v-x70-plus__section__overview__color v-x70-plus__section__overview__color-blue' onClick={()=>{setColor('blue')}}></div>
                        <div className='v-x70-plus__section__overview__color v-x70-plus__section__overview__color-white' onClick={()=>{setColor('white')}}></div>
                        {/* <div className='v-x70-plus__section__overview__color v-x70-plus__section__overview__color-purple' onClick={()=>{setColor('purple')}}></div> */}
                    </div>
                </div>
                { color === 'black' && <div className='v-x70-plus__section__overview__background v-x70-plus__section__overview__background-balck'>
                    <div className='v-x70-plus__section__overview__background__title-group'>
                        <h2 className='v-x70-plus__section__overview__background__title'>X70 PLUS</h2>
                        <p className='v-x70-plus__section__overview__background__text'>Negro</p>
                    </div>
                </div>}
                { color === 'gray' && <div className='v-x70-plus__section__overview__background v-x70-plus__section__overview__background-gray'>
                    <div className='v-x70-plus__section__overview__background__title-group'>
                        <h2 className='v-x70-plus__section__overview__background__title'>X70 PLUS</h2>
                        <p className='v-x70-plus__section__overview__background__text'>Gris</p>
                    </div>
                </div>}
                { color === 'red' && <div className='v-x70-plus__section__overview__background v-x70-plus__section__overview__background-red'>
                    <div className='v-x70-plus__section__overview__background__title-group'>
                        <h2 className='v-x70-plus__section__overview__background__title'>X70 PLUS</h2>
                        <p className='v-x70-plus__section__overview__background__text'>Rojo</p>
                    </div>
                </div>}
                { color === 'blue' && <div className='v-x70-plus__section__overview__background v-x70-plus__section__overview__background-blue'>
                    <div className='v-x70-plus__section__overview__background__title-group'>
                        <h2 className='v-x70-plus__section__overview__background__title'>X70 PLUS</h2>
                        <p className='v-x70-plus__section__overview__background__text'>Azul</p>
                    </div>
                </div>}
                { color === 'white' && <div className='v-x70-plus__section__overview__background v-x70-plus__section__overview__background-white'>
                    <div className='v-x70-plus__section__overview__background__title-group'>
                        <h2 className='v-x70-plus__section__overview__background__title text-black'>X70 PLUS</h2>
                        <p className='v-x70-plus__section__overview__background__text text-black'>Blanco</p>
                    </div>
                </div>}
                { color === 'purple' && <div className='v-x70-plus__section__overview__background v-x70-plus__section__overview__background-purple'>
                    <div className='v-x70-plus__section__overview__background__title-group'>
                        <h2 className='v-x70-plus__section__overview__background__title'>X70 PLUS</h2>
                        <p className='v-x70-plus__section__overview__background__text'>Morado</p>
                    </div>
                </div>}
                {color === 'black' &&
                    <div className='v-x70-plus__section__overview__image-container'>
                        <img src={X70PLusBlack} alt="" className='v-x70-plus__section__overview__image'/>
                    </div>
                }   
                {color === 'gray' && 
                    <div className='v-x70-plus__section__overview__image-container'>
                        <img src={X70PLusGray} alt="" className='v-x70-plus__section__overview__image'/>
                    </div>
                }
                {color === 'red' &&
                    <div className='v-x70-plus__section__overview__image-container'>
                        <img src={X70PLusRed} alt="" className='v-x70-plus__section__overview__image'/>
                    </div>
                }
                {color === 'blue' &&
                    <div className='v-x70-plus__section__overview__image-container'>
                        <img src={X70PLusBlue} alt="" className='v-x70-plus__section__overview__image'/>
                    </div>
                }
                {color === 'white' &&
                    <div className='v-x70-plus__section__overview__image-container'>
                        <img src={X70PLusWhite} alt="" className='v-x70-plus__section__overview__image'/>
                    </div>
                }
                {color === 'purple' &&
                    <div className='v-x70-plus__section__overview__image-container'>
                        <img src={X70PlusPurple} alt="" className='v-x70-plus__section__overview__image'/>
                    </div>
                }
            </div>
            <div className='v-x70-plus__section__design' id="details">
                <div className='v-x70-plus__section__design__info-container no-show-mobile'>
                    <div className='v-x70-plus__section__design__group-a'></div>
                    <div className='v-x70-plus__section__design__text-group'>
                        <p className='v-x70-plus__section__design__text'>Aire acondicionado digital. Purificador de aire.</p>
                    </div>
                </div>
                <div className='v-x70-plus__section__design__info-container'>
                    <div className='v-x70-plus__section__design__text-group'>
                        <h2 className='v-x70-plus__section__design__title'>Confort</h2>
                        <p className='v-x70-plus__section__design__text'>Techo Panorámico de 62 pulgadas</p>
                    </div>
                    <div className='v-x70-plus__section__design__group-b'></div>
                </div>
                <div className='v-x70-plus__section__design__info-container no-show-mobile'>
                    <div className='v-x70-plus__section__design__group-c'></div>
                    <div className='v-x70-plus__section__design__text-group'>
                        <p className='v-x70-plus__section__design__text'>Experimenta la comodidad superior con una distancia entre ejes de 2745 mm, comparable a la clase B.</p>
                        <p className='v-x70-plus__section__design__text'>Configuración flexible de 5/7 asientos adaptada a tus necesidades de espacio y confort.</p>
                    </div>
                </div>
            </div>
            {/* <div className="v-x70-plus__section__video-container">
                <ReactPlayer url={X70PlusVideoHD} width='100%' height='1200px' loop playing controls/>
            </div> */}
            <div className='v-x70-plus__section-slider' id="gallery">
                <CSlider title="GALERÍA INTERIOR" data={data.slider1}/>
            </div>
            <div className='v-x70-plus__section-slider'>
                <CSlider title="GALERÍA EXTERIOR" data={data.slider2}/>
            </div>
            <div className='v-x70-plus__section-accordion' id="config">
                <CAccordion data={data.techConfig} title="TABLA DE CONFIGURACIÓN"/>
            </div>
            <CFooter />
        </div>
    )
}