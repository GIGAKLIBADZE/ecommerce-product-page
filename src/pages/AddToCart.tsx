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
import { useState } from "react";
import Cart from "../components/Cart";

const AddToCart: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  return (
    <>
      <AddToCartContainer>
        <AmountContainer>
          <img
            src={Minus}
            alt="Minus"
            onClick={() => {
              amount === 0 ? "" : setAmount(amount - 1);
            }}
          />
          <Amount>{amount}</Amount>
          <img src={Plus} alt="Plus" onClick={() => setAmount(amount + 1)} />
        </AmountContainer>
        <AddButton>
          <BasketPicture src={Basket} alt="Basket" />
          <AddButtonText>Add to cart</AddButtonText>
        </AddButton>
      </AddToCartContainer>
      <Cart />
    </>
  );
};

export default AddToCart;
