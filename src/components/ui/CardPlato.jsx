import React from "react";
import { Separador } from "./Separador";
import { Link } from "react-router-dom";

export const CardPlato = ({ nombre, descripcion, info,leng }) => {
  return (
    <>
      {/* CARD PLATO */}
      <div className="my-7 w-full h-fit ">
        <Link to={`/${leng}`} className="w-full cursor-pointer h-fit ">
          {/* CONTENT  */}
          <div className="w-full flex justify-between items-center">
            <div className="flex  md:gap-x-3">
              <h2 className="uppercase w-fit font-bold text-color-secondary text-[20px]">
                {nombre}
                <span className="text-gray-500 text-[15px] lowercase ml-2">({info?.toLowerCase()})</span>
              </h2>
              
              
            </div>
            <div>
              <span className="uppercase text-color-secondary font-semibold text-2xl">
                $200
              </span>
            </div>
          </div>

          {/* DESCRIPCION */}
          <p className="mt-5 w-[80%] first-letter:uppercase text-[15px] font-semibold">{descripcion}</p>
          <Separador />
        </Link>
      </div>
    </>
  );
};
