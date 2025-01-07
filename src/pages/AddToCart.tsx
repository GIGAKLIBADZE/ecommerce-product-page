import Minus from "/icon-minus.svg";
import Plus from "/icon-plus.svg";
import Basket from "/icon-cart.svg";
import {
  Amount,
  AmountContainer,
  AddButton,
  AddToCartContainer,
  AddButtonText,
  BasketPicture,
} from "../components/AddToCardStyles";

const AddToCart: React.FC = () => {
  return (
    <>
      <AddToCartContainer>
        <AmountContainer>
          <img src={Minus} alt="Minus" />
          <Amount>0</Amount>
          <img src={Plus} alt="Plus" />
        </AmountContainer>
        <AddButton>
          <BasketPicture src={Basket} alt="Basket" />
          <AddButtonText>Add to cart</AddButtonText>
        </AddButton>
      </AddToCartContainer>
    </>
  );
};

export default AddToCart;
