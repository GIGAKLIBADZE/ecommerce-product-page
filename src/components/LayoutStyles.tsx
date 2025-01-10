import styled from "styled-components";

export const MainContainer = styled.div`
  @media (min-width: 90rem) {
    padding: 4.3rem 16.5rem;
  }
`;

export const LayoutContainer = styled.div<{ $showMobileMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem 0 2.4rem;
  opacity: ${({ $showMobileMenu }) => ($showMobileMenu ? "0.75" : "")};

  @media (min-width: 90rem) {
    /* padding: 4.3rem 16.5rem; */
    padding: 0;
  }
`;

export const MenuAndLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media (min-width: 90rem) {
    gap: 5.7rem;
  }
`;

export const CartAndAvatar = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;

  @media (min-width: 90rem) {
    gap: 5.7rem;
  }
`;

export const AvatarPicture = styled.img`
  width: 2.4rem;
  height: 2.4rem;

  @media (min-width: 90rem) {
    width: 5rem;
    height: 5rem;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  gap: 3.2rem;
`;

export const DesktopMenuElement = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.73;
  color: #69707d;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #e4e9f2;
  margin-top: 3.4rem;
`;
