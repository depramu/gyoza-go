import './App.css'

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">🥟 Gyoza Go</div>
          <nav className="nav">
            <a href="#menu">Menu</a>
            <a href="#tentang">Tentang</a>
            <a href="#kontak">Kontak</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Gyoza Lezat <span className="highlight">Autentik</span>
            </h1>
            <p className="hero-subtitle">
              Nikmati kelezatan gyoza tradisional dengan cita rasa yang menggugah selera.
              Dibuat dengan resep turun temurun dan bahan berkualitas terbaik.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">Pesan Sekarang</button>
              <button className="btn btn-secondary">Lihat Menu</button>
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
            <div className="menu-item">
              <div className="menu-icon">🥟</div>
              <h3>Gyoza Original</h3>
              <p>Gyoza klasik dengan isian daging ayam dan sayuran segar</p>
              <div className="menu-price">Rp 25.000</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">🍤</div>
              <h3>Gyoza Udang</h3>
              <p>Gyoza premium dengan isian udang pilihan yang lezat</p>
              <div className="menu-price">Rp 35.000</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">🥬</div>
              <h3>Gyoza Sayuran</h3>
              <p>Gyoza vegetarian dengan isian sayuran segar dan sehat</p>
              <div className="menu-price">Rp 20.000</div>
            </div>
            <div className="menu-item">
              <div className="menu-icon">🔥</div>
              <h3>Gyoza Pedas</h3>
              <p>Gyoza dengan sensasi pedas yang menggugah selera</p>
              <div className="menu-price">Rp 28.000</div>
            </div>
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
              <p><a href="https://wa.me/6285959114553" target="_blank" rel="noopener noreferrer">
              +62 859-5911-4553
            </a>
                </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:zahrahimeldaasari@gmail.com" target = "_blank" rel="noopener noreferrer">info@gyozago.com</a></p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <h3>Jam Buka</h3>
              <p>Senin - Minggu<br />10:00 - 22:00 WIB</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Gyoza Go. Semua hak dilindungi.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
