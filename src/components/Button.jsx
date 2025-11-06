import { Link } from 'react-router-dom'
import './Button.css'

function Button({ children, variant = 'primary', to, onClick, className = '', type = 'button' }) {
    const baseClass = 'btn'
    const variantClass = `btn-${variant}`
    const combinedClass = `${baseClass} ${variantClass} ${className}`.trim()

    if (to) {
        return (
            <Link to={to} className={combinedClass}>
                {children}
            </Link>
        )
    }

    return (
        <button type={type} className={combinedClass} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button

