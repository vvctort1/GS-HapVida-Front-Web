
import Error404 from "../Error404/Error404"


export default function Home() {



  if (sessionStorage.getItem("token-usuario")){
    return (
      <div className="divHome">
        <main>
          <h1>Home</h1>
        </main>
      </div>
    )
  }
  
  return(
    <>
      <Error404/>
    </>
  )
}
