
import "./Perfil.scss";
import foto from "../../img/profile-photo.webp";

export default function Perfil() {

    const dadosUser = JSON.parse(sessionStorage.getItem('data-usuario'))

  return (
    <main className="mainPerfil">

      <div className="containerPerfil">
        <h1>Perfil</h1>
        <img src={foto} alt="foto de perfil" />

        <p><span>Nome:</span> {dadosUser.nome}</p>
        <p><span>E-mail:</span> {dadosUser.email}</p>
      </div>

    </main>
  )
}
