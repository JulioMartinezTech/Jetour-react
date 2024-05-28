import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import { NavLink } from 'react-router-dom';

import './header.css'
import Logo from '../../assets/logo.svg' 

export default function CHeader() {
    const [showMenu, setShowMenu] = useState(false)
    const [showSubMenu, setShowSubMenu] = useState(false)
    const subMenuHandle = () => {
        setShowSubMenu(!showSubMenu)
    }
    return(
        <div className='c-header'>
            <div className='c-header__logo-container'>
                <NavLink to={'/'}>
                    <ReactSVG src={Logo} className='c-header__logo'/>
                </NavLink>
            </div>
            <div className='c-header__menu'>
                {!showMenu && <div className='c-header__menu__container' onClick={() => {setShowMenu(!showMenu)}}>
                    <div className='c-header__menu-icon'></div>
                    <div className='c-header__menu-icon'></div>
                    <div className='c-header__menu-icon'></div>
                </div>}
                {showMenu && <div className='c-header__menu__container' onClick={() => {setShowMenu(!showMenu)}}>
                    <div className='c-header__close-icon-left'></div>
                    <div className='c-header__close-icon-right'></div>

                </div>}
                {showMenu && <div className='c-header__nav__mobile'>
                    <NavLink to={'/'} className='c-header__nav__item'>Inicio</NavLink>
                    <div className='c-header__nav__item' onClick={subMenuHandle}>
                        Modelos
                        {showSubMenu && <div className='c-header__nav__submenu'>
                            <NavLink to={'/modelos/x70'} className='c-header__nav__item'>X70</NavLink>
                            <NavLink to={'/modelos/x70-plus'} className='c-header__nav__item'>X70 Plus</NavLink>
                            <NavLink to={'/modelos/dashing'} className='c-header__nav__item'>Dashing</NavLink>
                            <NavLink to={'/modelos/x90-plus'} className='c-header__nav__item'>X90 Plus</NavLink>
                            <NavLink to={'/modelos/t2'} className='c-header__nav__item'>T2</NavLink>
                        </div>}
                    </div>
                    <NavLink to={'/encuentrame'} className='c-header__nav__item'>Encuéntrame</NavLink>
                    <NavLink to={'/post-venta'} className='c-header__nav__item'>Postventa</NavLink>
                    <NavLink to={'/novedades'} className='c-header__nav__item'>Novedades</NavLink>
                    <NavLink to={'/contacto'} className='c-header__nav__item'>Contáctame</NavLink>
                </div>}
            </div>
            <div className='c-header__nav__desktop'>
                    <NavLink to={'/'} className='c-header__nav__item'>Inicio</NavLink>
                    <div className='c-header__nav__item' onClick={subMenuHandle}>
                        Modelos
                        {showSubMenu && <div className='c-header__nav__submenu'>
                            <NavLink to={'/modelos/x70'} className='c-header__nav__item'>X70</NavLink>
                            <NavLink to={'/modelos/x70-plus'} className='c-header__nav__item'>X70 Plus</NavLink>
                            <NavLink to={'/modelos/dashing'} className='c-header__nav__item'>Dashing</NavLink>
                            <NavLink to={'/modelos/x90-plus'} className='c-header__nav__item'>X90 Plus</NavLink>
                            <NavLink to={'/modelos/t2'} className='c-header__nav__item'>T2</NavLink>
                        </div>}
                    </div>
                    <NavLink to={'/encuentrame'} className='c-header__nav__item'>Encuéntrame</NavLink>
                    <NavLink to={'/post-venta'} className='c-header__nav__item'>Postventa</NavLink>
                    <NavLink to={'/novedades'} className='c-header__nav__item'>Novedades</NavLink>
                    <NavLink to={'/contacto'} className='c-header__nav__item'>Contáctame</NavLink>
                </div>
        </div>
    )
}