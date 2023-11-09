import "../../App.css";
import { SelectedOption } from "./SelectedOption/SelectedOption";
import fondo from "../../assets/staticImages/fondo.jpg";
import logo from "../../assets/staticImages/Logo- EL HUAJUCO (Blanco).webp";
import { useEffect, useRef, useState } from "react";
import { Footer } from "../Footer";
import { Carousel } from "../CarouselPrueba";

export const App = ({ leng, option }) => {
  const headerRef = useRef(null);
  const optionsRef = useRef(null);
  const [headerH, setheaderH] = useState(null);
  const [optionsH, setOptionsH] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);  

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const headerElement = headerRef.current;
    const optionsElement = optionsRef.current;
  
    if (headerElement && optionsElement) {
      const headerHeight = headerElement.getBoundingClientRect().height;
      
      // Diferir el cálculo para dar tiempo a que los estilos de Tailwind se apliquen completamente.
      setTimeout(() => {
        const optionsHeight = optionsElement.clientHeight;
        const porcen = headerHeight * 0.15;
        setheaderH(headerHeight - porcen);
        setOptionsH(optionsHeight);
      }, 0);
    }
  }, [screenWidth]);
  
  useEffect(() => {
    const handleScroll = () => {
      // Obtén la posición vertical actual del scroll
      const scrollY = window.scrollY;

      // Define la posición en la que deseas que el elemento se vuelva fijo (300px en este caso)
      const threshold = 150;

      // Comprueba si la posición actual del scroll supera el umbral
      if (scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Agrega un event listener para el evento scroll
    window.addEventListener("scroll", handleScroll);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-100 h-full">
      {/* imagen logo */}
      <div
        ref={headerRef}
        className={`w-full h-fit md:h-fit bg-center bg-cover flex flex-col bg-no-repeat justify-center items-center`}
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <img src={logo} className="w-[70%] md:w-[350px]" alt="" />
      </div>
      <div
        ref={optionsRef}
        className={`transition-all  sticky inset-0 px-[5%] md:px-0 md:w-[50%] mx-auto h-fit`}
      >
        <Carousel leng={leng} option={option}/>
      </div>
      {/* Content */}
      <div className={`w-full  px-[5%] md:px-0 md:w-[40%] mx-auto h-fit`}>
        <SelectedOption leng={leng} option={option} />
      </div>
      <Footer leng={leng}/>
    </div>
  );
};
