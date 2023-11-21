import "./Rodape.scss"

export default function Rodape() {
  
  return (
    <footer>
      <div className="containerFooter">
        <div className="col">
          <h3>Endereço: </h3>
          <p>Avenida das Conchas, 730 - BR101</p>
        </div>
        <div className="col">
          <h3>Contato: </h3>
          <p>smartcomfort12@efmail.com</p>
        </div>
        <div className="col">
          <h3>Redes Sociais: </h3>
          <ul>
            <li>Tiktok</li>
            <li>Instagram</li>
            <li>X</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
