import React, { useEffect, useState } from "react";
import { menu as MenuEs } from "../../../data/menuEs";
import { menu as MenuEn } from "../../../data/menuEn";
import { CardPlato } from "../../ui/CardPlato";
import { filtrarPlatosPorTipo } from "../../../utils/func";
import { Separador } from "../../ui/Separador";
import Botella from "../../../assets/Botella.svg";
import Shot from "../../../assets/Shot.svg";
import { ImagenesPlato } from "../../ui/ImagenesPlato";

export const SelectedOption = ({ leng, option }) => {
  const [MenuList, setMenuList] = useState(null);
  const [FilterData, setFilterData] = useState(null);
  const [tiposDeBebida, settiposDeBebida] = useState(null);
  const [tiposDeDestilado, settiposDeDestilado] = useState(null);
  const [IsSpecial, setIsSpecial] = useState(false);
  const [Option, setOption] = useState(null);
  const [isBigImagen, setisBigImagen] = useState(false)
  const [setBigImage, setsetBigImage] = useState(null)

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
  }, [FilterData, Option]);

  const handleClickImage = (imagen) => {
    setisBigImagen(true)
    setBigImage(imagen)
  }

  return (
    <>
      {FilterData && IsSpecial == false ? (
        <>
          <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">
            {Option === "allgrill" ? "all grill" : Option}
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
              <ImagenesPlato imagenes={plato.imagenes}/>
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

                            <ImagenesPlato imagenes={plato.imagenes} />
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
                      <div className="w-full flex ">
                        <div className="w-[80%] h-full">
                          <h2 className="text-5xl mt-5 font-boowie font-bold text-color-primary uppercase">
                            {tipo}
                          </h2>
                          <Separador />
                        </div>
                        <div className="w-[20%] flex justify-around items-end mt-8 h-full p-3 ">
                          <img src={Shot} className="w-7 h-7" alt="" />
                          <img src={Botella} className="w-7 h-7" alt="" />
                        </div>
                      </div>

                      <div className="w-full flex  ">
                        <div className="w-full ">
                          {platos.map((plato, platoIndex) => (
                            <div className="w-full flex " key={platoIndex}>
                              <div className="w-[80%]">
                                <CardPlato
                                  leng={leng}
                                  nombre={plato.nombre}
                                  price={plato.price}
                                  imagenes={plato.imagenes}
                                  descripcion={plato.descripcion}
                                  isDestilado={true}
                                />
                                <ImagenesPlato imagenes={plato.imagenes} />
                                <Separador />
                              </div>
                              <div className="w-[20%] flex justify-center mt-[2%] p-3 ">
                                <span>${plato.price}</span>
                                <span className="mx-1">/</span>
                                <span>{plato?.descripcion?.replace("Botella", "")}</span>
                              </div>
                            </div>
                          ))}
                        </div>

                      </div>
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
