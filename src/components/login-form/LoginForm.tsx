import React, {useState} from 'react';
import BasInput from "../UI/input/BaseInput";
import BaseButton from "../UI/button/BaseButton";
import '../login-form/login-form.scss'
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions";

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('initState');
    const dispatch = useDispatch()

    function handleClick () {
        // @ts-ignore
        dispatch(login(username, password))
    }
    return (
        <div className="login-form">
                <BasInput placeholder="Логин" onChange={(e: any)=> setUsername(e.target.value)} />
                <BasInput placeholder="Пароль" type="password" onChange={(e: any)=> setPassword(e.target.value)} />
                <BaseButton color="green" text="Войти" action={handleClick} />
        </div>
    );
}

export default LoginForm;
