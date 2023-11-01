import { ChevronLeft, ChevronRight, Salad } from "lucide-react";
import React from "react";
import { CarouselCard } from "./CarouselCard";
import { useParams } from "react-router-dom";

export const CarouselOptions = () => {
  const {option} = useParams()
  return (
    <>
      {/* CAROUSSEL TIPOS DE COMIDA */}
      <div className="w-full relative md:px-[7%] h-[20vh] ">
        <div className="absolute flex justify-center items-center -left-5 md:left-0 top-0 h-full">
          <ChevronLeft size={35} />
        </div>
        <div className="w-full h-full flex ">
          
          <CarouselCard ruta={option} title={'botanas'}/>
          <CarouselCard ruta={option} title={'platillos'}/>
          <CarouselCard ruta={option} title={'tacos'}/>
          <CarouselCard ruta={option} title={'allgrill'}/>
          <CarouselCard ruta={option} title={'postres'}/>
        </div>
        <div className="absolute flex justify-center items-center -right-5 md:right-0 top-0 h-full">
          <ChevronRight size={35} />
        </div>
      </div>
    </>
  );
};
