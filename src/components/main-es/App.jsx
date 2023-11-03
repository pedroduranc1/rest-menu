import "../../App.css";
import { TextoPrincipal } from "../../components/ui/TextoPrincipal";
import { CarouselOptions } from "../../components/ui/CarouselOptions";
import { SelectedOption } from "./SelectedOption/SelectedOption";
import fondo from "../../assets/staticImages/Foto1.webp";
import logo from "../../assets/staticImages/Logo- EL HUAJUCO (Blanco).webp";

export const App = ({leng,option}) => {
  
  return (
    <div className="bg-gray-100 h-full">
      {/* imagen logo */}
      <div className="w-full h-[30vh] md:h-[45vh] flex flex-col bg-bottom bg-cover bg-no-repeat bg-fixed justify-center items-center "
        style={{backgroundImage:`url(${fondo})`}}
      >
        <img src={logo} className="w-[70%] md:w-[350px]" alt="" />
      </div>
      {/* Content */}
      <div className="w-full px-[5%] md:px-0 md:w-[40%] mx-auto h-fit ">
        <CarouselOptions leng={leng} option={option} />
        <TextoPrincipal leng={leng}/>
        <SelectedOption leng={leng} option={option} />
      </div>
    </div>
  );
}
