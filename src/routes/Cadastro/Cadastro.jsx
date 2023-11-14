import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

export default function Cadastro() {

  const navigate = useNavigate();

  
  const [usuario,setUsuario] = useState({
    nome: "",
    email: "",
    senha: "",
    foto: ""
  });
  
  const handleChange = (e) => {
    const { name,value } = e.target;

    setUsuario({...usuario,[name]: value})
  }

  const handlePost = (usuario) => {

    if (usuario.nome !== "" && usuario.email !== "" && usuario.senha !== ""){
      
      fetch("http://localhost:5000/usuarios", {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify(usuario)
      })
      .then((response) => response.json())
      .catch(error => console.log(error))
  
      navigate('/')

      return;
    }

    alert("Preencha todos os campos!")
  }


  return (
    <div>
        <h1>Cadastro</h1>

        <form onSubmit={() => handlePost(usuario)}>
          <input type="text" name="nome" placeholder="Digite seu nome" value={usuario.nome} onChange={handleChange}/>
          <input type="email" name="email" placeholder="Digite seu email" value={usuario.email.trim()} onChange={handleChange}/>
          <input type="password" name="senha" placeholder="Digite sua senha" value={usuario.senha.trim()} onChange={handleChange}/>

          <input type="submit" value="Cadastrar"/>
        </form>

        <p>Já possui conta? <Link to={'/'}>Logar</Link></p>
    </div>
  )
}
