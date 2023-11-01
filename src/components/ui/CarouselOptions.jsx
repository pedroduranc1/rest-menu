import { ChevronLeft, ChevronRight, Salad } from "lucide-react";
import React, { useEffect, useState } from "react";
import { CarouselCard } from "./CarouselCard";

export const CarouselOptions = ({ leng, option }) => {
  const [TiposDePlato, setTiposDePlato] = useState([
    'botanas',
    'platillos',
    'tacos',
    'allgrill',
    'postres'
  ]);

  const setTipoDePlato = () => {
    let arrayPlatos = [];
    if (leng == "es") {
      arrayPlatos = [
        'botanas',
        'platillos',
        'tacos',
        'allgrill',
        'postres'
      ]
      setTiposDePlato(arrayPlatos);
    } else {
      arrayPlatos = [
        'appetizers',
        'maincourses',
        'tacos',
        'allgrill',
        'desserts'
      ]
      setTiposDePlato(arrayPlatos);
    }
  };

  useEffect(() => {
    setTipoDePlato()
  }, [leng, option]);


  return (
    <>
      {/* CAROUSSEL TIPOS DE COMIDA */}
      <div className="w-full  relative md:px-[7%] my-5 rounded-full h-[15vh] ">
        <div className="absolute flex justify-center items-center -left-5 md:left-0 top-0 h-full">
          <ChevronLeft size={35} />
        </div>
        <div className="w-full h-full flex ">
          <CarouselCard leng={leng} ruta={option} title={TiposDePlato[0]} />
          <CarouselCard leng={leng} ruta={option} title={TiposDePlato[1]} />
          <CarouselCard leng={leng} ruta={option} title={TiposDePlato[2]} />
          <CarouselCard leng={leng} ruta={option} title={TiposDePlato[3]} />
          <CarouselCard leng={leng} ruta={option} title={TiposDePlato[4]} />
        </div>
        <div className="absolute flex justify-center items-center -right-5 md:right-0 top-0 h-full">
          <ChevronRight size={35} />
        </div>
      </div>
    </>
  );
};
