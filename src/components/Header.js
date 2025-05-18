import Logo from '../image/logo.png';
import "./Header.css";

function Header() { // First Upper case
    return (
        <nav>
            <img src={Logo} alt="logo" className="logo"/>
            <a href="/">Home</a>
        </nav>
    );
}

export default Header;
