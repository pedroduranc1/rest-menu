import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/es')
  }, [])
  

  return <></>;
}

export default App;