import {
  ProductPicture,
  ProductPictureChangeContainer,
  LeftArrowContainer,
  RightArrowContainer,
  Arrow,
} from "../components/PictureStyle";
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
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: "50rem",
            height: "30rem",
            marginInline: "auto",
          }}
        >
          <ProductPicture src={photos[0]} alt="Photo" />
          <LeftArrowContainer>
            <Arrow src={Previous} alt="Left arrow" />
          </LeftArrowContainer>
          <RightArrowContainer>
            <Arrow src={Next} alt="Right arrow" />
          </RightArrowContainer>
        </div>
        {/* <LeftArrowContainer>
          <Arrow src={Previous} alt="Left arrow" />
        </LeftArrowContainer>
        <RightArrowContainer>
          <Arrow src={Next} alt="Right arrow" />
        </RightArrowContainer> */}
        {/* <ProductPicture src={photos[0]} alt="Photo" /> */}
      </ProductPictureChangeContainer>
    </>
  );
};

export default Picture;
