import React, { useState } from "react";

export const Galeria = ({ imagenes }) => {
  const [images, setImages] = useState(imagenes);

  const [mainImage, setMainImage] = useState(images[0]);

  const handleThumbnailClick = (thumbnail) => {
    const updatedImages = [...images];
    const selectedIndex = updatedImages.indexOf(thumbnail);
    updatedImages[selectedIndex] = mainImage;
    updatedImages[0] = thumbnail;
    setImages(updatedImages);
    setMainImage(thumbnail);
  };
  return (
    <div className="flex flex-col w-full h-full md:h-[70vh] gap-4 py-4">
      <div className="mx-auto cursor-pointer w-full md:w-1/2 h-[30vh] overflow-hidden md:h-[70%] rounded-md ">
        <img loading="lazy" src={mainImage} className="w-full h-full " alt="Large Image" />
      </div>

      <div className="mx-auto flex w-full md:w-[80%] gap-x-3 rounded-md  h-[30%]">
      
        {images.map((image, index) => {
          if (image !== mainImage) {
            return <div
            key={index}
            className="cursor-pointer w-full overflow-hidden h-full rounded-md"
          >
            <img
              className="w-full bg-cover bg-center h-full"
              src={image}
              loading="lazy"
              alt={`Imagen ${index + 1}`}
              onClick={() => handleThumbnailClick(image)}
            />
          </div>
          }
        })}
      </div>
    </div>
  );
};
