import React from "react";
import { Separador } from "./Separador";

export const TextoPrincipal = ({ leng }) => {
  return (
    <>
      {/* texto principal */}
      <div className="w-full h-fit">
        {leng === "es" ? (
          <h2 className="uppercase font-boowie font-bold text-3xl md:text-5xl">Para Compartir</h2>
        ) : (
          <h2 className="uppercase font-boowie font-bold text-3xl md:text-5xl">TO SHARE</h2>
        )}
        <Separador />
      </div>
    </>
  );
};
