import "./styles/KvadratButton.scss"

const KvadratButton = ({ text }) => {
    return(
        <div className="kvadratButtonBorder">
            <p>{text}</p>
        </div>
    );
};

export default KvadratButton;