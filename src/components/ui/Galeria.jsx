import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "../../components/ui/skeleton";

const Galeria = ({ imagenes }) => {
  // Inicializa mainImage solo si 'imagenes' está definido y tiene elementos.
  const [mainImage, setMainImage] = useState(null);
  const [Imagenes, setimagenes] = useState(null);
  const [shouldLoadImages, setShouldLoadImages] = useState(false);
  const imagesContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShouldLoadImages(true);
        }
      },
      { threshold: 0.5 }
    );

    if (imagesContainerRef.current) {
      observer.observe(imagesContainerRef.current);
    }

    return () => {
      if (imagesContainerRef.current) {
        observer.unobserve(imagesContainerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    setMainImage(imagenes[0]);
    setimagenes([imagenes[1], imagenes[2], imagenes[3], imagenes[4]]);
  }, [imagenes]);

  const handleThumbnailClick = (image) => {
    let imagesDown = [];
    imagenes.map((img) => {
      if (img != image) {
        imagesDown.push(img);
      }
    });
    setMainImage(image);
    setimagenes(imagesDown)
  };

  return (
    <div className="flex flex-col w-full h-full md:h-[70vh] gap-4 py-4">
      <div
        ref={imagesContainerRef}
        className="mx-auto cursor-pointer w-full md:w-1/2 h-[30vh] overflow-hidden md:h-[70%] rounded-md "
      >
        {shouldLoadImages && mainImage ? (
          <img
            loading="lazy"
            src={mainImage}
            className="w-full h-full "
            alt="Large Image"
          />
        ) : (
          <Skeleton className="h-full w-full rounded-md" />
        )}
      </div>

      <div className="mx-auto flex w-full md:w-[80%] gap-x-3 rounded-md h-[30%]">
        {Imagenes?.map((image, index) => {
          if (image !== mainImage) {
            return (
              <div
                key={index}
                className="cursor-pointer w-full overflow-hidden h-full rounded-md"
              >
                {shouldLoadImages ? (
                  <img
                    className="w-full bg-cover bg-center h-full"
                    src={image}
                    loading="lazy"
                    alt={`Imagen ${index + 1}`}
                    onClick={() => handleThumbnailClick(image)}
                  />
                ) : (
                  <Skeleton className="h-full w-full rounded-md" />
                )}
              </div>
            );
          } else {
            return null; // No renderizar la imagen principal en las miniaturas
          }
        })}
      </div>
    </div>
  );
};

export default Galeria;
