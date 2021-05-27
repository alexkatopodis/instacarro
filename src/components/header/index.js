import React from "react";
import './Header.css';
import InstaCarroLogo from '../../assets/logo.png';
import Phone from '../../assets/phone.svg';
import User from '../../assets/user.svg';
import Caret from '../../assets/caret.svg';

const HeaderComponent = () => {

    return (

        <header>
            <div className="container-header">
                <div className="logo-header">
                    <img src={InstaCarroLogo} alt="Logo InstaCarro" />
                </div>
                <div className="bar-header"></div>
                <div className="phone-header">
                    <img src={Phone} alt="Logo Phone" />
                    (11) 3569 - 3465
                </div>
                <div className="user-header">
                    <div className="user-container">
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