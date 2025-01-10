import styled from "styled-components";

export const CartContainer = styled.div<{ $add: boolean }>`
  width: 96%;
  height: 25.6rem;
  max-width: 48rem;
  padding: 2.4rem 0 8.5rem;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 2rem 5rem -2rem rgba(29, 32, 38, 0.5);
  display: ${({ $add }) => ($add ? "block" : "none")};
  position: absolute;
  top: 7.6rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  @media (min-width: 90rem) {
    left: auto;
    transform: none;
    top: 9.4rem;
    right: 8.9rem;
  }
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

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  /* padding-top: 2.4rem;
  padding-left: 6.5%;
  padding-right: 6.5%; */
`;

export const ProductImage = styled.img`
  width: 5rem;
  height: 5rem;
`;

export const Expression = styled.p`
  font-size: 1.6rem;
  font-weight: normal;
  line-height: 1.63;
  color: #69707d;
  margin-left: 1.6rem;
`;

export const TotalPrice = styled.span`
  font-weight: bold;
  color: #1d2026;
  margin-left: 0.4rem;
`;

export const Checkout = styled.button`
  display: flex;
  justify-content: center;
  width: 31.2rem;
  border-radius: 10px;
  padding: 7.05% 38.14% 5.77% 38.46%;
  background-color: #ff7e1b;
  border: none;
  margin-top: 2.4rem;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: normal;
  color: #fff;
`;
