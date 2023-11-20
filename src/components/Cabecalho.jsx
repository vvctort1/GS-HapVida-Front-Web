import { Link, useLocation, useNavigate } from "react-router-dom"
import "./CabecalhoExemplo.scss"


export default function Cabecalho() {

  const rotaAtual = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {

    sessionStorage.removeItem("token-usuario")
    sessionStorage.removeItem("data-usuario")

    navigate('/')
  }

  if (sessionStorage.getItem('token-usuario')){
    return (
      <header>
  
        <nav>
        <label className="logo">VitaLink</label>
          <ul>
            <li><Link to={'/home'} className={rotaAtual.pathname == "/home" ? "active" : ""}>Home</Link></li>
            <li><Link to={'/perfil'} className={rotaAtual.pathname == "/perfil" ? "active" : ""}>Perfil</Link></li>
            <li><Link onClick={handleLogout}>Logout</Link></li>
          </ul>
        </nav>
      </header>
    )

  } else {
    return(
      <header>
        <nav>
          <label className="logo">VitaLink</label>
        </nav>
      </header>
    )
  }
}
