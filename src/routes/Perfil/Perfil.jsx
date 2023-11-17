import { FaEdit as Edit } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Perfil() {

    const dadosUser = JSON.parse(sessionStorage.getItem('data-usuario'))

  return (
    <div className="divPerfil">
        <h1>Perfil</h1>

        <p>Nome: {dadosUser.nome}</p>
        <p>E-mail: {dadosUser.email}</p><Link><Edit/></Link>

    </div>
  )
}
