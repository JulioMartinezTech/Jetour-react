import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { ReactSVG } from 'react-svg';
import ReactPlayer from 'react-player'

import './home.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'

// import Portada from '../../assets/SLIDER PRINCIPAL.jpg'
// import Portada from '../../assets/portada.png'
// import DashingName from '../../assets/model-name0.png'
// import X70Name from '../../assets/model-name1.png'
// import X70PlusName from '../../assets/model-name3.png'
// import X90PlusName from '../../assets/model-name5.png'
import Dashing from '../../assets/dashing-3.png'
import X70 from '../../assets/x70-2.png'
import X70Plus from '../../assets/x70plus-2.png'
import X90Plus from '../../assets/x90plus.png'
import DashingMini from '../../assets/dashing-mini.png'
import X70Mini from '../../assets/x70@2x.png'
import X70MiniFront from '../../assets/x70-small.png'
import X70PlusMini from '../../assets/x70plus@2x.png'
import X70PlusMiniFront from '../../assets/x70plus-small.png'
import X90PlusMini from '../../assets/x90plus@2x.png'
import X90PlusMiniFront from '../../assets/x90plus-small.png'
import T2MiniFront from '../../assets/t2-front-view.png'
import T2Mini from '../../assets/t2-mini.png'
import T2 from '../../assets/t2-front-left-angle.png'
import InnovationVideo from '../../assets/videos/dashing-home.mp4'
import T2Video from '../../assets/videos/t2.mp4'
// import SliderButtonBack from '../../assets/slider-button-back.png'
// import SliderButtonNext from '../../assets/slider-button-next.png'
// import PostImage1 from '../../assets/20220415-JETOUR-DASHENG-PORTADA@2x.png'
// import WhatsAppIcon from '../../assets/whatsapp-icon.svg'
// import Logo from '../../assets/logo-white.svg'

export default function VHome() {
    const [dashingHover, setDashingHover] = useState(false);
    const [x70Hover, setX70Hover] = useState(false);
    const [x70PlusHover, setX70PlusHover] = useState(false);
    const [x90PlusHover, setX90PlusHover] = useState(false);
    const [t2Hover, setT2Hover] = useState(false);
    const [modelSelected, setModelSelected] = useState('x70')

    const DashingHoverEnter = () => {
        setDashingHover(true)
    }
    const DashingHoverLeave = () => {
        setDashingHover(false)
    }
    const X70HoverEnter = () => {
        setX70Hover(true)
    }
    const X70HoverLeave = () => {
        setX70Hover(false)
    }
    const X70PlusHoverEnter = () => {
        setX70PlusHover(true)
    }
    const X70PlusHoverLeave = () => {
        setX70PlusHover(false)
    }
    const X90PlusHoverEnter = () => {
        setX90PlusHover(true)
    }
    const X90PlusHoverLeave = () => {
        setX90PlusHover(false)
    }
    const T2HoverEnter = () => {
        setT2Hover(true)
    }
    const T2HoverLeave = () => {
        setT2Hover(false)
    }

    return (
        <div className='v-home'>
            <div className='v-home__header'>
                <CHeader />
            </div>
            <div className='v-home__banner-container'>
                {/* <img src={Portada} alt="Portada" className='v-home__banner__img'/> */}
                {/* <div className='v-home__banner__text'>
                    <div>
                        <h1 className='c-home__banner__title'>BIENVENIDOS A</h1>
                    </div>
                    <div>
                        <ReactSVG src={Logo} className='c-home__banner__logo' />
                    </div>
                    <div>
                        <h2 className='c-home__banner__subtitle'>REPÚBLICA DOMINICANA</h2>
                    </div>
                </div> */}
                <ReactPlayer url={T2Video} width='100%' height='auto' loop playing muted />
            </div>
            <div className='v-home__section__models'>
                {modelSelected === 'dashing' && <div className='v-home__section__model__header'>
                    {/* <img src={DashingName} alt="" className='v-home__section__model__header_image'/> */}
                    <h1 className='v-home__section__model__header__main-title'>DASHING</h1>
                    {/* <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2> */}
                    <Link to={'/modelos/dashing'} className='v-home__section__model__header__button'>Más información</Link>
                </div>}
                {modelSelected === 'x70' && <div className='v-home__section__model__header'>
                    {/* <img src={X70Name} alt="" className='v-home__section__model__header_image'/> */}
                    <h1 className='v-home__section__model__header__main-title'>X70</h1>
                    {/* <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2> */}
                    <Link to={'/modelos/x70'} className='v-home__section__model__header__button'>Más información</Link>
                </div>}
                {modelSelected === 'x70-plus' && <div className='v-home__section__model__header'>
                    {/* <img src={X70PlusName} alt="" className='v-home__section__model__header_image'/> */}
                    <h1 className='v-home__section__model__header__main-title'>X70 PLUS</h1>
                    {/* <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2> */}
                    <Link to={'/modelos/x70-plus'} className='v-home__section__model__header__button'>Más información</Link>
                </div>}
                {modelSelected === 'x90-plus' && <div className='v-home__section__model__header'>
                    {/* <img src={X90PlusName} alt="" className='v-home__section__model__header_image'/> */}
                    <h1 className='v-home__section__model__header__main-title'>X90 PLUS</h1>
                    {/* <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2> */}
                    <Link to={'/modelos/x90-plus'} className='v-home__section__model__header__button'>Más información</Link>
                </div>}
                {modelSelected === 't2' && <div className='v-home__section__model__header'>
                    {/* <img src={X90PlusName} alt="" className='v-home__section__model__header_image'/> */}
                    <h1 className='v-home__section__model__header__main-title'>T2</h1>
                    {/* <h2 className='v-home__section__model__header__title'>EL SUV ELEGANTE Y ESPACIOSO</h2> */}
                    <Link to={'/modelos/t2'} className='v-home__section__model__header__button'>Más información</Link>
                </div>}
                <div className='v-home__section__model-selected'>
                    {modelSelected === 'dashing' && <img src={Dashing} alt="dashing" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 'x70' && <img src={X70} alt="x70" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 'x70-plus' && <img src={X70Plus} alt="x70plus" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 'x90-plus' && <img src={X90Plus} alt="x90plus" className='v-home__section__model-selected-image'/>}
                    {modelSelected === 't2' && <img src={T2} alt="t2" className='v-home__section__model-selected-image v-home__section__model-selected-image-t2'/>}
                </div>
                <div className='v-home__section__models__options'>
                    <div className='v-home__section__models__option-group' onMouseEnter={X70HoverEnter} onMouseLeave={X70HoverLeave} onClick={()=>{setModelSelected('x70')}}>
                        {x70Hover || modelSelected === 'x70' ? <img src={X70MiniFront} alt="x70" className='v-home__section__models__option-image'/> : <img src={X70Mini} alt="x70" className='v-home__section__models__option-image'/>}
                        <p>X70</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={X70PlusHoverEnter} onMouseLeave={X70PlusHoverLeave} onClick={()=>{setModelSelected('x70-plus')}}>
                        {x70PlusHover || modelSelected === 'x70-plus' ? <img src={X70PlusMiniFront} alt="x70plus" className='v-home__section__models__option-image'/> : <img src={X70PlusMini} alt="x70plus" className='v-home__section__models__option-image'/>}
                        <p>X70 PLUS</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={DashingHoverEnter} onMouseLeave={DashingHoverLeave} onClick={()=>{setModelSelected('dashing')}}>
                        {dashingHover || modelSelected === 'dashing' ? <img src={DashingMini} alt="dashing" className='v-home__section__models__option-image'/> : <img src={Dashing} alt="dashing" className='v-home__section__models__option-image'/> }
                        <p>DASHING</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={X90PlusHoverEnter} onMouseLeave={X90PlusHoverLeave} onClick={()=>{setModelSelected('x90-plus')}}>
                        {x90PlusHover || modelSelected === 'x90-plus' ? <img src={X90PlusMiniFront} alt="x90plus" className='v-home__section__models__option-image'/> : <img src={X90PlusMini} alt="x90plus" className='v-home__section__models__option-image'/>}
                        <p>X90 PLUS</p>
                    </div>
                    <div className='v-home__section__models__option-group' onMouseEnter={T2HoverEnter} onMouseLeave={T2HoverLeave} onClick={()=>{setModelSelected('t2')}}>
                        {t2Hover || modelSelected === 't2' ? <img src={T2MiniFront} alt="t2" className='v-home__section__models__option-image'/> : <img src={T2Mini} alt="t2" className='v-home__section__models__option-image'/>}
                        <p>T2</p>
                    </div>
                </div>
            </div>
            <div className='v-home__section__innovation'>
                <div className='v-home__section__innovation__group'>
                    <h2 className='v-home__section__innovation__title'>INNOVACIÓN</h2>
                    <p className='v-home__section__innovation__text'>Impulsado por la innovación y con la búsqueda de la excelencia, está decidido a ser un líder en cada uno de sus campos y convertirse en una marca influyente y confiable del grupo.</p>
                    <p className='v-home__section__innovation__text'>Jetour, marca respaldada por portafolio de vehículos MARTÍ</p>
                    <Link to={'/novedades'} className='v-home__section__innovation__button'>Conoce más sobre nosotros</Link>
                </div>
                <div className='v-home__section__innovation__group'>
                    <video src={InnovationVideo} className='v-home__section__innovation__video' controls></video>
                </div>
            </div>
            <div className='v-home__section__features'>
                <div className='v-home__section__features__items'>
                    <Link to={'/modelos/x70'} className='v-home__section__features__item-a'>
                        <div className='v-home__section__features__item__text-group'>
                            <p>X70</p>
                            <h2>Estabilidad y Seguridad</h2>
                        </div>
                    </Link>
                    <div className='v-home__section__features__item-b'>
                        <Link to={'/modelos/x90-plus'} className='v-home__section__features__item__text-group'>
                            <p>X90 PLUS</p>
                            <h2>Fuerza y Belleza</h2>
                        </Link>
                    </div>
                    <div className='v-home__section__features__item-c'>
                        <Link to={'/modelos/dashing'} className='v-home__section__features__item__text-group'>
                            <p>DASHING</p>
                            <h2>Diseño  y Confort</h2>
                        </Link>
                    </div>
                    <div className='v-home__section__features__item-d'>
                        <Link to={'/modelos/x70-plus'} className='v-home__section__features__item__text-group'>
                            <p>X70 PLUS</p>
                            <h2>Innovación y Desarrollo</h2>
                        </Link>
                    </div>
                </div>
                {/* <Link to={'/modelos/dashing'} className='v-home__section__features__button'>Conoce más sobre nuestros modelos</Link> */}
            </div>
            <div className='v-home__section__news'>
                <div className='v-home__section__news__group__left'>
                    <h2 className='v-home__section__news__title'>
                        NOVEDADES
                    </h2>
                    {/* <Link to={'/novedades'} className='v-home__section__news__button'>Ver todas las novedades de Jetour Dominicana</Link> */}
                    {/* <div className='v-home__section__news__slider-buttons-group'>
                        <img src={SliderButtonBack} alt="" className='v-home__section__news__slider-button'/>
                        <img src={SliderButtonNext} alt="" className='v-home__section__news__slider-button'/>
                    </div> */}
                </div>
                <div className='v-home__section__news__group__right'>
                    <Link to={'/novedades/lidom-grupo-marti-firma-alianza'} className='v-home__section__news__item'>
                        <p className='v-home__section__news__item__title'>LIDOM y Grupo Martí firman alianza</p>
                        <p className='v-home__section__news__item__text'>17.10.23</p>
                        <img src={process.env.PUBLIC_URL + "/Images/dashing-exterior5.jpg"} alt="jetour" className='v-home__section__news__item__image'/>
                    </Link>
                    <Link to={'/novedades/nueva-propuesta-grupo-marti'} className='v-home__section__news__item'>
                        <p className='v-home__section__news__item__title'>La nueva propuesta de Grupo Martí</p>
                        <p className='v-home__section__news__item__text'>10.07.23</p>
                        <img src={process.env.PUBLIC_URL + "/Images/x70PLus-exterior2.jpg"} alt="jetour" className='v-home__section__news__item__image'/>
                    </Link>
                </div>
            </div>
            {/* <div className='v-home__section-whatsapp'>
                <a href="https://api.whatsapp.com/send/?phone=18098899087" className='v-home__whatsapp-icon__container'>
                    <img src={WhatsAppIcon} className='v-home__whatsapp-icon' alt="whatsapp" />
                </a>
            </div> */}
            <CFooter />
        </div>
    )
}