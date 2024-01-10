import logo from '../../../assets/header/logo.svg';


const HeaderMobile = ({mobileMenuStatus}) => {
    return(
            <div className={`header-mobile ${mobileMenuStatus}`}>
                <img src={logo} alt="" className="header-mobile__logo" />
                <nav className='header-mobile__menu'>
                    <ul className="header-mobile__menu-list">
                        <li className="header-mobile__menu-item"><a href="#" className="header-mobile__menu-link">about us</a></li>
                        <li className="header-mobile__menu-item"><a href="#" className="header-mobile__menu-link">catalog</a></li>
                        <li className="header-mobile__menu-item"><a href="#" className="header-mobile__menu-link">sale</a></li>
                    </ul>
                </nav>
                <div className="header-mobile__contact">
                    +380 (68) 443-94-26
                </div>
            </div>
        
    )
}

export default HeaderMobile