import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../assets/3.png";
import LightLogo from "../../assets/2.png";
import ClosingLoading from "./ClosingLoading"; // Import the ClosingLoading component

import {
    RiHome2Line,
    RiUser3Line,
    RiBriefcase2Line,
    RiStackLine,
    RiChat3Line,
    RiFileList3Line,
    RiMoonLine,
    RiSunLine,
    RiMenu2Line,
} from "react-icons/ri";

const Sidebar = (props) => {
    const [toggle, showMenu] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [text, setText] = useState("react");

    const handleSectionChange = (href) => {
        setText(href);
        setIsLoading(true);
        setTimeout(() => {
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
            setIsLoading(false);
            showMenu(false); 
        }, 1100); 
    };

    return (
        <>
            <aside className={toggle ? 'aside show-menu' : 'aside'}>
                <a href="#home" className="nav__logo">
                    <img src={props.theme === 'light' ? LightLogo : Logo} alt="logo" />
                </a>

                <nav className="nav">
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <button onClick={() => handleSectionChange('#home')} className="nav__link">
                                    <RiHome2Line />
                                </button>
                            </li>

                            <li className="nav__item">
                                <button onClick={() => handleSectionChange('#about')} className="nav__link">
                                    <RiUser3Line />
                                </button>
                            </li>

                            <li className="nav__item">
                                <button onClick={() => handleSectionChange('#services')} className="nav__link">
                                    <RiFileList3Line />
                                </button>
                            </li>

                            {/* <li className="nav__item">
                                <button onClick={() => handleSectionChange('#resume')} className="nav__link">
                                    <RiBriefcase2Line />
                                </button>
                            </li> */}

                            <li className="nav__item">
                                <button onClick={() => handleSectionChange('#portfolio')} className="nav__link">
                                    <RiStackLine />
                                </button>
                            </li>

                            <li className="nav__item">
                                <button onClick={() => handleSectionChange('#contact')} className="nav__link">
                                    <RiChat3Line />
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <button onClick={() => { props.switchTheme(); showMenu(!toggle); }} className="nav__link footer__button">
                        {props.theme === 'light' ? <RiMoonLine /> : <RiSunLine />}
                    </button>
                </div>
            </aside>

            <div className={toggle ? 'nav__toggle nav__toggle-open' : 'nav__toggle'} onClick={() => showMenu(!toggle)}>
                <RiMenu2Line />
            </div>

            {/* Display the closing loading effect */}
            <ClosingLoading isActive={isLoading} props = {text} theme = {props.theme} />
        </>
    );
};

export default Sidebar;
