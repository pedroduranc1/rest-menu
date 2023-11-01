import { Salad } from "lucide-react";
import React, { useEffect, useState } from "react";
import Botanas from "../../assets/IconosBotanas.svg";
import Platillos from "../../assets/IconosPlatillos.svg";
import Tacos from "../../assets/IconosTacos.svg";
import AllGrill from "../../assets/Iconosalgrill.svg";
import Postres from "../../assets/IconosPostres.svg";
import { Link } from "react-router-dom";

export const CarouselCard = ({ leng, title, ruta }) => {
  const [Ruta, setRuta] = useState(null);

  useEffect(() => {
    if (ruta === undefined) {
      if (leng === "es") {
        setRuta("botanas");
      } else {
        setRuta("appetizers");
      }
    } else {
      setRuta(ruta);
    }
  }, [ruta]);

  const ImagenCard = () => {
    let imagen;
    if(leng === 'es'){
      switch (title) {
        case "botanas":
          imagen = Botanas;
          break;
        case "platillos":
          imagen = Platillos;
          break;
        case "tacos":
          imagen = Tacos;
          break;
        case "allgrill":
          imagen = AllGrill;
          break;
        case "postres":
          imagen = Postres;
          break;
      }
    }else{
      switch (title) {
        case "appetizers":
          imagen = Botanas;
          break;
        case "maincourses":
          imagen = Platillos;
          break;
        case "tacos":
          imagen = Tacos;
          break;
        case "allgrill":
          imagen = AllGrill;
          break;
        case "desserts":
          imagen = Postres;
          break;
      }
    }
    

    return imagen;
  };

  return (
    <>
      {/* CARD OPTION */}
      <Link
        to={`/${leng}/${title}`}
        className=" flex flex-col justify-center items-center w-[20%] h-full"
      >
        <div className="w-full h-full flex gap-y-1 flex-col justify-center items-center">
          <img
            className={`${
              Ruta === title ? "bg-color-secondary" : "bg-color-primary"
            } w-[60px] rounded-full`}
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
