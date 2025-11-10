import './MenuItem.css'

function MenuItem({ icon, title, description, price, price5, price7, subtitle }) {
    const hasDualPrices = price5 || price7

      const isImage = typeof icon === 'string' && (icon.includes('/') || icon.includes('.'));

    return (
       <div className="menu-item">
            {/* Bagian Icon/Gambar */}
            {icon ? (
                <div className="menu-icon">
                    {isImage ? (
                        <img src={icon} alt={title} />
                    ) : (
                        <span>{icon}</span>
                    )}
                </div>
            ) : null}
            <h3>{title}</h3>
            {subtitle ? <div className="menu-subtitle">{subtitle}</div> : null}
            {description ? <p>{description}</p> : null}
            {hasDualPrices ? (
                <div className="menu-price-grid">
                    <div className="price-col">
                        <div className="price-label">ISI 5</div>
                        <div className="price-value">{price5 ?? '-'}</div>
                    </div>
                    <div className="price-col">
                        <div className="price-label">ISI 7</div>
                        <div className="price-value highlight">{price7 ?? '-'}</div>
                    </div>
                </div>
            ) : (
                price ? <div className="menu-price">{price}</div> : null
            )}
        </div>
    )
}

export default MenuItem

