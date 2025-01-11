import Picture from "../components/Picture";
import Info from "../components/Info";
import AddToCart from "../components/AddToCart";
import { AppContainer } from "../components/MainStyles";

const Main: React.FC = () => {
  return (
    <>
      <AppContainer>
        <Picture />
        <div>
          <Info />
          <AddToCart />
        </div>
      </AppContainer>
    </>
  );
};

export default Main;
