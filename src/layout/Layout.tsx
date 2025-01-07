import Menu from "/icon-menu.svg";
import Cart from "/icon-cart.svg";
import Avatar from "/image-avatar.png";

const Layout: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <img src={Menu} alt="Menu" />
          <h1>sneakers</h1>
        </div>
        <div>
          <img src={Cart} alt="Cart" />
          <img src={Avatar} alt="Avatar" />
        </div>
      </div>
    </>
  );
};

export default Layout;
