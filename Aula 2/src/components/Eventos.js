import Button from "./Button";

function Eventos() {
  function meuEvento() {
    console.log(`Primeiro Evento por props`);
  }

  function segundEvento() {
    console.log('Ativando segundo evento');
  }
  return (
    <>
      <p>Clique para disparar um evento</p>
      <Button event={meuEvento} text="Primeiro Evento" />
      <Button event={segundEvento} text="Segundo Evento" />
      <button onClick={meuEvento}>Ativar!</button>
    </>
  )
}

export default Eventos