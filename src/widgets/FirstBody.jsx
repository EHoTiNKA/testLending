import "./styles/FirstBody.scss";
import OvalButton from "../component/OvalButton";
import humanSvg from "../assets/humanPNG.png";
import ellipse from "../assets/ellipseBehHuman.png";

const FirstBody = () => {
  return (
    <div className="firstBodyContent">
      <div className="mainTextBody">
        <h1>РАЗРАБОТКА САЙТОВ</h1>
        <h2>ДЛЯ ТВОЕГО БИЗНЕСА</h2>
        <p className="mainTextDesc">
          Мы - студия web-разработки, работаем уже более 3-х лет, готовы
          разработать для вас сайт в кротчайшие сроки.
        </p>

        <div className="underTextButton">
          <button>
            <OvalButton text={"Подробнее >"} />
          </button>
          <p className="nearButtonText">Остались вопросы?</p>
        </div>
      </div>
      <div className="humanSVG">
        <img src={ellipse} alt="crygi" className="elipse" />
        <img src={humanSvg} alt="human" className="human" />
      </div>
    </div>
  );
};

export default FirstBody;
