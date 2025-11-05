import './MenuItem.css'

function MenuItem({ icon, title, description, price }) {
    return (
        <div className="menu-item">
            <div className="menu-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className="menu-price">{price}</div>
        </div>
    )
}

export default MenuItem

