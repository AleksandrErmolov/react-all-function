import React from 'react';
import MyInput from "../component/UI/Input/MyInput";
import MyButton from "../component/UI/Button/MyButton";

const Login = () => {
    return (
        <div>
            <h1>Страница для логина</h1>
            <form>
                <MyInput type='text' placeholder='Введите логин'/>
                <MyInput type='text' placeholder='Введите пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;