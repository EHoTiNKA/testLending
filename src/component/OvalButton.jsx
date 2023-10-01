import "./styles/OvalButton.scss"

const OvalButton = ({ text }) => {
    return(
        <div className="ovalButtonBorder">
            <p>{text}</p>
        </div>
    );
};

export default OvalButton;