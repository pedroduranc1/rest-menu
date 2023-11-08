import React from "react";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="font-boowie font-bold text-2xl">Importante</h2>
      <ul className="w-full px-[5%] md:px-0 md:w-[40%] my-5 flex flex-col gap-y-3 mx-auto">
        <li>
          LAS MARCAS AQUÍ MOSTRADAS, SON PROPIEDAD DE SUS CREADORES Y USO
          EXCLUSIVAMENTE INFORMATIVO.
        </li>
        <li>
          LOS ALIMENTOS CRUDOS O POCOS COCIDOS INCREMENTAN EL RIESGO DE
          INTOXICACIONES E INFECCIONES EN PERSONAS SENSIBLES. EL CONSUMO DEL
          PLATILLO ES RESPONSABILIDAD DE QUIEN LO PIDE.
        </li>
        <li>
          EL GRAMAJE INDICADO EN CADA PLATILLO INFORMA LA PORCIÓN DE PROTEÍNA
          QUE CONTIENE.
        </li>
        <li>PRECIOS AL PÚBLICO EN M.N INCLUYEN I.V.A.</li>
        <li>LA PROPINA NO ES OBLIGATORIA.</li>
        <li>
          ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN
          EXPRESS.{" "}
        </li>
        <li>EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN.</li>
      </ul>
    </div>
  );
};
