import "../../App.css";
import { TextoPrincipal } from "../../components/ui/TextoPrincipal";
import { CarouselOptions } from "../../components/ui/CarouselOptions";
import { SelectedOption } from "./SelectedOption/SelectedOption";
import fondo from "../../assets/staticImages/Foto1.webp";
import logo from "../../assets/staticImages/Logo- EL HUAJUCO (Blanco).webp";
import { useEffect, useRef, useState } from "react";

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
        className={`w-full h-[30vh] md:h-[45vh] flex flex-col bg-bottom bg-cover bg-no-repeat bg-fixed justify-center items-center`}
        style={{ backgroundImage: `url(${fondo})` }}
      >
        <img src={logo} className="w-[70%] md:w-[350px]" alt="" />
      </div>
      <div
        ref={optionsRef}
        className={`transition-all sticky inset-0 px-[5%] md:px-0 md:w-[40%] mx-auto h-fit`}
      >
        <CarouselOptions leng={leng} option={option} />
      </div>
      {/* Content */}
      <div className={`w-full  px-[5%] md:px-0 md:w-[40%] mx-auto h-fit`}>
        <TextoPrincipal leng={leng} />
        <SelectedOption leng={leng} option={option} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-boowie font-bold text-2xl">Importante</h2>
        <ul className="w-full px-[5%] md:px-0 md:w-[40%] my-5 flex flex-col gap-y-3 mx-auto">
          <li>LAS MARCAS AQUÍ MOSTRADAS, SON PROPIEDAD DE SUS CREADORES Y USO EXCLUSIVAMENTE INFORMATIVO.</li>
          <li>LOS ALIMENTOS CRUDOS O POCOS COCIDOS INCREMENTAN EL RIESGO DE INTOXICACIONES E INFECCIONES EN PERSONAS SENSIBLES. EL CONSUMO DEL PLATILLO ES RESPONSABILIDAD DE QUIEN LO PIDE.</li>
          <li>EL GRAMAJE INDICADO EN CADA PLATILLO INFORMA LA PORCIÓN DE PROTEÍNA QUE CONTIENE.</li>
          <li>PRECIOS AL PÚBLICO EN M.N INCLUYEN I.V.A.</li>
          <li>LA PROPINA NO ES OBLIGATORIA.</li>
          <li>ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS. </li>
          <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
        </ul>
      </div>
    </div>
  );
};
