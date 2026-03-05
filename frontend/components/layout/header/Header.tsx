import { useState } from "react";
import "./Header.css";
import logo from "../../../public/assets/BamoLogoOf.png";

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <a href="/"><img src={logo} alt="Logo" /></a>
                </div>

                <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Acerca de nosotros</a></li>
                        <li><a href="#" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;