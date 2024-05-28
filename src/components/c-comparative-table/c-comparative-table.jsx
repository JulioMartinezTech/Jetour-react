import React from "react";
import {WhatsappShareButton} from "react-share";

import './c-comparative-table.css'
import CCheckMark from "../c-check-mark/c-check-mark";
import ShareIcon from '../../assets/share-icon.png'

function CComparativeTable(props) {
    return(
        <div className="c-comparative-table">
            <div className="c-comparative-table__container">
                <div className="c-comparative-table__share-button__container">
                <WhatsappShareButton url={props.url} className='c-accordion__share-button'> <img src={ShareIcon} alt="share-icon" className='c-accordion__share-button__icon'/></WhatsappShareButton>
                </div>
                <div className="c-comparative-table__section">
                    <div className="c-comparative-table__section__title-a">MODELO</div>
                    <div className="c-comparative-table__section__title-b">VERSIONES</div>
                </div>
                <div className="c-comparative-table__section">
                    <div className="c-comparative-table__column-a">
                        <div className="c-comparative-table__column-a__title">DASHING</div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                    </div>
                    <div className="c-comparative-table__column-b">
                        <div className="c-comparative-table__column-b__title">VERSION1</div>
                        <div className="c-comparative-table__column__row-style1">
                            <CCheckMark />
                        </div>
                        <div className="c-comparative-table__column__row-style2">
                        <CCheckMark />
                        </div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2">
                        <CCheckMark />
                        </div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                    </div>
                    <div className="c-comparative-table__column-c">
                        <div className="c-comparative-table__column-c__title">VERSION2</div>
                        <div className="c-comparative-table__column__row-style1">
                        <CCheckMark />
                        </div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1">
                        <CCheckMark />
                        </div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                        <div className="c-comparative-table__column__row-style2"></div>
                        <div className="c-comparative-table__column__row-style1"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CComparativeTable;