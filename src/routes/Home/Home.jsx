import "./Home.scss"
import Error404 from "../Error404/Error404"
import imagem1 from "../../img/background-light.gif"


export default function Home() {



  if (sessionStorage.getItem("token-usuario")){
    return (
      <main className="mainHome">
        <div className="colunas">
          <section className="coluna1">
            <img src={imagem1} alt="paisagem" />

            <div className="solucao">
              <h1>SmartComfort</h1>
              <p>Almofada inteligente que trará além de conforto, uma maior segurança ao paciente acamado. Monitorando o paciente, alertando até os cuidadores que não estão presentes sobre a hora que o paciente necessita que a mudança de posição seja realizada.</p>
            </div>
          </section>
          <section className="coluna2">
            <div className="vantagens">
              <div className="cards">
                <div className="card">Maior Conforto</div>
                <div className="card">Monitoramento remoto</div>
                <div className="card">Alerta inteligente</div>
              </div>
            </div>
          </section>
        </div>
          <aside>
            <div className="div1">
              <h3>O que é a Solução?</h3>
              <p>Um sensor de posição inserido internamente da almofada anotômica colocada entre os joelhos do paciente acamado, trazendo maior conforto.</p>
            </div>
            <div className="div2">
              <h3>O que ela fará?</h3>
              <p>Alertar os cuidadores na hora certa de realizar a mudança de decúbito.</p>
            </div>
            <div className="div3">
              <h3>Como funcionará?</h3>
              <p>Emitirá o alerta assim que o sensor notar que não houve uma mudança de posição em pelo 2h, desativando o alarme assim que a mudança for feita.</p>
            </div>
          </aside>
      </main>
    )
  }
  
  return(
    <>
      <Error404/>
    </>
  )
}
