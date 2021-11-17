function OutraLista ({itens}) {
  console.log(itens);
  return (
    <>
    <h3>Lista de Tecnologias</h3>
    {itens.length? (itens.map(item => (
      <div key={item.id}>
         <p >{item.nome} </p>
         <p>{item.idade}</p>
      </div>
     
    ))): (<h1>Lista Vazia</h1>)}
    </>
  );

}

export default OutraLista;