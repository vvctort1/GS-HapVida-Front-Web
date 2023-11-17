import { Link } from "react-router-dom"

export default function Error404() {

  if (sessionStorage.getItem('token-usuario')){
    return(
      <div className="divMain">
        <h1>Erro 404</h1>
        <Link to={'/home'}>Home</Link>
      </div>
    )
  }
  return (
    <div className="divMain">
      <h1>Erro 404</h1>
      <Link to={'/'}>Login</Link>
    </div>
  )
}
