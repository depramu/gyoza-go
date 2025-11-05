import "./App.css";

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
              Nikmati kelezatan gyoza tradisional dengan cita rasa yang
              menggugah selera. Dibuat dengan resep turun temurun dan bahan
              berkualitas terbaik.
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
              <p>Rasakan cita rasa klasik!</p>
              <p>
                Berisi daging ayam dan disajikan dengan chili oil yang menambah
                sensasi gurih dan pedas ringan.
              </p>
              {/* <div className="menu-price">Rp 18.000</div> */}
            </div>
            <div className="menu-item">
              <div className="menu-icon">🍤</div>
              <h3>Gyoza Mentai</h3>
              <p>Kombinasi creamy dan gurih yang sempurna!</p>
              <p>
                Berisi daging ayam diselimuti saus mentai spesial, ditambah keju
                leleh dan sentuhan chili oil untuk rasa yang memperkaya cita
                rasa.
              </p>
              {/* <div className="menu-price">Rp 18.000</div> */}
            </div>
            <div className="menu-item">
              <div className="menu-icon">🥬</div>
              <h3>Gyoza Goreng Mentai</h3>
              <p>Versi renyah dari favorit semua orang!</p>
              <p>
                Berisi daging ayam yang dibalut kulit gyoza, digoreng garing
                keemasan lalu dilumuri saus mentai creamy dengan keju leleh dan
                sedikit chili oil. Renyah di luar, lembut di dalam.
              </p>
              {/* <div className="menu-price">Rp 25.000</div> */}
            </div>
            <div className="menu-item">
              <div className="menu-icon">🔥</div>
              <h3>Gyoza Kuah Keju</h3>
              <p>Lezatnya kehangatan dalam kuah creamy!</p>
              <p>
                Berisi daging ayam dalam kuah keju yang gurih dan creamy,
                dilengkapi chili oil yang memberikan sensasi hangat di setiap
                suapan.
              </p>
              {/* <div className="menu-price">Rp 25.000</div> */}
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
                Gyoza Go adalah tempat terbaik untuk menikmati gyoza autentik
                dengan cita rasa yang menggugah selera. Kami menghadirkan
                pengalaman kuliner yang tak terlupakan dengan resep tradisional
                yang telah diwariskan turun temurun.
              </p>
              <p>
                Setiap gyoza dibuat dengan hati menggunakan bahan-bahan pilihan
                berkualitas tinggi dan diproses dengan teliti untuk memberikan
                kualitas terbaik bagi pelanggan kami.
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
              <p>
                Jl. Contoh No. 123
                <br />
                Jakarta Selatan
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Telepon</h3>
              <p>
                <a
                  href="https://wa.me/6285959114553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-link"
                >
                  +62 859-5911-4553
                </a>
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <p>info@gyozago.com</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">🕐</div>
              <h3>Jam Buka</h3>
              <p>
                Senin - Minggu
                <br />
                10:00 - 22:00 WIB
              </p>
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
  );
}

export default App;
