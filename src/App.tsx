import Picture from "./pages/Picture";
import Info from "./pages/Info";
import AddToCart from "./pages/AddToCart";
import { AppContainer } from "./components/AppStyles";

function App() {
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
}

export default App;
