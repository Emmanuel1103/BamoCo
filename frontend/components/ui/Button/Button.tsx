import React from 'react';
import './Button.css';

/**
 * Propiedades para el componente Button.
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';

    size?: 'sm' | 'md' | 'lg';
}

/**
 * Componente de botón reutilizable con soporte para variantes y tamaños.
 */
const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}) => {
    const buttonClass = `ui-button ${variant} ${size} ${className}`;

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
};

export default Button;
