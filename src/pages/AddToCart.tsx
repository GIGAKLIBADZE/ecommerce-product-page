import Minus from "/icon-minus.svg";
import Plus from "/icon-plus.svg";
import Basket from "/icon-cart.svg";

const AddToCart: React.FC = () => {
  return (
    <>
      <div>
        <div>
          <img src={Minus} alt="Minus" />
          <span>0</span>
          <img src={Plus} alt="Plus" />
        </div>
        <button>
          <img src={Basket} alt="Basket" />
          <span>Add to cart</span>
        </button>
      </div>
    </>
  );
};

export default AddToCart;
