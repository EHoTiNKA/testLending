import MainHeader from "./MainHeader";
import FirstBody from "./FirstBody";
import SecondBody from "./SecondBody";
import SideNav from "./SideNav";

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <MainHeader />
      <SideNav />
      <FirstBody />
      <SecondBody />
    </div>
  );
};

export default PageLayout;
