
import './button.css';

/**
 * 
 * @param {React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>} param0 
 * @returns 
 */
export default function Button({ children, className, ...props }) {

    return (
        <button
            className={`quadratic-button ${className}`}
            { ...props }
        >
            {children}
        </button>
    );
}
