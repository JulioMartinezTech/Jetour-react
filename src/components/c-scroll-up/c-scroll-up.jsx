import React from "react"
import { useState } from "react"

import "./c-scroll-up.css"


function CScrollUp() {

    const [visible, setVisible] = useState(false)

    const ScrollVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if(scrolled > 400) {
            setVisible(true)
        }
        else if(scrolled <= 400) {
            setVisible(false)
        }
    } 
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', ScrollVisible)

    return(
        <div className='c-scroll-up'>
            {visible && <div className='c-scroll-up__button' onClick={ScrollToTop}>
                <div className='c-scroll-up__arrow'></div>
            </div>}
        </div>
    )
}

export default CScrollUp;