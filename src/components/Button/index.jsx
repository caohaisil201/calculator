const Button = ({ value, special,onClick }) => {
    
    return (
        <button 
            className={"button " + (special ? "special" : "")}
            onClick={onClick}
        >
            {value}
        </button>
    );
};

export default Button;
