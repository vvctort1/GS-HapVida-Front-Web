import Cabecalho from "../../components/Cabecalho";
import { Link, useNavigate } from "react-router-dom";


export default function Home() {

  const navigate = useNavigate();

  const handleLogout = () => {

    sessionStorage.removeItem("token-usuario")
    sessionStorage.removeItem("data-usuario")

    navigate('/')
  }

  return (
    <div>
        <Cabecalho/>
        <h1>Home</h1>
        <Link onClick={handleLogout}>Logout</Link>
    </div>
  )
}
