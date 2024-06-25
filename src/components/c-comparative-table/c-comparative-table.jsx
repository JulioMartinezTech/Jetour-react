import React from "react";
import { WhatsappShareButton } from "react-share";

import "./c-comparative-table.css";

import ShareIcon from "../../assets/share-icon.png";

function CComparativeTable(props) {
  return (
    <div className="c-comparative-table">
      <div className="c-comparative-table__container">
        <div className="c-comparative-table__share-button__container">
          <WhatsappShareButton
            url={props.url}
            className="c-comparative-table__share-button"
          >
            <img
              src={ShareIcon}
              alt="share-icon"
              className="c-comparative-table__share-button__icon"
            />
          </WhatsappShareButton>
        </div>
        <div className="c-comparative-table__section">
          <div className="c-comparative-table__section__title-a">MODELO</div>
          <div className="c-comparative-table__section__title-b">VERSIONES</div>
        </div>
        <div className="c-comparative-table__section">
          <div className="c-comparative-table__column-a__title">DASHING</div>
          <div className="c-comparative-table__column-b__title">
            {props.data.models.version1}
          </div>
          <div className="c-comparative-table__column-c__title">
            {props.data.models.version2}
          </div>
        </div>
        <div className="c-comparative-table__section-items">
          {props.data.comparativeTable.map((item, i) => {
            if (i % 2 === 0) {
              return (
                <div className="c-comparative-table__section" key={i}>
                  <div className="c-comparative-table__column__row-style1">
                    {item.title}
                  </div>
                  <div className="c-comparative-table__column__row-style1">
                    {item.version1}
                  </div>
                  <div className="c-comparative-table__column__row-style1">
                    {item.version2}
                  </div>
                </div>
              );
            } else {
              return (
                <div className="c-comparative-table__section" key={i}>
                  <div className="c-comparative-table__column__row-style2">
                    {item.title}
                  </div>
                  <div className="c-comparative-table__column__row-style2">
                    {item.version1}
                  </div>
                  <div className="c-comparative-table__column__row-style2">
                    {item.version2}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default CComparativeTable;
