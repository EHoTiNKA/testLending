import "./styles/MainHeader.scss";
import svgIcon from "../assets/webIcon.svg";
import OvalButton from "../component/OvalButton";
import NavItem from "../component/NavItem";

const MainHeader = () => {
  return (
    <header>
      <img src={svgIcon} alt="studioWEB" />
      <div className="headerNavContent">
        <NavItem text={"Главная"} />
        <NavItem text={"Почему именно мы?"} />
        <NavItem text={"Контакты"} />
        <OvalButton text={"Заказать"} />
      </div>
    </header>
  );
};

export default MainHeader;
