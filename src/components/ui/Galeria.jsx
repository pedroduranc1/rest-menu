import React, { useState, useRef, useEffect } from "react";
import { Skeleton } from "../../components/ui/skeleton";

const Galeria = ({ imagenes }) => {
  const [mainImage, setMainImage] = useState(null);
  const [Img1, setImg1] = useState(null)
  const [Img2, setImg2] = useState(null)
  const [Img3, setImg3] = useState(null)
  const [Img4, setImg4] = useState(null)

  const [loadingImageMain, setloadingImageMain] = useState(true);
  const [loading1, setloading1] = useState(true)
  const [loading2, setloading2] = useState(true)
  const [loading3, setloading3] = useState(true)
  const [loading4, setloading4] = useState(true)
  
  const handleChangeImage = (image) => {
    setMainImage(image)
    
  }

  useEffect(() => {
    setMainImage(imagenes[0]);
    setImg1(imagenes[1])
    setImg2(imagenes[2])
    setImg3(imagenes[3])
    setImg4(imagenes[4])
  }, [imagenes]);

  return (
    <div className="w-full h-[50vh] md:h-[70vh] ">
      <Skeleton className={`w-full ${!loadingImageMain ? "hidden" : "visible"} md:w-[45%] h-[30vh] md:h-[45vh] mx-auto cursor-pointer rounded-md`} />
      <img
        className={`w-full ${loadingImageMain ? "hidden" : "visible"} md:w-[45%] mx-auto cursor-pointer rounded-md`}
        src={mainImage}
        onLoad={() => setloadingImageMain(false)}
        alt="foto principal"
      />

      <div className="w-full md:w-[80%] flex gap-x-3 h-[10vh] md:h-[15vh] mt-[10%] md:mt-10 mx-auto rounded-md">
        <Skeleton className={`w-1/4 ${!loading1 ? "hidden" : "visible"} h-full  rounded-md`} />
        <div 
        onClick={()=>handleChangeImage(Img1)}
        className={`w-1/4 ${loading1 ? "hidden" : "visible"} h-full cursor-pointer bg-white overflow-hidden rounded-md`}>
          <img onLoad={()=> setloading1(false)} className="w-full h-full aspect-square" src={Img1} alt="imagen 1" />
        </div>
        <Skeleton className={`w-1/4 ${!loading2 ? "hidden" : "visible"} h-full rounded-md`} />
        <div 
        onClick={()=>handleChangeImage(Img2)}
        className={`w-1/4 ${loading2 ? "hidden" : "visible"} h-full cursor-pointer overflow-hidden bg-white rounded-md`}>
          <img onLoad={()=> setloading2(false)} className="w-full h-full aspect-square" src={Img2} alt="imagen 1" />
        </div>
        <Skeleton className={`w-1/4 ${!loading3 ? "hidden" : "visible"} h-full rounded-md`} />
        <div 
        onClick={()=>handleChangeImage(Img3)}
        className={`w-1/4 ${loading3 ? "hidden" : "visible"} h-full cursor-pointer overflow-hidden bg-white rounded-md`}>
          <img onLoad={()=> setloading3(false)} className="w-full h-full aspect-square" src={Img3} alt="imagen 1" />
        </div>
        <Skeleton className={`w-1/4 ${!loading4 ? "hidden" : "visible"} h-full rounded-md`} />
        <div 
        onClick={()=>handleChangeImage(Img4)}
        className={`w-1/4 ${loading4 ? "hidden" : "visible"} h-full cursor-pointer overflow-hidden bg-white rounded-md`}>
          <img onLoad={()=> setloading4(false)} className="w-full h-full aspect-square" src={Img4} alt="imagen 1" />
        </div>
      </div>
    </div>
  );
};

export default Galeria;
