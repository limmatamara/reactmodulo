import style from './CabecalhoComponent.module.css'
function CabecalhoComponent () {
  const url= 'https://io2.convertiez.com.br/m/lojasmel/shop/products/images/2028189/medium/energeticomonsterultralata473mlmonsterenergy_195631.jpg'

  return (
    <div className={style.cabecalhoComponent}>
      <img src={url} alt="Monster" />
      <p>Melhores Alunos do Vem Ser DBC de Todos os Tempos</p>
      <a href="/">Home</a>
      <a href="/">Sobre</a>
      <a href="/">Contato</a>   
         
    </div>
  );
}

export default CabecalhoComponent;
