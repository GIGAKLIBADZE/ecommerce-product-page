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
import { useState } from "react";

const Picture: React.FC = () => {
  const photos = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  const desktop = useMediaQuery("(min-width: 90rem)");

  const [zoomIn, setZoomIn] = useState<boolean>(false);
  const [currentPicture, setCurrentPicture] = useState<number>(0);

  return (
    <>
      <ProductPictureChangeContainer
        onClick={() => (
          <div
            style={{
              background: "black",
              width: "20rem",
              height: "20rem",
              zIndex: "99rem",
            }}
          >
            Hello
          </div>
        )}
      >
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
              gap: "3.2rem",
            }}
          >
            <ProductPicture
              src={photos[currentPicture]}
              alt="Photo"
              onClick={() => setZoomIn(true)}
            />
            {desktop ? (
              <ThumbnailPicturesContainer>
                <ThumbnailPicture src={photos[0]} alt="Thumbnail photo" />{" "}
                <ThumbnailPicture src={photos[1]} alt="Thumbnail photo" />{" "}
                <ThumbnailPicture src={photos[2]} alt="Thumbnail photo" />
                <ThumbnailPicture src={photos[3]} alt="Thumbnail photo" />
              </ThumbnailPicturesContainer>
            ) : null}
          </div>
          <LeftArrowContainer
            onClick={() => {
              {
                currentPicture < 1
                  ? setCurrentPicture(3)
                  : setCurrentPicture(currentPicture - 1);
              }
            }}
          >
            <Arrow src={Previous} alt="Left arrow" />
          </LeftArrowContainer>
          <RightArrowContainer
            onClick={() => {
              {
                currentPicture < 3
                  ? setCurrentPicture(currentPicture + 1)
                  : setCurrentPicture(0);
              }
            }}
          >
            <Arrow src={Next} alt="Right arrow" />
          </RightArrowContainer>
        </div>
      </ProductPictureChangeContainer>
      {zoomIn && desktop ? (
        <div
          style={{
            position: "fixed",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            width: "100vw",
            minHeight: "100vh",
            top: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "4rem",
            zIndex: "1",
          }}
          onClick={() => setZoomIn(false)}
        >
          <ProductPicture
            onClick={(e) => e.stopPropagation()}
            src={photos[0]}
            alt="Photo"
            style={{ marginTop: "13.3rem" }}
          />
          <ThumbnailPicturesContainer onClick={(e) => e.stopPropagation()}>
            <ThumbnailPicture src={photos[0]} alt="Thumbnail photo" />{" "}
            <ThumbnailPicture src={photos[1]} alt="Thumbnail photo" />{" "}
            <ThumbnailPicture src={photos[2]} alt="Thumbnail photo" />
            <ThumbnailPicture src={photos[3]} alt="Thumbnail photo" />
          </ThumbnailPicturesContainer>
        </div>
      ) : null}
    </>
  );
};

export default Picture;
