import React from 'react';
import './base-popup.scss'
import closeBtn from '../../../assets/img/close-btn.svg'

function BasePopup({ title, component, showOrHide }: any) {
    return (
        <div className="base-popup" onClick={showOrHide}>
            <div className="base-popup__content" onClick={(event) => event.stopPropagation()}>
                <h3>{ title }</h3>
                <div
                    className="base-popup__close-btn"
                    onClick={showOrHide}
                >
                    <img src={ closeBtn } />
                </div>
                { component }
            </div>
        </div>
    );
}

export default BasePopup;
