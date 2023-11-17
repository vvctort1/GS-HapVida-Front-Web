import "./Home.scss"
import Error404 from "../Error404/Error404"
import imagem1 from "/img/background-light.gif"


export default function Home() {



  if (sessionStorage.getItem("token-usuario")){
    return (
      <div className="divHome">
          <div className="coluna">
            <img src={imagem1} alt="enfermeira" />
            <h1>Home</h1>
          </div>
          <aside>
            <div className="div1">
              <h3>O que é a Solução?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime aliquid tempore reiciendis debitis, at odit repellendus eos. Asperiores aliquid id mollitia, aliquam est commodi ullam architecto! Ad veniam dignissimos laudantium porro velit aliquid ipsum pariatur eaque saepe architecto, vitae facere.</p>
            </div>
            <div className="div2">
              <h3>O que ela fará?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, exercitationem.</p>
            </div>
            <div className="div3">
              <h3>Como funcionará?</h3>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quo.</p>
            </div>
          </aside>
      </div>
    )
  }
  
  return(
    <>
      <Error404/>
    </>
  )
}
