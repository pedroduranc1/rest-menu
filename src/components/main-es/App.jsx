import "../../App.css";
import { MainEs } from "../main-es";
import logo from "../../assets/react.svg";
import { ChevronLeft, ChevronRight, Salad } from "lucide-react";
import { Separador } from "../../components/ui/Separador";
import { CardPlato } from "../../components/ui/CardPlato";
import { TextoPrincipal } from "../../components/ui/TextoPrincipal";
import { CarouselOptions } from "../../components/ui/CarouselOptions";
import { useParams } from "react-router-dom";
import { SelectedOption } from "./SelectedOption/SelectedOption";


export const App = () => {

  const {option} = useParams()

  return (
    <>
      {/* imagen logo */}
      <div className="w-full h-[30vh] flex flex-col justify-center items-center bg-black">
        <img src={logo} className="w-[7%]" alt="logo imagen" />
        <h1 className="text-white text-5xl">el huajuco</h1>
        <h3 className="text-white mt-2">Cocina tradicional y destilado</h3>
      </div>
      {/* Content */}
      <div className="w-full px-[5%] md:px-0 md:w-[40%] mx-auto h-[70vh] ">
        <CarouselOptions />
        <TextoPrincipal/>
        <SelectedOption option={option} />
      </div>
    </>
  );
}
