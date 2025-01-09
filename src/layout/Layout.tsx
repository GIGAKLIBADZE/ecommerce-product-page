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
import { useMediaQuery } from "@mui/material";

const Layout: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const desktop = useMediaQuery("(min-width: 90rem)");
  return (
    <>
      <GlobalStyles />
      {!desktop && showMobileMenu ? (
        <MobileMenu setShowMobileMenu={setShowMobileMenu} />
      ) : null}
      {/* {showMobileMenu ? (
        <MobileMenu setShowMobileMenu={setShowMobileMenu} />
      ) : null} */}
      <LayoutContainer $showMobileMenu={showMobileMenu}>
        <MenuAndLogo>
          {!desktop ? (
            <img
              src={Menu}
              alt="Menu"
              onClick={() => setShowMobileMenu(true)}
            />
          ) : null}
          <img src={Logo} alt="Logo" />
        </MenuAndLogo>
        <nav>
          <p>Colletions</p>
          <p>Men</p>
          <p>Women</p>
          <p>About</p>
          <p>Contact</p>
        </nav>
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
