import "../../App.css";
import logo from "../../assets/react.svg";
import { TextoPrincipal } from "../../components/ui/TextoPrincipal";
import { CarouselOptions } from "../../components/ui/CarouselOptions";
import { SelectedOption } from "./SelectedOption/SelectedOption";

export const App = ({leng,option}) => {
  
  return (
    <div className="bg-gray-100 h-full">
      {/* imagen logo */}
      <div className="w-full h-[30vh] flex flex-col justify-center items-center bg-black">
        <img src={logo} className="w-[7%]" alt="logo imagen" />
        <h1 className="text-white text-5xl">el huajuco</h1>
        <h3 className="text-white mt-2">Cocina tradicional y destilado</h3>
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
