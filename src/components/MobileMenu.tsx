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
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          width: "100%",
          minHeight: "100vh",
          position: "fixed",
          zIndex: 2,
        }}
      >
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
      </div>
    </>
  );
};

export default MobileMenu;
