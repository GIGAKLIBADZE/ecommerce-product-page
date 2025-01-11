import styled from "styled-components";

export const InfoMainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InfoContainer = styled.div`
  margin-top: 2.4rem;
  padding: 0 2.4rem;

  @media (min-width: 90rem) {
    margin-top: 0;
    padding: 0;
  }
`;

export const Company = styled.h6`
  font-size: 1.2rem;
  font-weight: bold;
  line-height: normal;
  letter-spacing: 1.85px;
  text-align: left;
  color: #ff7e1b;

  @media (min-width: 90rem) {
    font-size: 1.3rem;
    letter-spacing: 2px;
  }
`;

export const ProductName = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  line-height: 1.14;
  text-align: left;
  color: #1d2026;
  margin-top: 1.9rem;

  @media (min-width: 90rem) {
    font-size: 4.4rem;
    line-height: 1.09;
    width: 44.5rem;
    margin-top: 2.7;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 1.67;
  text-align: left;
  color: #69707d;
  margin-top: 1.5rem;
  max-width: 50rem;

  @media (min-width: 90rem) {
    font-size: 1.6rem;
    line-height: 1.63;
    margin-top: 3.2rem;
  }
`;

export const PriceInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.8rem;

  @media (min-width: 90rem) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }
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
