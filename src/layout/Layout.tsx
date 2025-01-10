import GlobalStyles from "../GlobalStyles";
import Menu from "/icon-menu.svg";
import Logo from "/logo.svg";
import Cart from "/icon-cart.svg";
import Avatar from "/image-avatar.png";
import {
  AvatarPicture,
  CartAndAvatar,
  DesktopMenu,
  DesktopMenuElement,
  LayoutContainer,
  MenuAndLogo,
  MainContainer,
  Line,
  AmountContainer,
} from "../components/LayoutStyles";
import { Outlet } from "react-router-dom";
import MobileMenu from "../components/MobileMenu";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";
import { createContext } from "react";

export const CounterContext = createContext<{
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}>({
  amount: 0,
  setAmount: () => {},
});

const Layout: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [amount, setAmount] = useState<number>(0);

  const desktop = useMediaQuery("(min-width: 90rem)");
  return (
    <>
      <GlobalStyles />
      <MainContainer>
        {!desktop && showMobileMenu ? (
          <MobileMenu setShowMobileMenu={setShowMobileMenu} />
        ) : null}
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
            {desktop ? (
              <DesktopMenu>
                <DesktopMenuElement>Colletions</DesktopMenuElement>
                <DesktopMenuElement>Men</DesktopMenuElement>
                <DesktopMenuElement>Women</DesktopMenuElement>
                <DesktopMenuElement>About</DesktopMenuElement>
                <DesktopMenuElement>Contact</DesktopMenuElement>
              </DesktopMenu>
            ) : null}
          </MenuAndLogo>
          <CartAndAvatar>
            <div>
              <img src={Cart} alt="Cart" />
              <AmountContainer>
                <small>{amount}</small>
              </AmountContainer>
            </div>
            <AvatarPicture src={Avatar} alt="Avatar" />
          </CartAndAvatar>
        </LayoutContainer>
        {desktop ? <Line></Line> : null}
      </MainContainer>
      <CounterContext.Provider value={{ amount, setAmount }}>
        <Outlet />
      </CounterContext.Provider>
    </>
  );
};

export default Layout;
