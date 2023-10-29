import MainHeader from "./MainHeader";
import FirstBody from "./FirstBody";
import SecondBody from "./SecondBody";
import SideNav from "./SideNav";
import './styles/PageLayout.scss'

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <SideNav />
      <div className="pageContent">
        <MainHeader />
        <main>
          <FirstBody />
          <SecondBody />
        </main>
      </div>
    </div>
  );
};

export default PageLayout;
