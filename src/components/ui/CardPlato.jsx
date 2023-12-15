import React, { Suspense } from "react";

//LAZY

export const CardPlato = ({
  nombre,
  descripcion,
  price,
  leng,
  imagenes,
  extra,
  isDestilado
}) => {
  return (
    <>
      <div className="my-7 w-full h-fit ">
        <div to={`/${leng}`} className="w-full cursor-pointer h-fit ">
          {/* CONTENT  */}
          <div className="w-full flex relative justify-between items-center">
            <div className="flex  md:gap-x-3">
              <h2 className="uppercase w-fit font-bold text-color-secondary text-[20px]">
                {nombre}
              </h2>
            </div>
            {
              !isDestilado && (
                <h2 className="text-2xl">
                  {price}$
                </h2>
              )
            }
          </div>

          {extra && (
            <p className=" w-[80%]  first-letter:uppercase text-[15px] text-color-secondary ">
              {extra}
            </p>
          )}

          {/* DESCRIPCION */}
          {
            !isDestilado && (
              <p className="mt-5 w-[80%] first-letter:uppercase text-[15px] text-color-secondary ">
                {descripcion}
              </p>
            )
          }
        </div>
      </div>
    </>
  );
};
