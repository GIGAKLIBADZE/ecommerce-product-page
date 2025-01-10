import styled from "styled-components";

export const MobileMenuContainer = styled.div`
  width: 25rem;
  /* padding: 2.5rem 13.1rem 62.8rem 2.5rem; */
  padding: 2.5rem;
  min-height: 100vh;
  background-color: green;
  position: absolute;
  /* position: relative; */
  top: 0;
  z-index: 2;
  opacity: 1 !important;
`;

export const MobileMenuNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5.4rem;
`;

export const CloseIcon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;

export const MenuListItem = styled.p`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.44;
  text-align: left;
  color: #1d2026;
`;
