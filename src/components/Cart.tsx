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
  CartInnerContainer,
} from "./CartStyle";
import SmallProductImage from "/public/image-product-1-thumbnail.jpg";
import Delete from "/icon-delete.svg";

const Cart: React.FC<{
  add: boolean;
  amount: number;
  setAmount: React.Dispatch<React.SetStateAction<number>>;
}> = ({ add, amount, setAmount }) => {
  return (
    <>
      <CartContainer $add={add}>
        <div>
          <CartTitle>Cart</CartTitle>
        </div>
        <Line></Line>
        {amount > 0 ? (
          <CartInnerContainer>
            <ProductContainer>
              <ProductImage src={SmallProductImage} alt="Product" />
              <div>
                <Expression>Fall Limited Edition Sneakers</Expression>
                <Expression>
                  $125.00 x {amount}
                  <TotalPrice>${amount * 125}</TotalPrice>
                </Expression>
              </div>
              <img
                src={Delete}
                alt="Recycle bin"
                style={{ marginLeft: "1.9rem", cursor: "pointer" }}
                onClick={() => {
                  console.log("Delete clicked");
                  setAmount(0);
                }}
              />
            </ProductContainer>
            <Checkout>Checkout</Checkout>
          </CartInnerContainer>
        ) : (
          <EmptyText>Your cart is empty.</EmptyText>
        )}
      </CartContainer>
    </>
  );
};

export default Cart;
