import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Login.scss";

export default function Login() {

  const navigate = useNavigate();

  const [usuario,setUsuario] = useState({
    email: "",
    nome: "",
    senha: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUsuario({...usuario,[name]:value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    let users;

    try{
      const response = await fetch("http://localhost:5000/usuarios");
      users = await response.json();
    } catch (error) {
      alert(`Ocorreu um erro no processamento da sua solicitação! Erro: ${error}`);
    }

    for (var i = 0; i < users.length; i++){

      const user = users[i];

      if (user.email == usuario.email && user.senha == usuario.senha){

        alert("Login realizado com sucesso!");

        const tokenUser = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

        sessionStorage.setItem("token-usuario",tokenUser);

        sessionStorage.setItem("data-usuario",JSON.stringify(users[i]));

        navigate('/home');

        return;
      }

    }

    if (usuario.email === "" && usuario.senha === ""){
      alert("Preencha todos os campos!")
      return;
    }

    alert("Login ou senha incorretos! Tente novamente.")
    setUsuario({
      email: "",
      senha: ""
    })

  }

  return (
    <main className="mainLogin">

      <div className="containerLogin">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <input type="email" name="email" placeholder="Digite seu email" value={usuario.email.trim()} onChange={handleChange}/>
          <input type="password" name="senha" placeholder="Digite sua senha" value={usuario.senha.trim()} onChange={handleChange}/>
          <input type="submit" value="Entrar"/>

        </form>
        <p>Ainda não tem uma conta? <Link to={'/cadastro'}>Criar</Link></p>
      </div>
    </main>
  )
}
