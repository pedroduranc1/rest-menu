import React, { useEffect, useState } from "react";
import { Skeleton } from "./skeleton";

export const Image = ({ image, phoneHeight,Normalheight,width,handleChangeImage }) => {
  const [Imagen, setImagen] = useState(null);
  const [loadingImage, setloadingImage] = useState(true);

  useEffect(() => {
    setImagen(image)
  }, [image])
  

  return (
    <>
      <Skeleton
        className={`w-full ${
          !loadingImage ? "hidden" : "visible"
        } md:w-[${width}vw] h-[${phoneHeight}vh] md:h-[${Normalheight}vh] mx-auto cursor-pointer rounded-md`}
      />

      <div
        onClick={()=>handleChangeImage(Imagen)}
        className={`w-full ${
          loadingImage ? "hidden" : "visible"
        } md:w-[${width}vw] h-[${phoneHeight}vh] md:h-[${Normalheight}vh] mx-auto cursor-pointer rounded-md`}
      >
        <img
          className={`w-full h-full  mx-auto cursor-pointer rounded-md`}
          src={Imagen}
          onLoad={() => setloadingImage(false)}
          alt="foto principal"
        />
      </div>
    </>
  );
};
