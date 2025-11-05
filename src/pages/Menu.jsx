import MenuItem from '../components/MenuItem'
import './Menu.css'

function Menu() {
    const menuItems = [
        {
            icon: '🥟',
            title: 'Gyoza Original',
            description: 'Gyoza klasik dengan isian daging ayam dan sayuran segar',
            price: 'Rp 25.000'
        },
        {
            icon: '🍤',
            title: 'Gyoza Udang',
            description: 'Gyoza premium dengan isian udang pilihan yang lezat',
            price: 'Rp 35.000'
        },
        {
            icon: '🥬',
            title: 'Gyoza Sayuran',
            description: 'Gyoza vegetarian dengan isian sayuran segar dan sehat',
            price: 'Rp 20.000'
        },
        {
            icon: '🔥',
            title: 'Gyoza Pedas',
            description: 'Gyoza dengan sensasi pedas yang menggugah selera',
            price: 'Rp 28.000'
        },
        {
            icon: '🍖',
            title: 'Gyoza Daging Sapi',
            description: 'Gyoza dengan isian daging sapi premium yang juicy',
            price: 'Rp 30.000'
        },
        {
            icon: '🦀',
            title: 'Gyoza Kepiting',
            description: 'Gyoza eksklusif dengan isian daging kepiting segar',
            price: 'Rp 40.000'
        },
        {
            icon: '🧄',
            title: 'Gyoza Bawang Putih',
            description: 'Gyoza dengan aroma bawang putih yang menggugah selera',
            price: 'Rp 26.000'
        },
        {
            icon: '🌶️',
            title: 'Gyoza Super Pedas',
            description: 'Gyoza dengan level pedas ekstrem untuk pecinta pedas',
            price: 'Rp 32.000'
        }
    ]

    return (
        <div className="menu-page">
            <div className="menu-header">
                <div className="container">
                    <h1 className="page-title">Menu Lengkap</h1>
                    <p className="page-subtitle">Pilih gyoza favorit Anda</p>
                </div>
            </div>

            <section className="menu-section">
                <div className="container">
                    <div className="menu-grid">
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                description={item.description}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu

