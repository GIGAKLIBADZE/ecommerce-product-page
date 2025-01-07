import GlobalStyles from "../GlobalStyles";
import Menu from "/icon-menu.svg";
import Logo from "/logo.svg";
import Cart from "/icon-cart.svg";
import Avatar from "/image-avatar.png";
import {
  CartAndAvatar,
  LayoutContainer,
  MenuAndLogo,
} from "../components/LayoutStyles";

const Layout: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <LayoutContainer>
        <MenuAndLogo>
          <img src={Menu} alt="Menu" />
          <img src={Logo} alt="Logo" />
        </MenuAndLogo>
        <CartAndAvatar>
          <img src={Cart} alt="Cart" />
          <img
            src={Avatar}
            alt="Avatar"
            style={{ width: "2.4rem", height: "2.4rem" }}
          />
        </CartAndAvatar>
      </LayoutContainer>
    </>
  );
};

export default Layout;
