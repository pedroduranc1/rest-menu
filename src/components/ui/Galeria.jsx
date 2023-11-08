import React, { useEffect, useState } from "react";
import { Image } from "./Image";

const Galeria = ({ imagenes }) => {
  const [MainImage, setMainImage] = useState(null)
  const handleChangeImage = (image) => {
    setMainImage(image)
  }

  useEffect(() => {
    setMainImage(imagenes[0])
  }, [imagenes])
  

  return (
    <div className="w-full h-[50vh] md:h-[70vh] ">
      <div className="md:w-[80%] lg:w-[45%] mx-auto">
        <Image
          image={MainImage}
          width={45}
          phoneHeight={30}
          Normalheight={45}
          handleChangeImage={handleChangeImage}
        />
      </div>

      <div className="w-full md:w-[80%] grid grid-cols-4 gap-x-3 h-[15vh] md:h-[20vh] mt-[10%] md:mt-10 mx-auto rounded-md">
        <Image
          image={imagenes[1]}
          width={"25"}
          phoneHeight={15}
          Normalheight={20}
          handleChangeImage={handleChangeImage}
        />
        <Image
          image={imagenes[2]}
          width={"25"}
          phoneHeight={15}
          Normalheight={20}
          handleChangeImage={handleChangeImage}
        />
        <Image
          image={imagenes[3]}
          width={"25"}
          phoneHeight={15}
          Normalheight={20}
          handleChangeImage={handleChangeImage}
        />
        <Image
          image={imagenes[4]}
          width={"25"}
          phoneHeight={15}
          Normalheight={20}
          handleChangeImage={handleChangeImage}
        />
      </div>
    </div>
  );
};

export default Galeria;
