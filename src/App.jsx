import "./App.css";
import { useParams } from "react-router-dom";
import { App as Main } from "./components/main-es/App";

function App() {

  const {leng,option} = useParams()
 
  return <Main leng={leng} option={option}/>;
}

export default App;
