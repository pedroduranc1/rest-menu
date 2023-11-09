import React from "react";

export const Footer = ({ leng }) => {
  return (
    <div className="flex mt-[3%] flex-col justify-center items-center">
      <h2 className="font-boowie font-bold text-2xl">
        {" "}
        {leng == "es" ? "Importante" : "Important"}{" "}
      </h2>
      <ul className="w-full px-[5%] md:px-0 md:w-[40%] my-5 flex flex-col gap-y-3 mx-auto">
        <li>
          {leng == "es"
            ? "LAS MARCAS AQUÍ MOSTRADAS, SON PROPIEDAD DE SUS CREADORES Y USO EXCLUSIVAMENTE INFORMATIVO."
            : "THE BRANDS SHOWN HERE ARE THE PROPERTY OF THEIR CREATORS AND ARE USED EXCLUSIVELY FOR INFORMATIONAL PURPOSES."}
        </li>
        <li>
          {leng == "es"
            ? "LOS ALIMENTOS CRUDOS O POCOS COCIDOS INCREMENTAN EL RIESGO DE INTOXICACIONES E INFECCIONES EN PERSONAS SENSIBLES. EL CONSUMO DEL PLATILLO ES RESPONSABILIDAD DE QUIEN LO PIDE."
            : "RAW OR UNDERCOOKED FOODS INCREASE THE RISK OF INTOXICATIONS AND INFECTIONS IN SENSITIVE INDIVIDUALS. THE CONSUMPTION OF THE DISH IS THE RESPONSIBILITY OF THE PERSON ORDERING IT."}
        </li>
        <li>
          {leng == "es"
            ? "EL GRAMAJE INDICADO EN CADA PLATILLO INFORMA LA PORCIÓN DE PROTEÍNA QUE CONTIENE."
            : " THE GRAMMAGE INDICATED IN EACH DISH INFORMS THE PORTION OF PROTEIN IT CONTAINS."}
        </li>
        <li>
          {leng == "es"
            ? "PRECIOS AL PÚBLICO EN M.N INCLUYEN I.V.A."
            : "PRICES TO THE PUBLIC IN MEXICAN PESOS INCLUDE I.V.A. (VALUE ADDED TAX)."}{" "}
        </li>
        <li>
          {leng == "es"
            ? "LA PROPINA NO ES OBLIGATORIA."
            : "TIPS ARE NOT MANDATORY."}
        </li>
        <li>
          {leng == "es"
            ? "ACEPTAMOS PAGOS EN EFECTIVO, TARJETAS VISA, MASTER CARD Y AMERICAN EXPRESS."
            : "WE ACCEPT PAYMENTS IN CASH, VISA, MASTER CARD, AND AMERICAN EXPRESS CREDIT CARDS."}
        </li>
        <li>
          {leng == "es"
            ? "EL PAGO CON TARJETA NO GENERA NINGUNA COMISIÓN."
            : "CREDIT CARD PAYMENT DOES NOT GENERATE ANY COMMISSION."}
        </li>
      </ul>
    </div>
  );
};
