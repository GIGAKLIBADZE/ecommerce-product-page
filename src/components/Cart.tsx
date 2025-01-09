import {
  CartContainer,
  CartTitle,
  EmptyText,
  Expression,
  Line,
  ProductImage,
  TotalPrice,
  ProductContainer,
  Checkout,
} from "./CartStyle";
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
          <ProductContainer>
            <ProductImage src={SmallProductImage} alt="Product" />
            <div>
              <Expression>Fall Limited Edition Sneakers</Expression>
              <Expression>
                $125.00 x 3<TotalPrice>$375.00</TotalPrice>
              </Expression>
              <Checkout>Checkout</Checkout>
            </div>
            <img
              src={Delete}
              alt="Recycle bin"
              style={{ marginLeft: "1.9rem" }}
            />
          </ProductContainer>
        ) : (
          <EmptyText>Your cart is empty.</EmptyText>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
