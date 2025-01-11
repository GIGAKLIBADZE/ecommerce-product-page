import styled from "styled-components";

export const AddToCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.7rem;
  padding: 0 2.4rem 8.8rem 2.4rem;
  width: 100%;

  @media (min-width: 90rem) {
    flex-direction: row;
    padding: 0;
    gap: 1.6rem;
    margin-top: 3.2rem;
  }
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  padding: 2.2rem 2.4rem 1.8rem;
  border-radius: 10px;
  background-color: #f6f8fd;
  width: 100%;
  max-width: 50rem;

  @media (min-width: 90rem) {
    width: 15.7rem;
    padding: 2.2rem 1.6rem 1.7rem;
  }
`;

export const Amount = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  text-align: normal;
  text-align: center;
  color: #1d2026;
`;

export const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 6rem;
  border-radius: 10px;
  background-color: #ff7e1b;
  box-shadow: 0 2rem 5rem -2rem #ff7e1b;
  border: none;
  margin-top: 1.6rem;
  width: 100%;
  max-width: 50rem;

  @media (min-width: 90rem) {
    width: 27.2rem;
    margin-top: 0;
  }
`;

export const BasketPicture = styled.img`
  width: 1.7rem;
  height: 1.6rem;
  filter: brightness(0) invert(1);
`;

export const AddButtonText = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
  line-height: normal;
  text-align: left;
  color: #fff;
`;
