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

import Cart from "../components/Cart";
import { useContext } from "react";
import { MainContext } from "../layout/Layout";

const AddToCart: React.FC = () => {
  const { amount, setAmount, add, setAdd } = useContext(MainContext);
  return (
    <>
      <Cart add={add} amount={amount} setAmount={setAmount} />
      <AddToCartContainer>
        <AmountContainer>
          <img
            src={Minus}
            alt="Minus"
            onClick={() => {
              amount === 0 ? "" : setAmount(amount - 1);
            }}
            className="operation"
          />
          <Amount>{amount}</Amount>
          <img
            src={Plus}
            alt="Plus"
            onClick={() => setAmount(amount + 1)}
            className="operation"
          />
        </AmountContainer>
        <AddButton onClick={() => setAdd(true)}>
          <BasketPicture src={Basket} alt="Basket" />
          <AddButtonText>Add to cart</AddButtonText>
        </AddButton>
      </AddToCartContainer>
    </>
  );
};

export default AddToCart;
