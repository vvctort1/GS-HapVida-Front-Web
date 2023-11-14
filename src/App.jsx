import { Outlet } from "react-router-dom";
import "./App.scss"
import Cabecalho from "./components/Cabecalho";
import Rodape from "./components/Rodape";


export default function App() {
  return (
    <div className="divApp">
      <Cabecalho/>
      <Outlet/>
      <Rodape/>
    </div>
  )
}
