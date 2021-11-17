
import Item from "./Item";

function List() {
  return (
    <>
    <h1>Minha Lista</h1>
      <ul>
        <Item marca="Ferrari" lancamento={1984} />
        <Item marca="Fiat" lancamento={1944} />
        <Item marca="Renault" lancamento={2000} />
      </ul>
    </>
  );
}

export default List;
