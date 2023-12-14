import React, { Suspense } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Beaker, Milk } from "lucide-react";

//LAZY
import Galeria from "./Galeria";

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
      {/* CARD PLATO */}
      <div className="my-7 w-full h-fit ">
        <Dialog>
          <DialogTrigger asChild>
            <div to={`/${leng}`} className="w-full cursor-pointer h-fit ">
              {/* CONTENT  */}
              <div className="w-full flex relative justify-between items-center">
                <div className="flex  md:gap-x-3">
                  <h2 className="uppercase w-fit font-bold text-color-secondary text-[20px]">
                    {nombre}
                  </h2>
                </div>
                <div className="relative z-[1]">
                  {
                    isDestilado ?
                      (<div className="w-[100px] absolute top-0 right-0 h-full">
                        {/* <div className="flex justify-center space-x-3"><Milk /> <Beaker /></div>
                        <div className="flex justify-around space-x-5">
                          <span>{price}$</span>

                          <span>{descripcion.replace("Botella", "")}</span>
                        </div> */}
                        <div className="grid grid-cols-2 grid-rows-2">
                          <div className="w-full h-fit flex justify-center items-center  "><Milk /></div>
                          <div className="w-full h-fit flex justify-center items-center "><Beaker /></div>
                          <div className="w-full h-fit flex justify-center items-center ">{price}$</div>
                          <div className="w-full h-fit flex justify-center items-center ">{descripcion.replace("Botella", "")}</div>
                        </div>
                      </div>) :
                      (<span className="uppercase text-color-secondary font-semibold text-2xl">
                        ${price}
                      </span>)
                  }
                </div>
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


              {leng === "es" ? (
                <p className="mt-2 text-[13px] underline">
                  Ver imagenes del platillo aqui.
                </p>
              ) : (
                <p className="mt-2 text-[13px] underline">
                  See food images here.
                </p>
              )}
            </div>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[80%]">
            <DialogHeader>
              <DialogTitle className="flex w-full items-center gap-x-3 text-black font-bold text-xl md:text-3xl">
                {nombre} - ${price}
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-start font-semibold text-[15px] md:text-xl">
                {descripcion}
              </DialogDescription>
            </DialogHeader>
            <Galeria imagenes={imagenes} />
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};
