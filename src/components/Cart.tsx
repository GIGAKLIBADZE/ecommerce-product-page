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
          <div
            style={{
              paddingTop: "2.4rem",
              paddingLeft: "6.5%",
              paddingRight: "6.5%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ProductContainer>
              <ProductImage src={SmallProductImage} alt="Product" />
              <div>
                <Expression>Fall Limited Edition Sneakers</Expression>
                <Expression>
                  $125.00 x 3<TotalPrice>$375.00</TotalPrice>
                </Expression>
              </div>
              <img
                src={Delete}
                alt="Recycle bin"
                style={{ marginLeft: "1.9rem" }}
              />
            </ProductContainer>
            <Checkout>Checkout</Checkout>
          </div>
        ) : (
          <EmptyText>Your cart is empty.</EmptyText>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
