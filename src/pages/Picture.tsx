import {
  ProductPicture,
  ProductPictureChangeContainer,
  LeftArrowContainer,
  RightArrowContainer,
  Arrow,
  ThumbnailPicture,
  ThumbnailPicturesContainer,
} from "../components/PictureStyle";
import Previous from "/icon-previous.svg";
import Next from "/icon-next.svg";
import { useMediaQuery } from "@mui/material";

const Picture: React.FC = () => {
  const photos = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  const thumbnailPhotos = [
    "/image-product-1-thumbnail.jpg",
    "/image-product-2-thumbnail.jpg",
    "/image-product-3-thumbnail.jpg",
    "/image-product-4-thumbnail.jpg",
  ];

  const desktop = useMediaQuery("(min-width: 90rem)");

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
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "50rem",
              height: "30rem",
              marginInline: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <ProductPicture src={photos[0]} alt="Photo" />
            {desktop ? (
              <ThumbnailPicturesContainer>
                <ThumbnailPicture src={photos[0]} alt="Thumbnail photo" />{" "}
                <ThumbnailPicture src={photos[1]} alt="Thumbnail photo" />{" "}
                <ThumbnailPicture src={photos[2]} alt="Thumbnail photo" />
                <ThumbnailPicture src={photos[3]} alt="Thumbnail photo" />
              </ThumbnailPicturesContainer>
            ) : null}
          </div>
          <LeftArrowContainer>
            <Arrow src={Previous} alt="Left arrow" />
          </LeftArrowContainer>
          <RightArrowContainer>
            <Arrow src={Next} alt="Right arrow" />
          </RightArrowContainer>
        </div>
      </ProductPictureChangeContainer>
    </>
  );
};

export default Picture;
