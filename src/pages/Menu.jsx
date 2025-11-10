import MenuItem from '../components/MenuItem'
import './Menu.css'
import mentai from '../assets/mentai.jpg'
import goreng from '../assets/goreng.jpg'
import jebew from '../assets/jebew.jpg'
import kuahkeju from '../assets/kuahKeju.jpg'
import gorengmentai from '../assets/gorengMentai.jpg'


function Menu() {
    const menuItems = [
        {
            icon: original,
            title: 'Gyoza Original',
            subtitle: 'Gyoza + Chili Oil',
            price5: '16K',
            price7: '22K'
        },
        {
            icon: mentai,
            title: 'Gyoza Mentai',
            subtitle: 'Gyoza + Saos Mentai + Keju + Chili Oil',
            price5: '18K',
            price7: '25K'
        },
        {
            icon: goreng,
            title: 'Gyoza Goreng',
            subtitle: 'Gyoza + Chili Oil',
            price5: '16K',
            price7: '22K'
        },
        {
            icon: gorengmentai,
            title: 'Gyoza Goreng Mentai',
            subtitle: 'Gyoza + Saos Mentai + Keju + Chili Oil',
            price5: '18K',
            price7: '25K'
        },
        {
            icon: jebew,
            title: 'Gyoza Jebew',
            subtitle: 'Gyoza + Chili Oil + Level (1,2,3)',
            price5: '18K',
            price7: '25K'
        },
        {
            icon: kuahkeju,
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
                    <h1 className="page-title">Menu</h1>
                    <p className="page-subtitle">Pilih porsi favorit Anda: Isi 5 atau isi 7</p>
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