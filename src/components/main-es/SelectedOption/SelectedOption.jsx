import React, { useEffect, useState } from "react";
import { menu as MenuEs } from "../../../data/menuEs";
import { menu as MenuEn } from "../../../data/menuEn";
import { CardPlato } from "../../ui/CardPlato";
import { filtrarPlatosPorTipo } from "../../../utils/func";

export const SelectedOption = ({ leng , option}) => {
  const [MenuList, setMenuList] = useState(null);
  const [FilterData, setFilterData] = useState(null);

  useEffect(() => {
    if (leng == "es") {
      setMenuList(MenuEs);
    } else {
      setMenuList(MenuEn);
    }
    let optionEmpty = leng == "es" ? "botanas" : "appetizers";

    const filteredData = filtrarPlatosPorTipo(MenuList, option ? option?.toUpperCase() : optionEmpty?.toUpperCase());
    setFilterData(filteredData);
  }, [MenuList, option,leng]);



  return (
    <>
      {FilterData && (
        <>
          {FilterData.map((plato,index) => 
            <CardPlato key={index} leng={leng} nombre={plato.nombre} price={plato.price} imagenes={plato.imagenes} descripcion={plato.descripcion} />
          )}
        </>
      )}
    </>
  );
};
