import React from "react";
import './Header.css';
import InstaCarroLogo from '../../assets/logo.png';
import Phone from '../../assets/phone.svg';
import User from '../../assets/user.svg';
import Caret from '../../assets/caret.svg';

const HeaderComponent = () => {

    return (

        <header>
            <div id="container-header">
                <div id="logo-header">
                    <img src={InstaCarroLogo} alt="Logo InstaCarro" />
                </div>
                <div id="bar-header"></div>
                <div id="phone-header">
                    <img src={Phone} alt="Logo Phone" />
                    (11) 3569 - 3465
                </div>
                <div id="user-header">
                    <div id="user-container">
                        <img src={User} alt="Logo User" />
                        User Test
                    </div>
                    <img src={Caret} alt="Logo Caret" />
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent;