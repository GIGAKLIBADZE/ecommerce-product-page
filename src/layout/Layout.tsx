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
import { Outlet } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";

const Layout: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  return (
    <>
      <GlobalStyles />
      {showMobileMenu ? (
        <MobileMenu setShowMobileMenu={setShowMobileMenu} />
      ) : null}
      <LayoutContainer $showMobileMenu={showMobileMenu}>
        <MenuAndLogo>
          <img src={Menu} alt="Menu" onClick={() => setShowMobileMenu(true)} />
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
      <Outlet />
    </>
  );
};

export default Layout;
