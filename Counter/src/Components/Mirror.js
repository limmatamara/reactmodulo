import { useContext } from "react";
import { CountContext } from "../Context/Count";

function Mirror () {
  const {count} = useContext(CountContext);

  return (
    <>
    <p>Espelho: {count}</p>
    </>
  )
}

export default Mirror;