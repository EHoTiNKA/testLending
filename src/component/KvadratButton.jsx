import "./styles/KvadratButton.scss";

const KvadratButton = ({ text }) => {
  return (
    <div className="kvadratButtonBorder front">
      <p>{text}</p>
      <div className="kvadratButtonBorder back">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default KvadratButton;
