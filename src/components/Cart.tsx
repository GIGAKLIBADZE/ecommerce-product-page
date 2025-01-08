import { CartContainer, CartTitle, EmptyText, Line } from "./CartStyle";

const Cart: React.FC<{ add: boolean }> = ({ add }) => {
  return (
    <>
      <CartContainer $add={add}>
        <div>
          <CartTitle>Cart</CartTitle>
        </div>
        <Line></Line>
        <EmptyText>Your cart is empty.</EmptyText>
      </CartContainer>
    </>
  );
};

export default Cart;
