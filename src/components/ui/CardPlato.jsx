import React from "react";
import { Separador } from "./Separador";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Galeria } from "./Galeria";

export const CardPlato = ({ nombre, descripcion, price, leng,imagenes }) => {
  return (
    <>
      {/* CARD PLATO */}
      <div className="my-7 w-full h-fit ">
        <Dialog>
          <DialogTrigger asChild>
            <div to={`/${leng}`} className="w-full cursor-pointer h-fit ">
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
              <p className="mt-5 w-[80%] first-letter:uppercase text-[15px] text-color-secondary ">
                {descripcion}
              </p>

              {leng === 'es' ? (<p className="mt-2 text-[13px] underline">Ver imagenes del platillo aqui.</p>) : <p className="mt-2 text-[13px] underline">See food images here.</p>}
              <Separador />
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[80%]">
            <DialogHeader>
              <DialogTitle className="flex w-full items-center gap-x-3">
                <h2 className="text-black font-bold text-xl md:text-3xl">{nombre}</h2> - <p className="font-semibold text-xl md:text-3xl">${price}</p>
              </DialogTitle>
              <DialogDescription>
                <h2 className="text-gray-600 text-start font-semibold text-[15px] md:text-xl">
                  {descripcion}
                </h2>
              </DialogDescription>
            </DialogHeader>
            <Galeria imagenes={imagenes} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
