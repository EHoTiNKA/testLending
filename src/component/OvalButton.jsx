import "./styles/OvalButton.scss"

const OvalButton = ({ text }) => {
    return(
        <button className="ovalButtonBorder">
            <p>{text}</p>
        </button>
    );
};

export default OvalButton;