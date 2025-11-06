import './Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <div className="brand-name">Gyoza Go</div>
                    <p>Gyoza autentik, dibuat segar setiap hari.</p>
                </div>
                <div className="footer-links">
                    <a className="whatsapp-link" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">WhatsApp</a>
                    <a href="/menu">Menu</a>
                    <a href="#tentang">Tentang</a>
                    <a href="https://wa.me/6285959114553" target="_blank" rel="noopener noreferrer">
                    Kontak
                    </a>
                
                </div>
                <div className="footer-copy">© {new Date().getFullYear()} Gyoza Go</div>
            </div>
        </footer>
    )
}

export default Footer
