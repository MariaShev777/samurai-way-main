import React from 'react';
import s from './header.module.css'
import {NavLink} from "react-router-dom";

export type HeaderProps = MapStateToPropsType & MapDispatchPropsType;

export type MapStateToPropsType = {
    isAuth: boolean
    login: string | null
}

export type MapDispatchPropsType = {
    logOutTC: () => void
}

const Header = (props: HeaderProps) => {
    return (
        <header className={s.header}>
            <img src="https://raw.githubusercontent.com/infinitered/dogs-n-cats/HEAD/_art/dnc_logo.png"/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}
                        <button className={'button'} onClick={props.logOutTC}>Log out</button>
                    </div>
                    : <NavLink to={"/login"}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;