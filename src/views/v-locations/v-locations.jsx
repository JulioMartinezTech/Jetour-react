// import GoogleMapReact from 'google-map-react';

import './locations.css'
import CHeader from '../../components/c-header/c-header'
import CFooter from '../../components/c-footer/c-footer'
import CScrollUp from '../../components/c-scroll-up/c-scroll-up'

import Banner from '../../assets/concesionarios-banner.png'

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function VLocations() {
    // const defaultProps = {
    //     center: {
    //       lat: 10.99835602,
    //       lng: 77.01502627
    //     },
    //     zoom: 11
    //   };
    return(
        <div>
            <CHeader />
            <div className="v-locations__banner">
                <img src={Banner} alt="" className="v-locations__banner__image"/>
            </div>
            <div className="v-locations__title-group">
                <h2 className="v-locations__title">CONCESIONARIOS EN TODO EL PAÍS</h2>
                <p className="v-locations__subtitle">ENCUENTRA EL MÁS CERCANO</p>
            </div>
            <div className="v-locations__map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d39394.467787541435!2d-69.96246588925725!3d18.48247000596633!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf899c9881cd0b%3A0x69aee0aceee46bea!2sJetour%20Rep%C3%BAblica%20Domincana!5e0!3m2!1sen!2sdo!4v1696238676165!5m2!1sen!2sdo" className="v-locations__map" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="mapa"/>
            </div>
            {/* <div className="v-locations__map-container">
                <div style={{ height: '600px', width: '70%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        <AnyReactComponent
                        lat={18.46451}
                        lng={-69.93979}
                        text="Jetour"
                        />
                    </GoogleMapReact>
                </div>
            </div> */}
            <CScrollUp/>
            <CFooter />
        </div>
    )
}