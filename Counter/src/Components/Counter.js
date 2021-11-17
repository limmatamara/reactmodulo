import { useContext } from "react";
import { CountContext } from "../Context/Count";

function Counter () {
  const {count, setCount} = useContext(CountContext);
  return (
    <div>
      <div>
        <p>Contador:{count} </p>
      </div>
      <div>
        <button onClick= {()=> {
            return setCount(count + 1);
        }}> Incrementar</button>
      </div>

      <div>
        <button onClick= {()=> {
            return setCount(count - 1);
        }}> Decrementar</button>
      </div>


    </div>
  )
}

export default Counter;