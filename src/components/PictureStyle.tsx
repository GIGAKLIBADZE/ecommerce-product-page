import styled from "styled-components";

export const ProductPictureChangeContainer = styled.div`
  margin-top: 2.8rem;
  position: relative;
  max-width: 100%;
  text-align: center;
`;

export const OuterProductPictureChangeContainer = styled.div`
  position: relative;
  max-width: 50rem;
  margin-inline: auto;
`;

export const InnerProductPictureChangeContainer = styled.div`
  height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3.2rem;
`;

export const ProductPicture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;

  @media (min-width: 90rem) {
    width: 44.5rem;
    height: 44.5rem;
    border-radius: 15px;
  }
`;

export const LeftArrowContainer = styled.div<{ $zoomIn: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 1.6rem;
  transform: translateY(-50%);

  @media (min-width: 90rem) {
    display: ${({ $zoomIn }) => ($zoomIn ? "flex" : "none")};
    width: 5.6rem;
    height: 5.6rem;
    left: -2.8rem;
  }
`;

export const RightArrowContainer = styled.div<{ $zoomIn: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 90rem) {
    display: ${({ $zoomIn }) => ($zoomIn ? "flex" : "none")};
    width: 5.6rem;
    height: 5.6rem;
    right: -2.8rem;
  }
`;

export const Arrow = styled.img`
  width: 0.6rem;
  height: 1.2rem;

  @media (min-width: 90rem) {
    width: 0.8rem;
    height: 1.6rem;
  }
`;

export const ThumbnailPicturesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.1rem;
  margin-top: 4rem;
`;

export const ThumbnailPicture = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 10px;
`;

export const ZoomedContainer = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.75);
  width: 100vw;
  min-height: 100vh;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;

export const ZoomedInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 44.5rem;
`;

export const Close = styled.img`
  width: 2rem;
  height: 2rem;
  filter: brightness(0) invert(1);
  align-self: end;
`;
