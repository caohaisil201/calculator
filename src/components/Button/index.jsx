const Button = ({ value, special,onClick }) => {
    
    return (
        <button 
            className={"button " + (special ? "special" : "")}
            onClick={onClick}
        >
            <span>{value}</span>
        </button>
    );
};

export default Button;
