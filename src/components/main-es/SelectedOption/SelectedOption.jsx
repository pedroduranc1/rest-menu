import React, { useEffect, useState } from "react";
import { menu as MenuEs } from "../../../data/menuEs";
import { menu as MenuEn } from "../../../data/menuEn";
import { CardPlato } from "../../ui/CardPlato";
import { filtrarPlatosPorTipo } from "../../../utils/func";
import { Separador } from "../../ui/Separador";

export const SelectedOption = ({ leng, option }) => {
  const [MenuList, setMenuList] = useState(null);
  const [FilterData, setFilterData] = useState(null);
  const [TiposDeDestilados, setTiposDeDestilados] = useState(null);
  const [DestiladosPorTipos, setDestiladosPorTipos] = useState(null);

  useEffect(() => {
    if (leng == "es") {
      setMenuList(MenuEs);
    } else {
      setMenuList(MenuEn);
    }
    let optionEmpty = leng == "es" ? "botanas" : "appetizers";

    const filteredData = filtrarPlatosPorTipo(
      MenuList,
      option ? option?.toUpperCase() : optionEmpty?.toUpperCase()
    );
    setFilterData(filteredData);
  }, [MenuList, option, leng]);

  useEffect(() => {
    const destilados = [];
    const tiposDestiladosSet = new Set();
    if (FilterData) {
      if (option == "destilados") {
        FilterData?.forEach((distilado) => {
          // Suponiendo que "tipo" contiene valores como "Distilled - Tequila"
          const tipoDestilado = distilado.tipo?.split(" - ")[1];

          if (tipoDestilado) {
            tiposDestiladosSet.add(tipoDestilado);
          }
        });

        // Convertir el conjunto "tiposDestiladosSet" en un array "destilados" sin duplicados
        tiposDestiladosSet.forEach((tipo) => {
          destilados.push(tipo);
        });
        setTiposDeDestilados(destilados);
      }
      if (option == "distillates") {
        FilterData.forEach((distilado) => {
          // Suponiendo que "tipo" contiene valores como "Distilled - Tequila"
          const tipoDestilado = distilado.tipo?.split(" - ")[1];

          if (tipoDestilado) {
            tiposDestiladosSet.add(tipoDestilado);
          }
        });

        // Convertir el conjunto "tiposDestiladosSet" en un array "destilados" sin duplicados
        tiposDestiladosSet.forEach((tipo) => {
          destilados.push(tipo);
        });
        setTiposDeDestilados(destilados);
      }
    }
  }, [FilterData]);

  useEffect(() => {
    const platosPorTipo = {};
    FilterData?.forEach((distilado) => {
      const tipoDestilado = distilado.tipo?.split(" - ")[1];
      if (tipoDestilado) {
        if (!platosPorTipo[tipoDestilado]) {
          platosPorTipo[tipoDestilado] = [];
        }
        platosPorTipo[tipoDestilado].push(distilado);
      }
    });

    setDestiladosPorTipos(platosPorTipo);
  }, [TiposDeDestilados]);

  return (
    <>
      {option == "destilados" || option == "distillates" ? (
        <>
          {DestiladosPorTipos && (
            <>
              {Object.entries(DestiladosPorTipos).map(([tipo, platos], index) => (
                <div key={index}>
                  <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">{tipo}</h2>
                  <Separador/>
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
              ))}
            </>
          )}
        </>
      ) : (
        <>
          {FilterData && (
            <>
              <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">{option === "allgrill" ? "all grill" : option}</h2>
              <Separador/>
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
          )}
        </>
      )}
    </>
  );
};
