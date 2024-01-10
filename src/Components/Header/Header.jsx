import { useState } from 'react';
import logo from '../../assets/header/logo.svg';
import HeaderMobile from './HeaderMobile/HeaderMobile';
import Burger from './Burger/Burger';

const Header = () => {

    const [mobileMenuStatus, setMobileMenuStatus] = useState('');

    const toggleMobileMenu = () => {
        if(mobileMenuStatus === 'active') {
            setMobileMenuStatus('');
        } else {
            setMobileMenuStatus('active');
        }
    }

    return(
        <>
            <header className="header">
                <div className="header__container">
                    <img src={logo} alt="Logo" className="header__logo" />
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-item"><a href="#" className="header__menu-link">about us</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">catalog</a></li>
                            <li className="header__menu-item"><a href="#" className="header__menu-link">sale</a></li>
                        </ul>
                    </nav>
                    <div className="header__contact">
                        +380 (68) 443-94-26
                    </div>
                    <Burger
                        toggleMobileMenu={toggleMobileMenu}
                        mobileMenuStatus={mobileMenuStatus}
                    />
                </div>
            </header>
            <HeaderMobile 
                mobileMenuStatus={mobileMenuStatus}
            />
        </>
    )
}

export default Header