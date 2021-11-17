import {useState} from 'react';



function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
  }
  function limparEmail() {
    setUserEmail('');
    setEmail('');
  }
  return (
    <>
      <h2>Cadastre o seu e-mail</h2>
      <form>
        <input value={email} type="email" placeholder="Digite o seu e-mail" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" onClick={enviarEmail}>Enviar E-mail</button>
        {userEmail && (
          <div>
            <p>O E-amil do usuário é: {userEmail}</p>
            <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
        )}
      </form>
    </>
  )
}

export default Condicional;