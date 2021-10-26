import './Button.css';

// Hablar sobre esto! Wrapper de botón para agregar estilo usando {...props}
const Button = (props) => {
    return (
        <button {...props} className="btn" />
    )
}

export default Button;