import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.png'
import './Header.css'

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo-link">
                    <img src={logoImg} alt="Gyoza Go Logo" className="logo-img" />
                </Link>
                <nav className="nav">
                    <Link to="/menu">Menu</Link>
                    <a href="#tentang">Tentang</a>
                    <a href="#kontak">Kontak</a>
                </nav>
            </div>
        </header>
    )
}

export default Header

