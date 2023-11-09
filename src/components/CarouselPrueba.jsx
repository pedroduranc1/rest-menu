import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CarouselCard } from "./ui/CarouselCard";

export const Carousel = ({ leng, option }) => {
  const [isScrollingLeft, setIsScrollingLeft] = useState(false);
  const [isScrollingRight, setIsScrollingRight] = useState(false);
  const carousel = useRef(null);
  const [isFinish, setisFinish] = useState(false)

  const [TiposDePlato, setTiposDePlato] = useState([
    "botanas",
    "platillos",
    "tacos",
    "allgrill",
    "postres",
    "salsas",
    "bebidas",
    "mixologias",
    "vinos",
    "destilados",
    "extras",
  ]);

  const setTipoDePlato = () => {
    let arrayPlatos = [];
    if (leng == "es") {
      arrayPlatos = [
        "botanas",
        "platillos",
        "tacos",
        "allgrill",
        "postres",
        "salsas",
        "bebidas",
        "mixologias",
        "vinos",
        "destilados",
        "extras",
      ];
      setTiposDePlato(arrayPlatos);
    } else {
      arrayPlatos = [
        "appetizers",
        "maincourses",
        "tacos",
        "allgrill",
        "desserts",
        "sauces",
        "drinks",
        "mixologies",
        "wines",
        "distillates",
        "extras",
      ];
      setTiposDePlato(arrayPlatos);
    }
  };

  useEffect(() => {
    setTipoDePlato();
  }, [leng, option]);

  useEffect(() => {
    const container = carousel.current;
    const isAtScrollEnd =
      container.scrollLeft + container.offsetWidth >= container.scrollWidth;

      setisFinish(isAtScrollEnd)
      if (isAtScrollEnd) {
        // Llegaste al final del carrusel, vuelve al principio
        container.scrollLeft = 0;
      }
    const scrollInterval = setInterval(() => {
      if (isScrollingLeft && container.scrollLeft > 0) {
        container.scrollLeft -= 15;
      } else if (isScrollingRight && !isAtScrollEnd) {
        container.scrollLeft += 15;
      }
    }, 100);
    return () => {
      clearInterval(scrollInterval);
    };
  }, [isScrollingLeft, isScrollingRight,isFinish]);

  return (
    <div className="w-full bg-slate-100 my-4 flex h-[15vh]">
      <div
        onMouseEnter={() => setIsScrollingLeft(true)}
        onMouseLeave={() => setIsScrollingLeft(false)}
        className="w-[10%] hidden cursor-pointer h-full md:flex justify-center items-center bg-slate-100"
      >
        <ChevronLeft size={35} />
      </div>

      <div
        ref={carousel}
        className="w-full flex scroll-smooth transition-all items-center overflow-x-auto md:overflow-hidden  "
      >
        <div className="flex gap-x-1 transition-all w-fit">
          {TiposDePlato.map((item, index) => (
            <CarouselCard key={index} leng={leng} ruta={option} title={item} />
          ))}
          {TiposDePlato.map((item, index) => (
            <CarouselCard key={index} leng={leng} ruta={option} title={item} />
          ))}
        </div>
      </div>

      <div
        onMouseEnter={() => setIsScrollingRight(true)}
        onMouseLeave={() => setIsScrollingRight(false)}
        className="w-[10%] cursor-pointer h-full hidden md:flex justify-center items-center bg-slate-100"
      >
        <ChevronRight size={35} />
      </div>
    </div>
  );
};

export default Carousel;


