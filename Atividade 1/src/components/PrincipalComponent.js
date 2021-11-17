import style from './PrincipalComponent.module.css'

function PrincipalComponent () {
  
  const monster = 'https://io2.convertiez.com.br/m/lojasmel/shop/products/images/2028189/medium/energeticomonsterultralata473mlmonsterenergy_195631.jpg'
  return (
    <>
      <h1>Estamos Aprendendo CSS com o Melhor Professor de Todos</h1>
        <div className= {style.principalComponent}>
          <img src={monster} alt="Monster"/>
          <img src={monster} alt="Monster" />
          <img src={monster} alt="Monster" />
        </div>      
    </>
  );
}

export default PrincipalComponent;