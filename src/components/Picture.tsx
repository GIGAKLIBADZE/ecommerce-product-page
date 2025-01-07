import {
  ProductPicture,
  ProductPictureChangeContainer,
  LeftArrowContainer,
  RightArrowContainer,
  Arrow,
} from "./PictureStyle";
import Previous from "/icon-previous.svg";
import Next from "/icon-next.svg";

const Picture: React.FC = () => {
  const photos = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  return (
    <>
      <ProductPictureChangeContainer>
        <LeftArrowContainer>
          <Arrow src={Previous} alt="Left arrow" />
        </LeftArrowContainer>
        <RightArrowContainer>
          <Arrow src={Next} alt="Right arrow" />
        </RightArrowContainer>
        <ProductPicture src={photos[0]} alt="Photo" />
      </ProductPictureChangeContainer>
    </>
  );
};

export default Picture;
