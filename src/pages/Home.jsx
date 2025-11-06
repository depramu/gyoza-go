import MenuItem from '../components/MenuItem'
import Button from '../components/Button'
import './Home.css'

function Home() {
    return (
        <div className="app">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="hero-title">
                            Gyoza <span className="highlight">Go</span>
                        </h1>
                        <p className="hero-subtitle">
                            Nikmati gyoza lezat dengan cita rasa yang menggugah selera.
                            <br />
                            Pesan sekarang dan nikmati gyoza segar.
                        </p>
                        <div className="hero-buttons">
                            <Button className="whatsapp-link" variant="primary" to="https://wa.me/6281234567890" target="_blank" rel="noreferrer">Pesan Sekarang</Button>
                            <Button variant="secondary" to="/menu">Lihat Menu</Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="menu">
                <div className="container">
                    <h2 className="section-title">Menu Favorit</h2>
                    <p className="section-subtitle">Pilihan gyoza terbaik untuk Anda</p>
                    <div className="menu-grid">
                        <MenuItem
                            icon="🥟"
                            title="Gyoza Original"
                            description="Gyoza klasik dengan isian daging ayam dan sayuran segar"
                            price="Rp 25.000"
                        />
                        <MenuItem
                            icon="🍤"
                            title="Gyoza Udang"
                            description="Gyoza premium dengan isian udang pilihan yang lezat"
                            price="Rp 35.000"
                        />
                        <MenuItem
                            icon="🥬"
                            title="Gyoza Sayuran"
                            description="Gyoza vegetarian dengan isian sayuran segar dan sehat"
                            price="Rp 20.000"
                        />
                        <MenuItem
                            icon="🔥"
                            title="Gyoza Pedas"
                            description="Gyoza dengan sensasi pedas yang menggugah selera"
                            price="Rp 28.000"
                        />
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="tentang" className="about">
                <div className="container">
                    <div className="about-content">
                        <div className="about-text">
                            <h2 className="section-title">Tentang Kami</h2>
                            <p>
                                Gyoza Go adalah tempat terbaik untuk menikmati gyoza autentik dengan cita rasa yang
                                menggugah selera. Kami menghadirkan pengalaman kuliner yang tak terlupakan dengan
                                resep tradisional yang telah diwariskan turun temurun.
                            </p>
                            <p>
                                Setiap gyoza dibuat dengan hati menggunakan bahan-bahan pilihan berkualitas tinggi
                                dan diproses dengan teliti untuk memberikan kualitas terbaik bagi pelanggan kami.
                            </p>
                            <div className="features">
                                <div className="feature">
                                    <span className="feature-icon">✓</span>
                                    <span>Bahan Berkualitas</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">✓</span>
                                    <span>Resep Autentik</span>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">✓</span>
                                    <span>Dimasak Segar</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="kontak" className="contact">
                <div className="container">
                    <h2 className="section-title">Hubungi Kami</h2>
                    <p className="section-subtitle">Pesan sekarang atau kunjungi kami</p>
                    <div className="contact-grid">
                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <h3>Alamat</h3>
                            <p>Jl. Contoh No. 123<br />Jakarta Selatan</p>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">📞</div>
                            <h3>Telepon</h3>
                            <p>+62 812-3456-7890</p>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">✉️</div>
                            <h3>Email</h3>
                            <p>info@gyozago.com</p>
                        </div>
                        <div className="contact-item">
                            <div className="contact-icon">🕐</div>
                            <h3>Jam Buka</h3>
                            <p>Senin - Minggu<br />10:00 - 22:00 WIB</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home

