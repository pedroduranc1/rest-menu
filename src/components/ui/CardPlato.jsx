import React from "react";
import { Separador } from "./Separador";
import { Link } from "react-router-dom";

export const CardPlato = ({ nombre, descripcion, price,leng }) => {
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
              </h2>
              
              
            </div>
            <div>
              <span className="uppercase text-color-secondary font-semibold text-2xl">
                ${price}
              </span>
            </div>
          </div>

          {/* DESCRIPCION */}
          <p className="mt-5 w-[80%] first-letter:uppercase text-[15px] text-color-secondary ">{descripcion}</p>
          <Separador />
        </Link>
      </div>
    </>
  );
};
