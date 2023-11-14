import { Link, useNavigate } from "react-router-dom"


export default function Cabecalho() {

  // const rotaAtual = useLocation();

  const navigate = useNavigate();

  const handleLogout = () => {

    sessionStorage.removeItem("token-usuario")
    sessionStorage.removeItem("data-usuario")

    navigate('/')
  }

  if (sessionStorage.getItem('token-usuario')){
    return (
      <header>
        <h1>VitaLink</h1>
  
        <nav>
          <ul>
            <li><Link to={'/home'}>Home</Link></li>
            <li><Link to={'/perfil'}>Perfil</Link></li>
            <li><Link onClick={handleLogout}>Logout</Link></li>
          </ul>
        </nav>
      </header>
    )

  } else {
    return(
      <header>
        <h1>VitaLink</h1>
      </header>
    )
  }
}
