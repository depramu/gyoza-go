import MenuItem from '../components/MenuItem'
import './Menu.css'

function Menu() {
    const menuItems = [
        {
            icon: '🥟',
            title: 'Gyoza Original',
            subtitle: 'Gyoza + Chili Oil',
            price5: '16K',
            price7: '22K'
        },
        {
            icon: '🧀',
            title: 'Gyoza Mentai',
            subtitle: 'Gyoza + Saos Mentai + Keju + Chili Oil',
            price5: '18K',
            price7: '25K'
        },
        {
            icon: '🍳',
            title: 'Gyoza Goreng',
            subtitle: 'Gyoza + Chili Oil',
            price5: '16K',
            price7: '22K'
        },
        {
            icon: '🔥',
            title: 'Gyoza Goreng Mentai',
            subtitle: 'Gyoza + Saos Mentai + Keju + Chili Oil',
            price5: '18K',
            price7: '25K'
        },
        {
            icon: '🌶️',
            title: 'Gyoza Jebew',
            subtitle: 'Gyoza + Chili Oil + Level (1,2,3)',
            price5: '18K',
            price7: '25K'
        },
        {
            icon: '🍲',
            title: 'Gyoza Kuah Keju',
            subtitle: 'Gyoza + Kuah Keju + Chili Oil',
            price5: '25K',
            price7: '28K'
        }
    ]

    const addons = [
        { name: 'Chili Oil', price: '3K' },
        { name: 'Keju Slice', price: '2K' }
    ]

    return (
        <div className="menu-page">
            <div className="menu-header">
                <div className="container">
                    <h1 className="page-title">Food Menu</h1>
                    <p className="page-subtitle">Pilih porsi favorit Anda: ISI 5 atau ISI 7</p>
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
                                subtitle={item.subtitle}
                                price5={item.price5}
                                price7={item.price7}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section className="menu-section">
                <div className="container">
                    <h2 className="section-title">+ Add On</h2>
                    <div className="addons-list">
                        {addons.map((a, i) => (
                            <div className="addon-item" key={i}>
                                <span className="addon-name">{a.name}</span>
                                <span className="addon-price">{a.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Menu

