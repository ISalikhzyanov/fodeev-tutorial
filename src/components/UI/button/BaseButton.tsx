import React from 'react';
import '../button/base-button.scss'


function BaseButton({ color, text, action} : { color: string, text: string, action?: any | undefined}) {

    function getBtnColor () {
        switch (color){
            case 'green':
                return 'base-button green';
            case 'gray':
                return 'base-button gray'
        }
    }

    return (
        <div onClick={()=> action()} className={getBtnColor()}>
            <span className="base-button__text">{text}</span>
        </div>
    );
}

export default BaseButton;
