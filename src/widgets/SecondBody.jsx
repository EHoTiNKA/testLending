import "./styles/SecondBody.scss";
import KvadratButton from "../component/KvadratButton";
import SecondPageCard from "../component/SecondPageCard";
import timeSVG from "./../assets/timeSVG.svg";
import chelSVG from "./../assets/chel.svg";
import yshiSVG from "./../assets/nayshniki.svg";

const SecondBody = () => {
  return (
      <div className="secondBodyContent">
        <div className="secondPageMainText">
          <h2>Причины сотрудничать с нами</h2>
          <p className="secondPageParagraf">
            Пока конкуренты говорят о том, что они лучшие - мы это доказываем
            делом.
          </p>
          <p className="secondPageParagraf">
            Вы можете ознакомиться с информацией о нас и посмотреть наше
            портфолио.
          </p>
          <button>
            <KvadratButton text={"Портфолио"} />
          </button>
        </div>

        <SecondPageCard
          title={"В сроки сдаём работу!"}
          desc={"Расписываем каждый этап по срокам, и придерживаемся дедлайнов"}
          image={timeSVG}
        />
        <SecondPageCard
          title={"Команда специалистов"}
          desc={
            "В нашей команде множество цпециалистов, и каждый из них хорошо знает свое дело"
          }
          image={chelSVG}
        />
        <SecondPageCard
          title={"Консультация перед заказом"}
          desc={
            "Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы"
          }
          image={yshiSVG}
        />
        <SecondPageCard
          title={"Приемлимые цены"}
          desc={
            "Мы максимально оптимизируем наш труд, для того, чтобы цены были доступны"
          }
          image={timeSVG}
        />
      </div>
  );
};

export default SecondBody;
