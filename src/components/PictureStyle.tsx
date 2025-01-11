import styled from "styled-components";

export const ProductPictureChangeContainer = styled.div`
  margin-top: 2.8rem;
  position: relative;
  max-width: 100%;
  text-align: center;
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

export const LeftArrowContainer = styled.div<{ zoomIn: boolean }>`
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
    display: ${({ zoomIn }) => (zoomIn ? "flex" : "none")};
  }
`;

export const RightArrowContainer = styled.div<{ zoomIn: boolean }>`
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
    display: ${({ zoomIn }) => (zoomIn ? "flex" : "none")};
  }
`;

export const Arrow = styled.img`
  width: 0.6rem;
  height: 1.2rem;
`;

export const ThumbnailPicturesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.1rem;
`;

export const ThumbnailPicture = styled.img`
  width: 8.8rem;
  height: 8.8rem;
  border-radius: 10px;
`;
