import { CartContainer, CartTitle, EmptyText, Line } from "./CartStyle";
import SmallProductImage from "/public/image-product-1-thumbnail.jpg";
import Delete from "/icon-delete.svg";

const Cart: React.FC<{ add: boolean; amount: number }> = ({ add, amount }) => {
  return (
    <>
      <CartContainer $add={add}>
        <div>
          <CartTitle>Cart</CartTitle>
        </div>
        <Line></Line>
        {amount > 0 ? (
          <div>
            <img src={SmallProductImage} alt="Product" />
            <p>Fall Limited Edition Sneakers</p>
            <p>
              $125.00 x 3<span>$375.00</span>
            </p>
            <img src={Delete} alt="Recycle bin" />
          </div>
        ) : (
          <EmptyText>Your cart is empty.</EmptyText>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
