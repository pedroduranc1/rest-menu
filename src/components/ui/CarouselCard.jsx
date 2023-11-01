import { Salad } from "lucide-react";
import React, { useEffect, useState } from "react";
import Botanas from "../../assets/IconosBotanas.svg";
import Platillos from "../../assets/IconosPlatillos.svg";
import Tacos from "../../assets/IconosTacos.svg";
import AllGrill from "../../assets/Iconosalgrill.svg";
import Postres from "../../assets/IconosPostres.svg";
import { Link } from "react-router-dom";

export const CarouselCard = ({ focussed, title, ruta }) => {
  const [Ruta, setRuta] = useState(null);

  useEffect(() => {
    if (ruta === undefined) {
      setRuta("botanas");
    } else {
      setRuta(ruta);
    }
  }, [ruta]);

  const ImagenCard = () => {
    let imagen 
    switch (title) {
      case "botanas":
        imagen = Botanas
        break;
      case "platillos":
        imagen = Platillos
        break;
      case "tacos":
        imagen = Tacos
        break;
      case "allgrill":
        imagen = AllGrill
        break;
      case "postres":
        imagen = Postres
        break;
    }

    return imagen
  };


  return (
    <>
      {/* CARD OPTION */}
      <Link
        to={`/es/${title}`}
        className="bg-white flex flex-col justify-center items-center w-[20%] h-full"
      >
        <div className="w-full h-full flex gap-y-1 flex-col justify-center items-center">
          <img
            className={`${
              Ruta === title ? "bg-color-secondary" : "bg-color-primary"
            } w-[80px] rounded-full`}
            src={ImagenCard()}
            alt=""
          />
          <h3 className="font-bold text-xl text-color-secondary mb-1 uppercase">
            {title}
          </h3>
        </div>
      </Link>
    </>
  );
};
