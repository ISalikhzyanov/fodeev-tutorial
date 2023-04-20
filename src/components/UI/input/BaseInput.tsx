import React, {useRef} from 'react';
import '../input/base-input.scss'


function BasInput({disabled, inputStyle, name, onChange, placeholder, readOnly, type, value}: any) {
    const inputRef = useRef(null);
    return (
        <div className="base-input">
            <input ref={inputRef}
                   aria-label={name}
                   data-testid={name}
                   tabIndex={0}
                   type={type}
                   name={name}
                   onChange={onChange}
                   placeholder={placeholder}
                   value={value}
                   style={inputStyle}
                   disabled={disabled}
                   readOnly={readOnly}
                   className="base-input__input"/>
        </div>
    );
}

export default BasInput;
