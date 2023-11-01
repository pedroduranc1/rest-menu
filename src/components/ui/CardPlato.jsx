import React from "react";
import { Separador } from "./Separador";

export const CardPlato = ({nombre,descripcion,info}) => {
  return (
    <>
      {/* CARD PLATO */}
      <div className="my-7 w-full h-fit ">
        <div className="w-full h-fit ">
          {/* CONTENT  */}
          <div className="w-full flex justify-between items-center">
            <div>
              <h2 className="uppercase text-color-secondary font-semibold text-2xl">
                {nombre} ({info})
              </h2>
            </div>
            <div>
              <span className="uppercase text-color-secondary font-semibold text-2xl">
                $200
              </span>
            </div>
          </div>

          {/* DESCRIPCION */}
          <p className="mt-5 text-xl font-semibold">
            {descripcion}
          </p>
          <Separador />
        </div>
      </div>
    </>
  );
};
