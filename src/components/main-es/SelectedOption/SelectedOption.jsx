import React, { useEffect, useState } from "react";
import { menu as MenuEs } from "../../../data/menuEs";
import { menu as MenuEn } from "../../../data/menuEn";
import { CardPlato } from "../../ui/CardPlato";
import { filtrarPlatosPorTipo } from "../../../utils/func";
import { Separador } from "../../ui/Separador";

export const SelectedOption = ({ leng, option }) => {
  const [MenuList, setMenuList] = useState(null);
  const [FilterData, setFilterData] = useState(null);
  const [tiposDeBebida, settiposDeBebida] = useState(null);
  const [tiposDeDestilado, settiposDeDestilado] = useState(null);
  const [IsSpecial, setIsSpecial] = useState(false);
  const [Option, setOption] = useState(null);

  useEffect(() => {
    if (leng === "es") {
      setMenuList(MenuEs);
    } else {
      setMenuList(MenuEn);
    }
    let optionEmpty = leng == "es" ? "botanas" : "appetizers";

    const filteredData = filtrarPlatosPorTipo(
      MenuList,
      option ? option?.toUpperCase() : optionEmpty?.toUpperCase()
    );
    setOption(option);
    setFilterData(filteredData);
  }, [MenuList, option, leng]);

  useEffect(() => {
    if (Option === "bebidas") {
      setIsSpecial(true);
      const bebidasPorTipo = {};
      FilterData?.forEach((bebidas) => {
        const tipoDeBebida = bebidas?.tipo;
        if (tipoDeBebida) {
          if (!bebidasPorTipo[tipoDeBebida]) {
            bebidasPorTipo[tipoDeBebida] = [];
          }
          bebidasPorTipo[tipoDeBebida].push(bebidas);
        }
      });

      settiposDeBebida(bebidasPorTipo);
    } else if (Option === "drinks") {
      setIsSpecial(true);

      const bebidasPorTipo = {};
      FilterData?.forEach((bebidas) => {
        const tipoDeBebida = bebidas?.tipo;
        if (tipoDeBebida) {
          if (!bebidasPorTipo[tipoDeBebida]) {
            bebidasPorTipo[tipoDeBebida] = [];
          }
          bebidasPorTipo[tipoDeBebida].push(bebidas);
        }
      });

      settiposDeBebida(bebidasPorTipo);

    } else if (Option === "destilados") {
      setIsSpecial(true);
      const destiladosPorTipo = {};
      FilterData?.forEach((destilados) => {
        const tipoDedestilado = destilados.tipo?.split(" - ")[1];
        if (tipoDedestilado) {
          if (!destiladosPorTipo[tipoDedestilado]) {
            destiladosPorTipo[tipoDedestilado] = [];
          }
          destiladosPorTipo[tipoDedestilado].push(destilados);
        }
      });

      settiposDeDestilado(destiladosPorTipo);
    } else if (Option === "distillates") {
      setIsSpecial(true);
      const destiladosPorTipo = {};
      FilterData?.forEach((destilados) => {
        const tipoDedestilado = destilados.tipo?.split(" - ")[1];
        if (tipoDedestilado) {
          if (!destiladosPorTipo[tipoDedestilado]) {
            destiladosPorTipo[tipoDedestilado] = [];
          }
          destiladosPorTipo[tipoDedestilado].push(destilados);
        }
      });

      settiposDeDestilado(destiladosPorTipo);
    } else {
      setIsSpecial(false);
    }
  }, [FilterData,Option]);

  return (
    <>
      {FilterData && IsSpecial == false ? (
        <>
          <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">
            {option === "allgrill" ? "all grill" : option}
          </h2>
          <Separador />
          {FilterData.map((plato, index) => (
            <div key={index}>
              <CardPlato
                leng={leng}
                nombre={plato.nombre}
                price={plato.price}
                imagenes={plato.imagenes}
                descripcion={plato.descripcion}
                extra={plato?.extra}
              />
              <Separador />
            </div>
          ))}
        </>
      ) : (
        <>
          {Option === "bebidas" || Option === "drinks" ? (
            <>
              {tiposDeBebida && (
                <>
                  {Object?.entries(tiposDeBebida).map(
                    ([tipo, platos], index) => (
                      <div key={index}>
                        <p>
                        {
                          tipo == "bebidas" && leng == "en" ? "hola" : null
                        }
                        </p>
                        
                        <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">
                          {tipo == "bebidas" && leng == "en" ? "drinks" : tipo}
                        </h2>
                        <Separador />
                        {platos.map((plato, platoIndex) => (
                          <div key={platoIndex}>
                            <CardPlato
                              leng={leng}
                              nombre={plato.nombre}
                              price={plato.price}
                              imagenes={plato.imagenes}
                              descripcion={plato.descripcion}
                            />
                            <Separador />
                          </div>
                        ))}
                      </div>
                    )
                  )}
                </>
              )}
            </>
          ) : null}
          {Option === "destilados" || Option === "distillates" ? (
            <>{tiposDeDestilado && (
              <>
                {Object?.entries(tiposDeDestilado).map(
                  ([tipo, platos], index) => (
                    <div key={index}>
                      <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">
                        {tipo}
                      </h2>
                      <Separador />
                      {platos.map((plato, platoIndex) => (
                        <div key={platoIndex}>
                          <CardPlato
                            leng={leng}
                            nombre={plato.nombre}
                            price={plato.price}
                            imagenes={plato.imagenes}
                            descripcion={plato.descripcion}
                          />
                          <Separador />
                        </div>
                      ))}
                    </div>
                  )
                )}
              </>
            )}</>
          ) : null}
        </>
      )}
    </>
  );
};
