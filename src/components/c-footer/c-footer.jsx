import './footer.css'

import Logo from '../../assets/logo.svg' 
import IconInstagram from '../../assets/icon-instagram-white.png'
import IconFacebook from '../../assets/icon-facebook-white.png'
import IconYoutube from '../../assets/icon-youtube.svg'
import LogoMoviti from '../../assets/moviti-logo-new.png'

export default function CFooter() {
    return(
        <div className='c-footer'>
            <div className='c-footer__section c-footer__info'>
                <h2 className='c-footer__title'>Acércate: </h2>
                <p className='c-footer__text'>(809)-732-8232</p>
                <p className='c-footer__text'>info.Jetour@marti.do</p>
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
            <div className='c-footer__section'>
                <h2 className='c-footer__title'>Santo Domingo</h2>
                <p className='c-footer__text'>C/Paseo de los locutores esq. Emiliano Tardiff, Evaristo morales. </p>
                <p className='c-footer__text'>Av. Winston Churchill esq. Charles Sumner  </p>
            </div>
            <div className='c-footer__section'>
                <h2 className='c-footer__title'>Horario:</h2>
                <p className='c-footer__text'>L-V de 8:00AM a 6:00PM</p>
                <p className='c-footer__text'>Sábados de 9:00AM a 1:00PM</p>
            </div>
            <div className='c-footer__section c-footer__info'>
                <h2 className='c-footer__title'>Legal</h2>
                <a href='https://holajetour.do/legal/AVISO-LEGAL-JETOUR.pdf' className='c-footer__text'>Aviso legal</a>
            </div>
            <div className='c-footer__section'>
                <div className='c-footer__group'>
                    <img src={Logo} alt="" className='c-footer__logo'/>
                    <img src={LogoMoviti} alt="" className='c-footer__logo-moviti'/>
                </div>
            </div>
        </div>
    )
}