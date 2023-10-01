import "./styles/SecondPageCard.scss"

const SecondPageCard = ({ title, desc, image }) => {
    return(
        <div className="cardMainContent">
            <h3 className="cardTitle">{title}</h3>
            <p className="cardDesc">{desc}</p>
            <img src={image} alt="error" className="cardImage" />
        </div>
    );
};

export default SecondPageCard;