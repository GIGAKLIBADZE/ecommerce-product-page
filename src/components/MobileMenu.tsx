import {
  CloseIcon,
  MenuListItem,
  MobileMenuContainer,
  MobileMenuNavigation,
} from "./MobileMenuStyle";
import Close from "/icon-close.svg";

const MobileMenu: React.FC<{
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowMobileMenu }) => {
  return (
    <>
      <MobileMenuContainer>
        <CloseIcon
          src={Close}
          alt="Close"
          onClick={() => {
            setShowMobileMenu(false);
          }}
        />
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
