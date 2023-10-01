import "./styles/MainHeader.scss";
import svgIcon from "../assets/webIcon.svg";
import OvalButton from "../component/OvalButton";

const MainHeader = () => {
  return (
    <header>
      <div className="headerContent">
        <div className="headerNav">
          <img src={svgIcon} alt="studioWEB" className="svgIcon" />
          <div className="headerNavContent">
            <p>Главная</p>
            <p>Почему именно мы?</p>
            <p>Контакты</p>
            <button className="headerButton"><OvalButton text={"Заказать"}/></button>
          </div>
        </div>  
      </div>
    </header>
  );
};

export default MainHeader;
