import "./styles/FirstPage.scss";
import MainHeader from "./MainHeader";
import FirstBody from "./FirstBody";

const FirstPage = () => {
  return (
    <body className="bodyFirstPage">
      <div className="firstPageMainContent"> 
        <MainHeader />
        <FirstBody />
      </div>
    </body>
  );
};

export default FirstPage;
