import {
  Company,
  Description,
  ProductName,
  Price,
  Discount,
  OldPrice,
  InfoContainer,
  PriceInfoContainer,
  PriceInfoSubContainer,
} from "../components/InfoStyles";

const Info: React.FC = () => {
  return (
    <>
      <InfoContainer>
        <Company>SNEAKER COMPANY</Company>
        <ProductName>Fall Limited Edition Sneakers</ProductName>
        <Description>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </Description>
        <PriceInfoContainer>
          <PriceInfoSubContainer>
            <Price>$125.00</Price>
            <Discount>50%</Discount>
          </PriceInfoSubContainer>
          <OldPrice>$250.00</OldPrice>
        </PriceInfoContainer>
      </InfoContainer>
    </>
  );
};

export default Info;
