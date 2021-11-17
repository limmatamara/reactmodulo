import style from '../components/Contato.module.css'
function Contato() {
  return(
    <div>
      <div className={style.contato}>
      <h1>Endereço da DBC</h1>
      <iframe className={style.contato} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.720246282557!2d-51.170870285202!3d-30.016188236922723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636546961575!5m2!1spt-BR!2sbr"></iframe>
    </div>
    </div>
  );
}

export default Contato;