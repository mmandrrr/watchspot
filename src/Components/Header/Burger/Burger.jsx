

const Burger = ({
    toggleMobileMenu,
    mobileMenuStatus
}) => {
    return(
        <div onClick={toggleMobileMenu} className={`header__burger ${mobileMenuStatus}`}>
            <span className="header__burger_line"></span>
            <span className="header__burger_line"></span>
            <span className="header__burger_line"></span>
        </div>
    )
}

export default Burger