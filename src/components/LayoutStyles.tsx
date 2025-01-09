import styled from "styled-components";

export const LayoutContainer = styled.div<{ $showMobileMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem 0 2.4rem;
  opacity: ${({ $showMobileMenu }) => ($showMobileMenu ? "0.75" : "")};
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
  gap: 2.2rem;
`;

export const Avatar = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  width: 24px;
  height: 24px;
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
