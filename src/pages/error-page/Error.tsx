import React from 'react';
import '../error-page/error.scss'
import {Link} from "react-router-dom";

function Error() {
    return (
        <div className="error">
            <div className="error__message">
                <h1 className="error__header">
                    Ошибка доступа
                </h1>
                <p className="error__body">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Link className="error__link" to="/">Назад</Link>
            </div>
        </div>
    );
}

export default Error;
