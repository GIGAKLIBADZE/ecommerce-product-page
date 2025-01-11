import {
  CloseIcon,
  MenuListItem,
  MobileMenuContainer,
  MobileMenuMainContainer,
  MobileMenuNavigation,
} from "./MobileMenuStyle";
import Close from "/icon-close.svg";

const MobileMenu: React.FC<{
  setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setShowMobileMenu }) => {
  return (
    <>
      <MobileMenuMainContainer>
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
      </MobileMenuMainContainer>
    </>
  );
};

export default MobileMenu;
