import React, { useEffect, useState } from "react";
import { menu } from "../../../data/menuEs";
import { CardPlato } from "../../ui/CardPlato";
import { filtrarPlatosPorTipo } from "../../../utils/func";

export const SelectedOption = ({ option }) => {
  const [MenuList, setMenuList] = useState(null);
  const [FilterData, setFilterData] = useState(null);

  useEffect(() => {
    setMenuList(menu);

    const filteredData = filtrarPlatosPorTipo(MenuList, option?.toUpperCase());
    setFilterData(filteredData);
  }, [MenuList,option]);


  return (
    <>
      {FilterData && (
        <>
          {FilterData.map((plato,index) => 
            <CardPlato key={index} nombre={plato.nombre} info={plato.info} descripcion={plato.descripcion} />
          )}
        </>
      )}
    </>
  );
};
