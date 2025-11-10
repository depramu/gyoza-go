import MenuItem from "../components/MenuItem";
import Button from "../components/Button";
import "./Home.css";
import mentai from '../assets/mentai.jpg'
import goreng from '../assets/goreng.jpg'
import jebew from '../assets/jebew.jpg'
import kuahkeju from '../assets/kuahKeju.jpg'
import gorengmentai from '../assets/gorengMentai.jpg'

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
              <Button variant="primary" to="/pesan">
                Pesan Sekarang
              </Button>
              <Button variant="secondary" to="/menu">
                Lihat Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="menu">
        <div className="container">
          <h2 className="section-title">Menu Favorit</h2>
          <p className="section-subtitle">Pilihan gyoza terbaik untuk Anda</p>
          <div className="menu-grid-home">
            <MenuItem
              icon={goreng}
              title="Gyoza Original"
              description="Gyoza klasik isi ayam dan sentuhan chili oil yang menambah citarasa."
            />
            <MenuItem
              icon={mentai}
              title="Gyoza Mentai"
              description="Gyoza isi ayam dengan saus mentai panggang yang creamy dan menggoda selera."
            />
            <MenuItem
              icon={gorengmentai}
              title="Gyoza Goreng Mentai"
              description="Gyoza goreng isi ayam kombinasi kerenyahan dan rasa creamy yang bikin nagih."
            />
            <MenuItem
              icon={kuahkeju}
              title="Gyoza Kuah Keju"
              description="Gyoza isi ayam berpadu dengan kuah keju gurih yang meleleh di setiap suapan."
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
                {" "}
                <a  
                  href="https://www.google.com/maps/search/?api=1&query=-6.12603,106.90382"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Gg. Masjid Al-Kuramaa No.23
                </a>
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <h3>Telepon</h3>
              <p>
                <a
                  href="https://wa.me/6285779006690"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 857-7900-6690
                </a>
              </p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📱</div>
              <h3>Sosial Media</h3>
              <p>
                <a
                  href="https://www.instagram.com/gyoza_go/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @gyoza_go
                </a>
              </p>
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
    </div>
  );
}

export default Home;