import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "../../components/ui/skeleton";

const Galeria = ({ imagenes }) => {
  const [mainImage, setMainImage] = useState("");
  const [loadedImages, setLoadedImages] = useState({});
  const imagesContainerRef = useRef(null);

  // Establecer la imagen principal al iniciar y cuando cambien las imágenes.
  useEffect(() => {
    if (imagenes && imagenes.length > 0) {
      setMainImage(imagenes[0]);
      setLoadedImages(imagenes.reduce((acc, img) => ({ ...acc, [img]: false }), {}));
    }
  }, [imagenes]);

  // Este efecto maneja el 'IntersectionObserver' para la carga perezosa
  useEffect(() => {
    if (imagesContainerRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          if (entry.isIntersecting) {
            setLoadedImages(current => {
              return { ...current, [mainImage]: false };
            });
          }
        },
        { threshold: 0.5 }
      );

      observer.observe(imagesContainerRef.current);

      return () => {
        observer.unobserve(imagesContainerRef.current);
      };
    }
  }, [mainImage]);

  const handleImageLoaded = (imageSrc) => {
    setLoadedImages((prevLoadedImages) => ({
      ...prevLoadedImages,
      [imageSrc]: true
    }));
  };

  const handleThumbnailClick = (imageSrc) => {
    setMainImage(imageSrc);
    if (!loadedImages[imageSrc]) {
      // Si la imagen de la miniatura aún no se ha cargado, la marcamos para cargar
      setLoadedImages(prev => ({ ...prev, [imageSrc]: false }));
    }
  };

  return (
    <div className="flex flex-col w-full h-full md:h-[70vh] gap-4 py-4">
      <div
        ref={imagesContainerRef}
        className="mx-auto cursor-pointer w-full md:w-1/2 h-[30vh] overflow-hidden md:h-[70%] rounded-md"
      >
        {!loadedImages[mainImage] ? (
          <Skeleton className="h-full w-full rounded-md" />
        ) : (
          <img
            src={mainImage}
            alt="Imagen destacada"
            className="w-full h-full object-cover"
            onLoad={() => handleImageLoaded(mainImage)}
          />
        )}
      </div>

      <div className="mx-auto flex w-full md:w-[80%] gap-x-3 rounded-md h-[30%]">
        {imagenes.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer w-full overflow-hidden h-full rounded-md"
            onClick={() => handleThumbnailClick(image)}
          >
            {!loadedImages[image] ? (
              <Skeleton className="w-full h-full rounded-md" />
            ) : (
              <img
                src={image}
                alt={`Imagen ${index + 1}`}
                className="w-full h-full object-cover"
                onLoad={() => handleImageLoaded(image)}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeria;
