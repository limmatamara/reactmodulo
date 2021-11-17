import { useContext } from "react";
import { TextContext} from '../Context/Text'

function Text () {
  const {name, setName} = useContext(TextContext);
  return (
    <div>
      <div>
      <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Digite o seu nome" />
      </div>
      <p>Nome: {name}</p>


    </div>
  )
}

export default Text;