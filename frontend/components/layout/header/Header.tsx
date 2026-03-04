import "./Header.css";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-logo">
                    <img src="/logo.png" alt="Logo" />
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><a href="#">Acerca de nosotros</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;