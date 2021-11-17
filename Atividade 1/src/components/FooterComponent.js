import style from './FooterComponent.module.css'

function FooterComponent () {
  return (
    <>
      <div className={style.footerComponent} >
        <ul>
          <a href="/">Home</a>
          <a href="/">Sobre</a>
          <a href="/">Contato</a>  
        </ul>

        <p>Av. Andaraí, 531 - Porto Alegre</p>
      </div>
    </>
  );
}

export default FooterComponent;