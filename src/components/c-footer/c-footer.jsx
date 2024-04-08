import './footer.css'

import Logo from '../../assets/logo.svg' 
import IconInstagram from '../../assets/icon-instagram-white.png'
import IconFacebook from '../../assets/icon-facebook-white.png'
import IconYoutube from '../../assets/icon-youtube.svg'
import LogoMoviti from '../../assets/moviti-logo-new.png'

export default function CFooter() {
    return(
        <div className='c-footer'>
            <div className='c-footer__section'>
                <div className='c-footer__group'>
                    <img src={Logo} alt="" className='c-footer__logo'/>
                    <div className='c-footer__rrss-group'>
                        <a href="https://www.instagram.com/holajetour/">
                            <img src={IconInstagram} alt="" className='c-footer__rrss-image'/>
                        </a>
                        <a href="https://web.facebook.com/profile.php?id=100092172548080">
                            <img src={IconFacebook} alt="" className='c-footer__rrss-image'/>
                        </a>
                        <a href=" https://youtube.com/@holajetour?si=y_6t9pMd3Ha1pDEx">
                            <img src={IconYoutube} alt="" className='c-footer__rrss-image'/>
                        </a>
                    </div>
                </div>
                <div className='c-footer__separator'></div>
                <div className='c-footer__group'>
                    <img src={LogoMoviti} alt="" className='c-footer__logo-moviti'/>
                </div>
            </div>
        </div>
    )
}