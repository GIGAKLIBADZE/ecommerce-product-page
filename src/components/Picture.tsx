import {
  ProductPicture,
  ProductPictureChangeContainer,
  LeftArrowContainer,
  RightArrowContainer,
  Arrow,
  ThumbnailPicture,
  ThumbnailPicturesContainer,
  OuterProductPictureChangeContainer,
  InnerProductPictureChangeContainer,
  ZoomedContainer,
  ZoomedInnerContainer,
  Close,
  SingleThumbnailPictureContainer,
} from "../components/PictureStyle";
import Previous from "/icon-previous.svg";
import Next from "/icon-next.svg";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import Cancel from "/icon-close.svg";

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
      <ProductPictureChangeContainer>
        <OuterProductPictureChangeContainer>
          <InnerProductPictureChangeContainer>
            <ProductPicture
              src={photos[currentPicture]}
              alt="Photo"
              onClick={() => setZoomIn(true)}
            />
            {desktop ? (
              <ThumbnailPicturesContainer>
                <SingleThumbnailPictureContainer
                  style={{
                    border:
                      currentPicture === 0 ? "solid 0.2rem #ff7e1b" : "none",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <ThumbnailPicture
                    src={photos[0]}
                    alt="Thumbnail photo 1"
                    onClick={() => setCurrentPicture(0)}
                    className={
                      currentPicture === 0
                        ? "selected-thumbnail-picture"
                        : "thumbnail-picture"
                    }
                    style={{
                      borderRadius: "8px",
                    }}
                  />{" "}
                </SingleThumbnailPictureContainer>
                <SingleThumbnailPictureContainer
                  style={{
                    border:
                      currentPicture === 1 ? "solid 0.2rem #ff7e1b" : "none",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <ThumbnailPicture
                    src={photos[1]}
                    alt="Thumbnail photo 2"
                    onClick={() => setCurrentPicture(1)}
                    className={
                      currentPicture === 1
                        ? "selected-thumbnail-picture"
                        : "thumbnail-picture"
                    }
                    style={{
                      borderRadius: "8px",
                    }}
                  />{" "}
                </SingleThumbnailPictureContainer>
                <SingleThumbnailPictureContainer
                  style={{
                    border:
                      currentPicture === 2 ? "solid 0.2rem #ff7e1b" : "none",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <ThumbnailPicture
                    src={photos[2]}
                    alt="Thumbnail photo 3"
                    onClick={() => setCurrentPicture(2)}
                    className={
                      currentPicture === 2
                        ? "selected-thumbnail-picture"
                        : "thumbnail-picture"
                    }
                    style={{
                      borderRadius: "8px",
                    }}
                  />{" "}
                </SingleThumbnailPictureContainer>
                <SingleThumbnailPictureContainer
                  style={{
                    border:
                      currentPicture === 3 ? "solid 0.2rem #ff7e1b" : "none",
                    backgroundColor: "#ffffff",
                  }}
                >
                  <ThumbnailPicture
                    src={photos[3]}
                    alt="Thumbnail photo 4"
                    onClick={() => setCurrentPicture(3)}
                    className={
                      currentPicture === 3
                        ? "selected-thumbnail-picture"
                        : "thumbnail-picture"
                    }
                    style={{
                      borderRadius: "8px",
                    }}
                  />{" "}
                </SingleThumbnailPictureContainer>
              </ThumbnailPicturesContainer>
            ) : null}
          </InnerProductPictureChangeContainer>
          <LeftArrowContainer
            $zoomIn={zoomIn}
            onClick={() => {
              {
                currentPicture < 1
                  ? setCurrentPicture(3)
                  : setCurrentPicture(currentPicture - 1);
              }
            }}
            style={{ display: desktop ? "none" : "flex" }}
          >
            <Arrow src={Previous} alt="Left arrow" />
          </LeftArrowContainer>
          <RightArrowContainer
            $zoomIn={zoomIn}
            onClick={() => {
              {
                currentPicture < 3
                  ? setCurrentPicture(currentPicture + 1)
                  : setCurrentPicture(0);
              }
            }}
            style={{ display: desktop ? "none" : "flex" }}
          >
            <Arrow src={Next} alt="Right arrow" />
          </RightArrowContainer>
        </OuterProductPictureChangeContainer>
      </ProductPictureChangeContainer>
      {zoomIn && desktop ? (
        <ZoomedContainer>
          <ZoomedInnerContainer>
            <Close
              src={Cancel}
              alt="Cancel"
              onClick={() => setZoomIn(false)}
              className="close"
            />
            <div
              style={{
                position: "relative",
              }}
            >
              <LeftArrowContainer
                className="arrow"
                $zoomIn={zoomIn}
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
                className="arrow"
                $zoomIn={zoomIn}
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
              <ProductPicture
                style={{ position: "relative", marginTop: "2.4rem" }}
                src={photos[currentPicture]}
                alt="Photo"
              />
            </div>
            <ThumbnailPicturesContainer style={{ marginTop: "4rem" }}>
              <SingleThumbnailPictureContainer
                style={{
                  border:
                    currentPicture === 0 ? "solid 0.2rem #ff7e1b" : "none",
                  backgroundColor: "#ffffff",
                }}
              >
                <ThumbnailPicture
                  src={photos[0]}
                  alt="Thumbnail photo 1"
                  onClick={() => setCurrentPicture(0)}
                  className={
                    currentPicture === 0
                      ? "selected-thumbnail-picture"
                      : "thumbnail-picture"
                  }
                  style={{
                    borderRadius: "8px",
                  }}
                />{" "}
              </SingleThumbnailPictureContainer>
              <SingleThumbnailPictureContainer
                style={{
                  border:
                    currentPicture === 1 ? "solid 0.2rem #ff7e1b" : "none",
                  backgroundColor: "#ffffff",
                }}
              >
                <ThumbnailPicture
                  src={photos[1]}
                  alt="Thumbnail photo 2"
                  onClick={() => setCurrentPicture(1)}
                  className={
                    currentPicture === 1
                      ? "selected-thumbnail-picture"
                      : "thumbnail-picture"
                  }
                  style={{
                    borderRadius: "8px",
                  }}
                />{" "}
              </SingleThumbnailPictureContainer>
              <SingleThumbnailPictureContainer
                style={{
                  border:
                    currentPicture === 2 ? "solid 0.2rem #ff7e1b" : "none",
                  backgroundColor: "#ffffff",
                }}
              >
                <ThumbnailPicture
                  src={photos[2]}
                  alt="Thumbnail photo 3"
                  onClick={() => setCurrentPicture(2)}
                  className={
                    currentPicture === 2
                      ? "selected-thumbnail-picture"
                      : "thumbnail-picture"
                  }
                  style={{
                    borderRadius: "8px",
                  }}
                />{" "}
              </SingleThumbnailPictureContainer>
              <SingleThumbnailPictureContainer
                style={{
                  border:
                    currentPicture === 3 ? "solid 0.2rem #ff7e1b" : "none",
                  backgroundColor: "#ffffff",
                }}
              >
                <ThumbnailPicture
                  src={photos[3]}
                  alt="Thumbnail photo 4"
                  onClick={() => setCurrentPicture(3)}
                  className={
                    currentPicture === 3
                      ? "selected-thumbnail-picture"
                      : "thumbnail-picture"
                  }
                  style={{
                    borderRadius: "8px",
                  }}
                />{" "}
              </SingleThumbnailPictureContainer>
            </ThumbnailPicturesContainer>
          </ZoomedInnerContainer>
        </ZoomedContainer>
      ) : null}
    </>
  );
};

export default Picture;
