import styled from "styled-components";

export const LayoutContainer = styled.div<{ $showMobileMenu: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 2rem 2.4rem 0 2.4rem;
  opacity: ${({ $showMobileMenu }) => ($showMobileMenu ? "0.75" : "")};
`;

export const MenuAndLogo = styled.div`
  display: flex;
  gap: 1.6rem;
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
