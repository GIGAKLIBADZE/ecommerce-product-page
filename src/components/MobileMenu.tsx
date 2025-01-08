import {
  CloseIcon,
  MenuListItem,
  MobileMenuContainer,
  MobileMenuNavigation,
} from "./MobileMenuStyle";
import Close from "/icon-close.svg";

const MobileMenu: React.FC = () => {
  return (
    <>
      <MobileMenuContainer>
        <CloseIcon src={Close} alt="Close" />
        <MobileMenuNavigation>
          <MenuListItem>Collections</MenuListItem>
          <MenuListItem>Men</MenuListItem>
          <MenuListItem>Women</MenuListItem>
          <MenuListItem>About</MenuListItem>
          <MenuListItem>Contact</MenuListItem>
        </MobileMenuNavigation>
      </MobileMenuContainer>
    </>
  );
};

export default MobileMenu;
