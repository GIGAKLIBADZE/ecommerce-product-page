const Picture: React.FC = () => {
  const photos = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  return (
    <>
      <div>
        <img src={photos[0]} alt="Photo" />
      </div>
    </>
  );
};

export default Picture;
