import styled, { css } from "styled-components";

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

export const CartAndAvatarInner = styled.div`
  cursor: pointer;

  &:hover > :first-child {
    filter: brightness(0) invert(0);
  }
`;

export const CartBasket = styled.img<{ $amount: number }>`
  ${({ $amount }) =>
    $amount > 0
      ? css`
          filter: brightness(0) invert(0);
        `
      : ""}
`;

export const AmountContainer = styled.div<{ $amount: number }>`
  display: ${({ $amount }) => ($amount > 0 ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  width: 1.9rem;
  height: 1.3rem;
  border-radius: 6.5px;
  background-color: #ff7e1b;
  font-size: 1rem;
  font-weight: bold;
  line-height: normal;
  color: #ffffff;
  margin-top: -2.8rem;
  margin-left: 1rem;
  position: sticky;
`;

export const AvatarPicture = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;

  @media (min-width: 90rem) {
    width: 5rem;
    height: 5rem;
  }

  &:hover {
    border: solid 0.2rem #ff7e1b;
    border-radius: 50%;
  }
`;

export const DesktopMenu = styled.nav`
  display: flex;
  gap: 3.2rem;

  & > p:hover::after {
    content: "";
    position: absolute;
    left: 0;
    top: 6.8rem;
    width: 100%;
    height: 0.4rem;
    background: #ff7e1b;
  }
`;

export const DesktopMenuElement = styled.p`
  position: relative;
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.73;
  color: #69707d;
  cursor: pointer;

  &:hover {
    color: #1d2026;
  }
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: #e4e9f2;
  margin-top: 3.4rem;
`;
