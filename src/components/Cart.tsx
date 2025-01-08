import { CartContainer, CartTitle, EmptyText, Line } from "./CartStyle";

const Cart: React.FC = () => {
  return (
    <>
      <CartContainer>
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
