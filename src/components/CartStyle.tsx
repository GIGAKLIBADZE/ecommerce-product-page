import styled from "styled-components";

export const CartContainer = styled.div<{ $add: boolean }>`
  width: 96%;
  max-width: 48rem;
  padding: 2.4rem 0 8.5rem;
  border-radius: 10px;
  background-color: #ffffff;
  display: ${({ $add }) => ($add ? "block" : "none")};
  position: absolute;
  top: 7.6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`;

export const CartTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  color: #1d2026;
  margin-left: 2.4rem;
`;

export const Line = styled.div`
  width: 36rem;
  height: 0.1rem;
  background-color: #e4e9f2;
  margin-top: 2.7rem;
`;

export const EmptyText = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.63;
  text-align: center;
  color: #69707d;
  margin-top: 7.7rem;
`;
