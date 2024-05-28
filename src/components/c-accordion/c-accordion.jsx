import { useState } from 'react'
import {WhatsappShareButton} from "react-share";

import './accordion.css'
import ShareIcon from '../../assets/share-icon.png'

export default function CAccordion (props) {
    const [showDetails, setShowDetails] = useState(0)
    return (
        <div className='c-accordion'>
            <div className='c-accordion__container__main-title'>
                <h2 className='c-accordion__main-title'>{props.title}</h2>
                <WhatsappShareButton url={props.url} className='c-accordion__share-button'> <img src={ShareIcon} alt="share-icon" className='c-accordion__share-button__icon'/></WhatsappShareButton>
            </div>
            {props.data.map((item, i)=>{
               return  (
                    <div className='c-accordion__container' key={i}>
                        <div className='c-accordion__title-group' onClick={()=> {showDetails === item.id ? setShowDetails(0) : setShowDetails(item.id)}}>
                            <p className='c-accordion__title'>{item.category}</p>
                            {showDetails === item.id ? <div className='c-accordion__arrow-icon-selected'></div> : <div className='c-accordion__arrow-icon'></div>}
                        </div>
                        {showDetails === item.id && <div className='c-accordion__details'>
                            {item.info.map((detail)=>{
                               return  (
                                    <div className='c-accordion__detail'>
                                        <p className='c-accordion__detail-title'>{detail.title}</p>
                                        <p className='c-accordion__detail-text'>{detail.description}</p>
                                    </div>
                               )
                            })}
                        </div>}
                    </div>
                )
            })}
        </div>
    )
}