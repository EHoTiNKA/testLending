import "./styles/MainHeader.scss";
import svgIcon from "../assets/webIcon.svg";
import OvalButton from "../component/OvalButton";
import NavItem from "../component/NavItem";

const MainHeader = () => {
  return (
    <header>
      <div className="headerContent">
        <div className="headerNav">
          <img src={svgIcon} alt="studioWEB" className="svgIcon" />
          <div className="headerNavContent">
            <NavItem text={"Главная"} />
            <NavItem text={"Почему именно мы?"} />
            <NavItem text={"Контакты"} />
            <button className="headerButton"><OvalButton text={"Заказать"}/></button>
          </div>
        </div>  
      </div>
    </header>
  );
};

export default MainHeader;
