import styled from "styled-components";

export const InfoContainer = styled.div`
  margin-top: 2.4rem;
  padding: 0 2.4rem;
`;

export const Company = styled.h6`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.85px;
  text-align: left;
  color: #ff7e1b;
`;

export const ProductName = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.14;
  text-align: left;
  color: #1d2026;
  margin-top: 1.9rem;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.67;
  text-align: left;
  color: #69707d;
  margin-top: 1.5rem;
  max-width: 50rem;
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.8rem;
`;

export const PriceInfoSubContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Price = styled.p`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  color: #1d2026;
`;

export const Discount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.1rem;
  height: 2.7rem;
  border-radius: 6px;
  background-color: #ffeee2;
  font-size: 1.6rem;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  color: #ff7e1b;
`;

export const OldPrice = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: 1.63;
  text-align: left;
  color: #b6bcc8;
`;
