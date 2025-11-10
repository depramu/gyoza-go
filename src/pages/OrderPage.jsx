import React, { useState } from 'react';
import './OrderPage.css';
import Button from '../components/Button';

const menuItems = [
    {title: 'Gyoza Original', subtitle: 'Gyoza + Chili Oil', price5: '16K', price7: '22K' },
    {title: 'Gyoza Mentai', subtitle: 'Gyoza + Saos Mentai + Keju + Chili Oil', price5: '18K', price7: '25K' },
    {title: 'Gyoza Goreng', subtitle: 'Gyoza + Chili Oil', price5: '16K', price7: '22K' },
    {title: 'Gyoza Goreng Mentai', subtitle: 'Gyoza + Saos Mentai + Keju + Chili Oil', price5: '18K', price7: '25K' },
    {title: 'Gyoza Jebew', subtitle: 'Gyoza + Chili Oil + Level (1,2,3)', price5: '18K', price7: '25K' },
    {title: 'Gyoza Kuah Keju', subtitle: 'Gyoza + Kuah Keju + Chili Oil', price5: '25K', price7: '28K' }
];

const addons = [
    { name: 'Chili Oil', price: '3K' },
    { name: 'Keju Slice', price: '2K' }
];

const parsePrice = (priceStr) => Number(priceStr.replace('K', '')) * 1000;

function OrderPage() {
    const [cart, setCart] = useState({});

    // --- FUNGSI DIPERBAIKI ---
    const handleAddToCart = (item, size) => {
        let key, priceStr, cartTitle;

        if (size === 'addon') {
            // Logika untuk Add-ons
            key = `${item.name}-${size}`;
            priceStr = item.price;
            cartTitle = item.name;
        } else {
            // Logika untuk Menu Gyoza
            key = `${item.title}-${size}`;
            priceStr = size === 5 ? item.price5 : item.price7;
            cartTitle = `${item.title} (Isi ${size})`;
        }

        const numericPrice = parsePrice(priceStr);
        
        setCart(prevCart => {
            const existingItem = prevCart[key];
            if (existingItem) {
                return { ...prevCart, [key]: { ...existingItem, quantity: existingItem.quantity + 1 } };
            } else {
                return { ...prevCart, [key]: { title: cartTitle, price: numericPrice, quantity: 1 } };
            }
        });
    };
    
    // --- FUNGSI DIPERBAIKI ---
    const handleRemoveFromCart = (item, size) => {
        // Gunakan `item.name` untuk addon, dan `item.title` untuk menu
        const key = size === 'addon' ? `${item.name}-${size}` : `${item.title}-${size}`;
        
        setCart(prevCart => {
            const existingItem = prevCart[key];
            if (!existingItem) return prevCart;

            if (existingItem.quantity > 1) {
                return { ...prevCart, [key]: { ...existingItem, quantity: existingItem.quantity - 1 } };
            } else {
                const newCart = { ...prevCart };
                delete newCart[key];
                return newCart;
            }
        });
    };

    const calculateTotal = () => {
        return Object.values(cart).reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const total = calculateTotal();

    const generateWhatsAppMessage = () => {
        let message = "Halo Gyoza Go, saya mau pesan:\n\n";
        
        Object.values(cart).forEach(item => {
            message += `- ${item.title} x ${item.quantity}\n`;
        });

        message += `\n*Total: Rp ${total.toLocaleString('id-ID')}*`;
        message += "\n\nTerima kasih!";
        
        return encodeURIComponent(message);
    };

    const WHATSAPP_NUMBER = "6285779006690"; // Ganti dengan nomor WhatsApp tujuan Anda
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${generateWhatsAppMessage()}`;

    // ... (sisa kode JSX tidak perlu diubah, jadi saya singkat di sini)
    return (
        <div className="order-page">
            <div className="container">
                <h1 className="page-title">Pesan Sekarang</h1>
                <p className="page-subtitle">Pilih menu favoritmu dan tentukan jumlahnya.</p>
                
                <div className="order-layout">
                    {/* Kolom Menu */}
                    <div className="menu-list">
                        <h2>Menu Gyoza</h2>
                        {menuItems.map((item, index) => (
                            <div className="menu-item-order" key={index}>
                                <div className="item-info">
                                    <span className="item-icon">{item.icon}</span>
                                    <div>
                                        <h3 className="item-title">{item.title}</h3>
                                        <p className="item-subtitle">{item.subtitle}</p>
                                    </div>
                                </div>
                                <div className="porsi-options">
                                    <div className="porsi-item">
                                        <span>Isi 5 - <b>{item.price5}</b></span>
                                        <div className="quantity-control">
                                            <button onClick={() => handleRemoveFromCart(item, 5)}>-</button>
                                            <span>{cart[`${item.title}-5`]?.quantity || 0}</span>
                                            <button onClick={() => handleAddToCart(item, 5)}>+</button>
                                        </div>
                                    </div>
                                    <div className="porsi-item">
                                        <span>Isi 7 - <b>{item.price7}</b></span>
                                        <div className="quantity-control">
                                            <button onClick={() => handleRemoveFromCart(item, 7)}>-</button>
                                            <span>{cart[`${item.title}-7`]?.quantity || 0}</span>
                                            <button onClick={() => handleAddToCart(item, 7)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <h2>Add On</h2>
                         {addons.map((addon, index) => (
                            <div className="menu-item-order addon-item" key={`addon-${index}`}>
                                <div className="item-info">
                                    <h3 className="item-title">{addon.name}</h3>
                                </div>
                                <div className="porsi-options">
                                    <div className="porsi-item">
                                        <span>Harga: <b>{addon.price}</b></span>
                                        <div className="quantity-control">
                                            <button onClick={() => handleRemoveFromCart(addon, 'addon')}>-</button>
                                            <span>{cart[`${addon.name}-addon`]?.quantity || 0}</span>
                                            <button onClick={() => handleAddToCart(addon, 'addon')}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         ))}
                    </div>

                    {/* Kolom Ringkasan Pesanan */}
                    <div className="order-summary-card">
                        <h2>Ringkasan Pesanan</h2>
                        {Object.keys(cart).length === 0 ? (
                            <p className="empty-cart-message">Keranjang Anda masih kosong.</p>
                        ) : (
                            <ul className="summary-list">
                                {Object.values(cart).map((item, index) => (
                                    <li key={index} className="summary-item">
                                        <span>{item.title} x {item.quantity}</span>
                                        <span>Rp {(item.price * item.quantity).toLocaleString('id-ID')}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                        <div className="summary-total">
                            <h3>Total Pembayaran</h3>
                            <p>Rp {total.toLocaleString('id-ID')}</p>
                        </div>
                        <Button 
                            variant="primary" 
                            to={whatsappLink} 
                            target="_blank" 
                            rel="noreferrer"
                            disabled={total === 0}
                            className={`whatsapp-order-button ${total === 0 ? 'disabled' : ''}`}
                        >
                            Pesan via WhatsApp
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderPage;